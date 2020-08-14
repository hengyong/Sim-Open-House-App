import React from 'react';
import { Text, View, Image, Button, TouchableOpacity, ScrollView ,StyleSheet} from 'react-native';



export default class CourseDetail extends React.Component {

    constructor(){
        super()
        this.state={
            Detail:''
        }
    }

    componentDidMount() {       
        console.log("Courses Detail screen")
        var read = this.props.route.params
        console.log('Detail === >',read.itemDetail)
        this.setState({
            Detail:read.itemDetail
        })
    }
  render() {	
	return (
    <ScrollView style={styles.container}>
        <Text style={{color:'black',fontWeight:'bold',textAlign:'center',margin:20,fontSize:20}}> Course Detail</Text>
        
        <Text style={{fontWeight:'bold',marginLeft:20,marginVertical:10}}>Course :
            <Text style={{fontWeight:'normal'}}>{' '}{this.state.Detail.CourseName}</Text>
        </Text>

        <Text style={{fontWeight:'bold',marginLeft:20,marginVertical:10}}>Faculty :
            <Text style={{fontWeight:'normal'}}>{' '}{this.state.Detail.Faculty}</Text>
        </Text>
        
        <Text style={{fontWeight:'bold',marginLeft:20,marginVertical:10}}>Programme :
            <Text style={{fontWeight:'normal'}}>{' '}{this.state.Detail.Programme}</Text>
        </Text>

        <Text style={{fontWeight:'bold',marginLeft:20,marginVertical:10}}>School :
            <Text style={{fontWeight:'normal'}}>{' '}{this.state.Detail.SchoolName}</Text>
        </Text>

        <Text style={{fontWeight:'bold',marginLeft:20,marginVertical:10}}>Program Overview :
            <Text style={{fontWeight:'normal'}}>{' '}{this.state.Detail.ProgrammeOverview}</Text>
        </Text>

        <Text style={{fontWeight:'bold',marginLeft:20,marginVertical:10}}>Program Structure :
            <Text style={{fontWeight:'normal'}}>{' '}{this.state.Detail.ProgrammeStructure}</Text>
        </Text>

        <Text style={{fontWeight:'bold',marginLeft:20,marginVertical:10}}>Entry Qualification :
            <Text style={{fontWeight:'normal'}}>{' '}{this.state.Detail.EntryQualification}</Text>
        </Text>

        <Text style={{fontWeight:'bold',marginLeft:20,marginVertical:10}}>Type :
            <Text style={{fontWeight:'normal'}}>{' '}{this.state.Detail.Type}</Text>
        </Text>

        <Text style={{fontWeight:'bold',marginLeft:20,marginVertical:10}}>Intakes :
            <Text style={{fontWeight:'normal'}}>{' '}{this.state.Detail.Intakes}</Text>
        </Text>

        <Text style={{fontWeight:'bold',marginLeft:20,marginVertical:10}}>Years Of Study :
            <Text style={{fontWeight:'normal'}}>{' '}{this.state.Detail.YearsOfStudy}</Text>
        </Text>

        <Text style={{fontWeight:'bold',marginLeft:20,marginVertical:10}}>Exemptions :
            <Text style={{fontWeight:'normal'}}>{' '}{this.state.Detail.Exemptions}</Text>
        </Text>

        <Text style={{fontWeight:'bold',marginLeft:20,marginVertical:10}}>Fees:
            <Text style={{fontWeight:'normal'}}>{' '}{this.state.Detail.Fees}</Text>
        </Text>

        <Text style={{fontWeight:'bold',marginLeft:20,marginVertical:10}}>Assessments And Exams :
            <Text style={{fontWeight:'normal'}}>{' '}{this.state.Detail.AssessmentsAndExams}</Text>
        </Text>

    </ScrollView>
 )}
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})