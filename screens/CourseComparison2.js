import React from 'react';
import { Text, View, Image, Button, TouchableOpacity, Picker, ScrollView, StyleSheet } from 'react-native';
import firebase from '../database/firebaseDb';

export default class CourseComparison2 extends React.Component {

    constructor() {
        super()
        this.state = {
            selectProgram: '',
            ProgramList: [],
            selectFaculty: '',
            FacultyList: [],
            selectSchool: '',
            SchoolList: [],
            selectCourse: '',
            CourseList: [],
            CourseOne: []
        }
    }

    componentDidMount() {

        var read = this.props.route.params
        console.log('COURSE 1 params : ', read.Course1)
        this.setState({
            CourseOne: read.Course1
        })
        this.getProgram()
        this.getSchool()

    }

    getProgram = () => {
        const fed = this;
        const prgArr = [];
        firebase
            .firestore()
            .collection('Programmes')
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    const { ProgrammeName } = doc.data();
                    prgArr.push({
                        key: doc.id,
                        doc,
                        ProgrammeName
                    });
                })
                // console.log(prgArr)
                fed.setState({
                    ProgramList: prgArr
                })
            })
            .catch(err => {
                console.log('error :', err)
            })
    }


    getFaculties = (itemValue) => {
        const fed = this;
        const prgArr = [];
        firebase
            .firestore()
            .collection('Faculties')
            .where('Programme', '==', itemValue)
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    const { FacultyName } = doc.data();
                    prgArr.push({
                        key: doc.id,
                        doc,
                        FacultyName
                    });
                })
                console.log('Faculty', prgArr)
                fed.setState({
                    FacultyList: prgArr
                })
            })
            .catch(err => {
                console.log('error :', err)
            })
    }

    setProgram = (itemValue) => {
        this.setState({ selectProgram: itemValue })
        this.getFaculties(itemValue)
    }

    setCourse = (itemValue) => {
        this.setState({ selectSchool: itemValue })
        this.getCourse(itemValue)
    }

    getSchool = () => {
        const fed = this;
        const prgArr = [];
        firebase
            .firestore()
            .collection('Schools')
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    const { SchoolName } = doc.data();
                    prgArr.push({
                        key: doc.id,
                        doc,
                        SchoolName
                    });
                })
                // console.log(prgArr)
                fed.setState({
                    SchoolList: prgArr
                })
            })
            .catch(err => {
                console.log('error :', err)
            })
    }

    getCourse = (itemValue) => {
        // console.log('getcourses')
        // console.log('Prog:',this.state.selectProgram)
        // console.log('Faculty',this.state.selectFaculty)
        // console.log('SchoolName',itemValue)
        const fed = this;
        const courseArr = [];
        firebase
            .firestore()
            .collection('Courses')
            .where('Programme', '==', this.state.selectProgram)
            .where('Faculty', '==', this.state.selectFaculty)
            .where('SchoolName', '==', itemValue)
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (res) {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(res.id, " => ", res.data());
                    const {
                        CourseName, Faculty, Programme, SchoolName, ProgrammeOverview, ProgrammeStructure, EntryQualification,
                        Type, Intakes, YearsOfStudy, Exemptions, Fees, AssessmentAndExams
                    } = res.data();
                    courseArr.push({
                        key: res.id,
                        res,
                        CourseName,
                        Faculty,
                        Programme,
                        SchoolName,
                        ProgrammeOverview,
                        ProgrammeStructure,
                        EntryQualification,
                        Type,
                        Intakes,
                        YearsOfStudy,
                        Exemptions,
                        Fees,
                        AssessmentAndExams
                    });
                });

                fed.setState({
                    CourseList: courseArr
                });

            })
            .catch(err => {
                console.log('error :', err)
            })
    }

    move = () => {
        var CourseTwo = this.state.CourseList.filter(x => x.CourseName == this.state.selectCourse)
        console.log('Move to course detail')

        this.props.navigation.navigate('CourseComparisonDetail', {
            Course2: CourseTwo,
            Course1: this.state.CourseOne
        })
    }


    render() {
        return (
            <ScrollView style={styles.container}>

                <Text style={{ textAlign: 'center', marginVertical: 20, fontWeight: 'bold', fontSize: 20 }}>
                    Compare Course 2
      </Text>

                <View>
                    <View style={{ height: 200 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16, textAlign: 'left', marginHorizontal: 20, marginTop: 10 }}>Program 2:</Text>
                        <Picker
                            selectedValue={this.state.selectProgram}
                            style={{ height: 30, width: "60%", alignSelf: 'center', marginTop: 10 }}
                            onValueChange={(itemValue, itemIndex) => this.setProgram(itemValue)} >
                            {
                                this.state.ProgramList.map((item, i) => {
                                    return (
                                        <Picker.Item label={item.ProgrammeName} value={item.ProgrammeName} />
                                    )
                                })
                            }
                        </Picker>
                    </View>

                    {this.state.selectProgram == '' ?
                        null
                        :
                        <View style={{ height: 200 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16, textAlign: 'left', marginHorizontal: 20, marginTop: 20 }}>Faculties 2:</Text>
                            <Picker
                                selectedValue={this.state.selectFaculty}
                                style={{ height: 50, width: "90%", alignSelf: 'center', marginTop: 10 }}
                                onValueChange={(itemValue, itemIndex) => this.setState({ selectFaculty: itemValue })} >
                                {
                                    this.state.FacultyList.map((item, i) => {
                                        return (
                                            <Picker.Item label={item.FacultyName} value={item.FacultyName} />
                                        )
                                    })
                                }
                            </Picker>
                        </View>
                    }


                    {this.state.selectFaculty == '' ?
                        null
                        :
                        <View style={{ height: 200 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16, textAlign: 'left', marginHorizontal: 20, marginTop: 20 }}>School 2:</Text>
                            <Picker
                                selectedValue={this.state.selectSchool}
                                style={{ height: 50, width: "90%", alignSelf: 'center', marginTop: 10 }}
                                onValueChange={(itemValue, itemIndex) => this.setCourse(itemValue)} >
                                {
                                    this.state.SchoolList.map((item, i) => {
                                        return (
                                            <Picker.Item label={item.SchoolName} value={item.SchoolName} />
                                        )
                                    })
                                }
                            </Picker>
                        </View>
                    }


                    {/* {this.state.selectSchool == '' ?
                        null
                        :
                        <View style={{ height: 200 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16, textAlign: 'left', marginHorizontal: 20, marginTop: 20 }}>Course 2:</Text>
                            <Picker
                                selectedValue={this.state.selectCourse}
                                style={{ height: 50, width: "60%", alignSelf: 'center', marginTop: 10 }}
                                onValueChange={(itemValue, itemIndex) => this.setState({ selectCourse: itemValue })} >
                                {
                                    this.state.CourseList.map((item, i) => {
                                        return (
                                            <Picker.Item label={item.CourseName} value={item.CourseName} />
                                        )
                                    })
                                }
                            </Picker>
                        </View>
                    } */}

                    {this.state.selectSchool == '' ?
                        null
                        :
                        <View style={{ height: 200 }}>
                            
                            <Text style={{ fontWeight: 'bold', fontSize: 16, textAlign: 'left', marginHorizontal: 20, marginTop: 20 }}>Course 1:</Text>
                            {this.state.CourseList < 1  || this.state.CourseList < null?
                                <Text> No course found </Text>
                                :
                                <Picker
                                    selectedValue={this.state.selectCourse}
                                    style={{ height: 50, width: "60%", alignSelf: 'center', marginTop: 10 }}
                                    onValueChange={(itemValue, itemIndex) => this.setState({ selectCourse: itemValue })} >
                                    {
                                        this.state.CourseList.map((item, i) => {
                                            return (
                                                <Picker.Item label={item.CourseName} value={item.CourseName} />
                                            )
                                        })
                                    }
                                </Picker>
                            }
                        </View>
                    }


                    {this.state.selectCourse == '' ?
                        null
                        :
                        <TouchableOpacity style={{ height: 50, width: '70%', borderRadius: 50, backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginVertical: 70 }}
                            onPress={() => this.move()} >
                            <Text>Compare Both </Text>
                        </TouchableOpacity>
                    }





                </View>




            </ScrollView>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})