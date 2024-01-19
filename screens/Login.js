import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import {
    InnerContainer,
    StyledContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    RightIcon,
    StyledTextInput,
    StyledInputLabel,
    ButtonText,
    StyledButton,
    Colors,
    Line
} from './../components/style';
import { View } from 'react-native';

//Colors
const {brand,darkLight}=Colors; 
export const Login = () => {
  return (
    <StyledContainer>
        <StatusBar style="dark"/>
        <InnerContainer>
            <PageLogo resizeMode="cover" source={require('./../assets/img/logo.png')}/>
            <PageTitle>Chic Boulangerie</PageTitle>
            <SubTitle>Account login</SubTitle>
            <Formik
                initialValues={{email:'',password:''}}
                onSubmit={(values)=>{
                    console.log(values);
                }}
            >
                {({handleChange,handleBlur,handleSubmit,values})=>(
                    <StyledFormArea>
                        <MyTextInput
                            label="Email Address"
                            icon="mail-outline"
                            placeholder="Email Address"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                        />
                        <MyTextInput
                            label="Password"
                            icon='lock-closed-outline'
                            placeholder="***********"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={true}
                        />
                        <StyledButton>
                            <ButtonText>Login</ButtonText>
                        </StyledButton>
                        <Line></Line>
                        <StyledButton>
                            <ButtonText>Sign in with Google</ButtonText>
                        </StyledButton>
                    </StyledFormArea>
                )}
            </Formik>
        </InnerContainer>
    </StyledContainer>
  )
};
import Ionicons from 'react-native-vector-icons/Ionicons';
const MyTextInput = ({ label, icon, ...props }) => {
    return (
      <View>
        <LeftIcon>
          <Ionicons name={icon} size={30} color={brand} />
        </LeftIcon>
        <StyledInputLabel>{label}</StyledInputLabel>
        <StyledTextInput {...props} />
      </View>
    );
  };
  
