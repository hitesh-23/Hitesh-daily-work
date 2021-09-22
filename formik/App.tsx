import React from 'react';
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";


const signinSchema = Yup.object().shape({
  email: Yup.string().required("this field is required!").email("Must be a valid email"),
  password : Yup.string().required("this field is required!"). min(8,"Must be at least 8 characters")
});








function App() {

  const handleSubmit = (values : any) => {
    console.log( ` email is : ${values.email} and pasasword is ${values.password}`)
  }


  return (
    <div className="App">
      <Formik
        validationSchema = {signinSchema}
        initialValues={{ email: '', password: '' }}
        onSubmit = {handleSubmit}
      >
        {(props: any) => (<Form>
          <div>
            <label htmlFor="email">Email : </label>
            <Field autoComplete="off" name="email" />
            <ErrorMessage name="email"/>
          </div>

          <div>
          <label htmlFor="password">Email : </label>
            <Field autoComplete="off" name="password" />
            <ErrorMessage name="password"/>
          </div>
          <button disabled={!props.isValid || !props.dirty} type="submit">Submit</button>
          <button onClick={props.handleReset} type="submit">Reset</button>
          </Form>
        )}

      </Formik>
    </div>
  );
}

export default App;
