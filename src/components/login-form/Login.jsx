import React, { useEffect, useState} from 'react'
import styled from 'styled-components';
import Card from '../UI/card/Card';
import Button from '../UI/button/Button';


const Login = (props) => {

const [enteredEmail, setEnteredEmail]= useState('')
const [emailIsValid, setEmailIsValid]= useState()
const [enteredPassword, setEnteredPassword]= useState('')
const [passwordIsValid, setPasswordIsValid]= useState()
const [formIsValid, setFormIsValid]= useState(false)

useEffect(()=>{
setFormIsValid(
    enteredEmail.includes("@") && enteredPassword.trim().length > 6
);
setFormIsValid(
    enteredPassword.trim().length > 6 && enteredEmail.includes("@")
);
},[enteredEmail, enteredPassword])

const emailChangeHandler = (event)=>{
    setEnteredEmail(event.target.value)
};
const passwordChangeHandler =(event)=>{
    setEnteredPassword(event.target.value)
};
 const validateEmailHandler = ()=>{
    setEmailIsValid(enteredEmail.includes("@"))
 };

 const validatePasswordHandler = ()=>{
    setPasswordIsValid(enteredPassword.trim().length > 6)
 };

const submitHandler =(event)=>{
   event.preventDefault();
   props.onLogin(enteredEmail, enteredPassword)
};
 
  return (
    <Card>
     <Form onSubmit={submitHandler}>
        <ContainerInput>
            <Label htmlFor='email'>Email</Label>

          {emailIsValid === false ? ( 
            <StyleInput 
              style={{borderColor:"red"}}
              type="email"
              id="email"
              value={enteredEmail}
             onChange={emailChangeHandler}
             onBlur={validateEmailHandler}
            />  
          ) : (
            <StyleInput 
              type="email"
              id="email"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
              />
            )}
        </ContainerInput>

        <ContainerInput>
        <Label htmlFor="password">Password</Label>
          {passwordIsValid === false ? (
            <PasswordInput
              style={{ borderColor: "red" }}
              type="password"
              id="password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
            />
          ) : (
            <PasswordInput
              type="password"
              autoComplete="password"
              id="password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
            />
          )}
        </ContainerInput>
         <BtnDiv>
         <Button type="submit" disabled={!formIsValid}>Login</Button>
         </BtnDiv>
     </Form>
    </Card>
  )
}

export default Login;

const ContainerInput = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: stretch;
  flex-direction: column;
`;

const Label = styled.label`
  display: flex;
  justify-content: flex-start;
  font-weight: bold;
  color: #464646;
  margin-bottom: 0.5rem;
`;

const StyleInput = styled.input`
  font: inherit;
  padding: 0.35rem 0.35rem;
  border-radius: 6px;
  border: 2px solid #ccc;
  height: 30px;
  &:focus {
    outline: none;
    border-color: #4f005f;
    background: #f6dbfc;
  }
`;
const PasswordInput = styled.input`
  font: inherit;
  padding: 0.35rem 0.35rem;
  border-radius: 6px;
  border: 2px solid #ccc;
  height: 30px;
  &:focus {
    outline: none;
    border-color: #4f005f;
    background: #f6dbfc;
  }
`;
const BtnDiv = styled.div`
  text-align: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;