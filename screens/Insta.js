import React, { Component } from 'react';
import { Text,StyleSheet, ScrollView, ActivityIndicator, View, Image, Dimensions, TouchableOpacity } from 'react-native';

class Insta extends Component {

    constructor(){
        super();
        this.state= {
            liked: false,
            screenwidth: Dimensions.get("window").width
        };
    }
        likeToggled(){
            this.setState({
                liked: !this.state.liked
            })
        }

        likeToggledd(){
            this.setState({
                likedd: !this.state.likedd
            })
        }
    
render()
{
    const heartIconColor = (this.state.liked) ? "rgb(252,61,57)" :null;
    const heartIconColorr = (this.state.likedd) ? "rgb(252,61,57)" :null;

    return(
        <ScrollView style={{ flex:1, width:100 + "%", height:100 + "%" }}>
           <View style={styles.tempNav}>
               <Text style= {{fontSize:20}}>Images</Text>
            </View>
            <View style={styles.userBar}>
                <View style={{ flexDirection: "row" , alignItems: "center"}}>
                    <Image style={styles.userPic}
            source={require('../assets/sim123.png')}
                    />
                    <Text style={{ fontSize: 16, marginLeft: 10}}>Openhouse2019</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <Text style={{fontSize: 30}}>...</Text>
                </View>
            </View>
            <TouchableOpacity
            activeOpacity={0.5}
                onPress={() => {
                    this.likeToggled();
                }}
                >
            <Image
            style={{ width:this.state.screenwidth , height:200}}
            source={require('../assets/123.png')}
    
            />
            </TouchableOpacity>
             <View style={styles.iconBar}>
                 <Image style={[styles.icon, {height: 40, width: 40, tintColor:heartIconColor}]} source={require("../assets/heart.png")} />



             </View>
             <View style={styles.navbarr}>

             </View>
             <View style={styles.userBar}>
                <View style={{ flexDirection: "row" , alignItems: "center"}}>
                    <Image style={styles.userPic}
            source={require('../assets/sim123.png')}
                    />
                    <Text style={{ fontSize: 16, marginLeft: 10}}>Openhouse2019</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <Text style={{fontSize: 30}}>...</Text>
                </View>
            </View>
            <TouchableOpacity
            activeOpacity={0.5}
                onPress={() => {
                    this.likeToggledd();
                }}
                >
            <Image
            style={{ width:this.state.screenwidth , height:200}}
            source={require('../assets/1231.jpg')}
    
            />
            </TouchableOpacity>
             <View style={styles.iconBar}>
                 <Image style={[styles.icon, {height: 40, width: 40, tintColor:heartIconColorr}]} source={require("../assets/heart.png")} />


             </View>
             <View style={styles.navbarr}>

             </View>
        </ScrollView>
    );

    }
}

const styles = StyleSheet.create({
    tempNav: {
        width: 100 + "%",
        height:56,
        marginTop:0,
        backgroundColor: "rgb(250,250,250)",
        borderBottomColor: "rgb(250,250,250)",
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: "center",
        alignItems: "center"
    },


    userBar: {
        width: 100 + "%",
        height: 50,
        backgroundColor:"rgb(250,250,250)",
        flexDirection: "row",
        paddingHorizontal: 10,
        justifyContent:"space-between"
    },

    userPic: {
        height:40,
        width: 40,
        borderRadius:20
    },

    iconBar: {
        height: 10,
        width: 100+"%",
        backgroundColor: "rgb(250,250,250)",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems:"center" ,


    },
    icon: {
       marginLeft:5
    },

    commentBar: {
        width: 100+"%",
        height: 10,
        backgroundColor:"rgb(255,255,255)",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,


    },
    navbarr: {
        width: 100+"%",
        height: 50,
        backgroundColor: "rgb(255,255,255)"
    }
});

export default Insta; 

