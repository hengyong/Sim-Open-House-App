import React from 'react';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// For AuthStack
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Home from '../screens/Home';

// For HomeStack
import GeneralInformation from '../screens/GeneralInformation';
import SchoolInformation from '../screens/SchoolInformation';
import StudentExperience from '../screens/StudentExperience';
import Admissions from '../screens/Admissions';
import Signout from '../screens/Signout';

// For GeneralInfoStack 
import Faqs from '../screens/Faqs';
import GettingHere from '../screens/GettingHere';
import ContactUs from '../screens/ContactUs';

// For StudentExpStack
import StudentLife from '../screens/StudentLife';
import StudentDevelopment from '../screens/StudentDevelopment';
import CareerDevelopment from '../screens/CareerDevelopment';
import Events from '../screens/Events';
import SocialMedia from '../screens/SocialMedia';
import StudentTestimonials from '../screens/StudentTestimonials';
import StudentTestimonialDetails from '../screens/StudentTestimonialDetails';
import Insta from '../screens/Insta';

import Gallery from '../screens/Gallery';
import Instagram from '../screens/Instagram';
import GalleryM from '../screens/GalleryM';
import SocialMedia2 from '../screens/SocialMedia2';
import Insta2 from '../screens/Insta2';

// For SchoolInfoStack
import Programmes from '../screens/Programmes';
import CourseDetail from '../screens/CourseDetail'
import Faculties from '../screens/Faculties';
import Courses from '../screens/Courses';
import Courses2 from '../screens/Courses2';
import Schools from '../screens/Schools';
import CourseComparison from '../screens/CourseComparison';
import CourseComparison2 from '../screens/CourseComparison2';
import CourseComparisonDetail from '../screens/CourseComparisonDetail';

// For RegistrationStack
import FinancialMatters from '../screens/FinancialMatters';
import HowToPay from '../screens/HowToPay';
import FinancialAssistance from '../screens/FinancialAssistance';
import Scholarship from '../screens/Scholarship';
import HowToApply from '../screens/HowToApply';


const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const GeneralInfoStack = createStackNavigator();
const StudentExpStack = createStackNavigator();
const SchoolInfoStack = createStackNavigator();
const RegistrationStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const BottomTabScreen = () => (

  <BottomTab.Navigator>
      <BottomTab.Screen 
      name='Home' 
      component={HomeStackScreen} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
      />

      <BottomTab.Screen 
      name='Signout' 
      component={Signout}
      options={{
        tabBarLabel: 'Signout',
        tabBarIcon: ({ color, size }) => (
          <Entypo name="log-out" color={color} size={size} />
        ),
        tabBarVisible: false
      }} 
      
      />
  </BottomTab.Navigator>

);


const AuthStackScreen = () => (
  
  <AuthStack.Navigator initialRouteName="Login">
    <AuthStack.Screen 
    name="Login" 
    component={Login} 
    options={{ 
      header: () => null
    }}
    />

    <AuthStack.Screen 
    name="Signup" 
    component={Signup} 
    options={{ 
      title: "Sign Up"
    }}

    />
    <AuthStack.Screen 
    name="Home" 
    component={BottomTabScreen} 
    options={{ 
      header: () => null
    }}
    />

  </AuthStack.Navigator>
);


const HomeStackScreen = () => (
  
  <HomeStack.Navigator initialRouteName="Home">
    <HomeStack.Screen 
    name="Home" 
    component={Home} 
    options={{ 
      header: () => null
    }}
    />

    <HomeStack.Screen 
    name="SchoolInformation" 
    component={SchoolInfoStackScreen} 
    options={{ 
      header: () => null
    }}
    />

    <HomeStack.Screen 
    name="Admissions" 
    component={RegistrationStackScreen} 
    options={{ 
      header: () => null
    }}
    />

    <HomeStack.Screen 
    name="StudentExperience" 
    component={StudentExpStackScreen} 
    options={{ 
      header: () => null
    }}
    />

    <HomeStack.Screen 
    name="GeneralInformation" 
    component={GeneralInfoStackScreen} 
    options={{ 
      header: () => null
    }}
    />
    
   
    

  </HomeStack.Navigator>
);

const GeneralInfoStackScreen = () => (
  
  <GeneralInfoStack.Navigator initialRouteName="GeneralInfomation">
    <GeneralInfoStack.Screen 
    name="GeneralInformation" 
    component={GeneralInformation} 
    options={{ 
      title: "General Information"
    }}
    />
    <GeneralInfoStack.Screen 
    name="Faqs" 
    component={Faqs} 
    options={{ title: "FAQs"}}
    />
    <GeneralInfoStack.Screen 
    name="GettingHere" 
    component={GettingHere} 
    options={{ title: "Getting Here"}}
    />
    <GeneralInfoStack.Screen 
    name="ContactUs" 
    component={ContactUs} 
    options={{ title: "Contact Us"}}
    />
  </GeneralInfoStack.Navigator>
);


const StudentExpStackScreen = () => (

  <StudentExpStack.Navigator initialRouteName="StudentExperience">
    <StudentExpStack.Screen 
    name="StudentExperience" 
    component={StudentExperience} 
    options={{ 
      title: "Student Experience"
    }}
    />
    <StudentExpStack.Screen 
    name="StudentLife" 
    component={StudentLife} 
    options={{ title: "Student Life"}}
    />
    <StudentExpStack.Screen 
    name="Events" 
    component={Events} 
    options={{ title: "Events"}}
    />
    <StudentExpStack.Screen 
    name="Gallery" 
    component={Gallery} 
    options={{ title: "Media"}}
    />
    <StudentExpStack.Screen 
    name="SocialMedia" 
    component={SocialMedia} 
    options={{ title: "2019 SIM Open House"}}
    />
    <StudentExpStack.Screen 
    name="Insta" 
    component={Insta} 
    options={{ title: "Instagram"}}
    />
    <StudentExpStack.Screen 
    name="Instagram" 
    component={Instagram} 
    options={{ title: "SIM_SOCIAL"}}
    />
    <StudentExpStack.Screen 
    name="StudentTestimonials" 
    component={StudentTestimonials} 
    options={{ title: "Student Testimonials"}}
    />
    <StudentExpStack.Screen 
    name="StudentTestimonialDetails" 
    component={StudentTestimonialDetails} 
    options={{ title: "Student Testimonial details"}}
    />
    <StudentExpStack.Screen 
    name="StudentDevelopment" 
    component={StudentDevelopment} 
    options={{ title: "Student Development"}}
    />
    <StudentExpStack.Screen 
    name="CareerDevelopment" 
    component={CareerDevelopment} 
    options={{ title: "Career Development"}}
    />
     <StudentExpStack.Screen 
    name="GalleryM" 
    component={GalleryM} 
    options={{ title: "Gallery Menu"}}
    />
    <StudentExpStack.Screen 
    name="SocialMedia2" 
    component={SocialMedia2} 
    options={{ title: "2018 SIM Open House"}}
    />
    <StudentExpStack.Screen 
    name="Insta2" 
    component={Insta2} 
    options={{ title: "2018 SIM Open House"}}
    />
  </StudentExpStack.Navigator>
);

const SchoolInfoStackScreen = () => (

  <SchoolInfoStack.Navigator initialRouteName="SchoolInformation">
    <SchoolInfoStack.Screen 
    name="StudentInformation" 
    component={SchoolInformation} 
    options={{ 
      title: "School Information"
    }}
    />
    <SchoolInfoStack.Screen 
    name="Programmes" 
    component={Programmes} 
    options={{ title: "Programmes"}}
    />
    <SchoolInfoStack.Screen 
    name="CourseDetail" 
    component={CourseDetail} 
    options={{ title: "Course Detail"}}
    />
    <SchoolInfoStack.Screen 
    name="Schools" 
    component={Schools} 
    options={{ title: "Schools"}}
    />
    <SchoolInfoStack.Screen 
    name="CourseComparison" 
    component={CourseComparison} 
    options={{ title: "Course Comparison"}}
    />
    <SchoolInfoStack.Screen 
    name="CourseComparison2" 
    component={CourseComparison2} 
    options={{ title: "Course Comparison2"}}
    />
    <SchoolInfoStack.Screen 
    name="CourseComparisonDetail" 
    component={CourseComparisonDetail} 
    options={{ title: "Course Comparison Detail"}}
    />
    <SchoolInfoStack.Screen 
    name="Faculties" 
    component={Faculties} 
    options={{ title: "Faculties"}}
    />
    <SchoolInfoStack.Screen 
    name="Courses" 
    component={Courses} 
    options={{ title: "Courses"}}
    />
  <SchoolInfoStack.Screen 
    name="Courses2" 
    component={Courses2} 
    options={{ title: "Courses"}}
    />
  </SchoolInfoStack.Navigator>
);


const RegistrationStackScreen = () => (
  
  <RegistrationStack.Navigator initialRouteName="Admissions">
    <RegistrationStack.Screen 
    name="Admissions" 
    component={Admissions} 
    options={{ title: "Admissions"}}
    />
    <RegistrationStack.Screen 
    name="FinancialMatters" 
    component={FinancialMatters} 
    options={{ title: "Financial Matters"}}
    />
    <RegistrationStack.Screen 
    name="HowToPay" 
    component={HowToPay} 
    options={{ title: "How To Pay"}}
    />
    <RegistrationStack.Screen 
    name="FinancialAssistance" 
    component={FinancialAssistance} 
    options={{ title: "Financial Assistance"}}
    />
    <RegistrationStack.Screen 
    name="Scholarship" 
    component={Scholarship} 
    options={{ title: "Scholarship"}}
    />
    <RegistrationStack.Screen 
    name="HowToApply" 
    component={HowToApply} 
    options={{ title: "How To Apply"}}
    />
  </RegistrationStack.Navigator>
);



export default () => (
  <NavigationContainer>

    <AuthStackScreen/>
    
  </NavigationContainer>
);