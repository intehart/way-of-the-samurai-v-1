import React from 'react';
import {Field, reduxForm} from 'redux-form'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"login"} name={"login"} component={"input"}/>
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"} type={"password"} component={"input"}/>
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

let Login = () => {
  const onSubmit = (formData) => {
    console.log(formData);
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

export default Login;