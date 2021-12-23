import React, { useEffect } from 'react';
import { Formik, Form } from "formik"
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../redux/feature/login/loginSlice';
import { InputField } from "./InputField"

const Signup = () => {

  const loginStates = useSelector((state) => state.login)
  const dispatch = useDispatch()

  useEffect (()=> {
    console.log('loginStates :',loginStates)
  },[loginStates])

  const validate =  Yup.object({
    email:  Yup.string().email('Email is invalid').required('Required'),
    password: Yup.string().required().min(6,'minimum 6 characters')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
  })
  
  const loginFields = ({
    email:'',
    password:''
  })



  return(
    <Formik initialValues={loginFields} 
      onSubmit={values => {
        console.log(values)
        const inputData = {
          email: values.email,
          password: values.password
        }
        dispatch(login(inputData))
      }} 
      validationSchema={validate}>
         {formik => (
      <Form >
        <InputField label="Email" name="email" type="email"/>
        <InputField label="Password" name="password" type="password"/>
        <button type="submit" className='mt-3'>Sign In</button>
      </Form>
      )}
    </Formik>
  )
}

export default Signup