import logo from './logo.svg';
import './App.css';
import { useFormik, Formik, Field, Form } from 'formik';
import { signupValidation } from './signupValidation';

const initialValues = {
  name: '',
  email: '',
  password: '',
  cpassword: '',
}
function App() {

  return (
    <div className="App">
      <Formik
        initialValues={initialValues}
        validationSchema={signupValidation}
      >
        {({ errors }) => (
          <Form className='Form' >
            <label htmlFor='name'>Name :</label>
            <br />
            <Field type="text" name="name"></Field>
            <br />
            {errors.name && <small style={{fontSize:"15" +"px",color:"red"}}>{errors.name}!</small>}
            <br />
            <label htmlFor='name'>Email :</label>
            <br />
            <Field type="email" name="email"></Field>
            <br />

            {errors.email && <small style={{fontSize:"15" +"px",color:"red"}}>{errors.email}!</small>}
            <br />

            <label htmlFor='name'>Password :</label>
            <br />
            <Field type="password" name="password"></Field>
            <br />

            {errors.password && <small style={{fontSize:"15" +"px",color:"red"}}>{errors.password}!</small>}
            <br />
            <label htmlFor='cpassword'>Confirm Password :</label>
            <br />
            <Field type="password" name="cpassword"></Field>
            <br />

            {errors.cpassword && <small style={{fontSize:"15" +"px",color:"red"}}>{errors.cpassword}!</small>}
            <br />
            <button type='submit' className='btn'>Submit</button>
          </Form>
        )}

      </Formik>
    </div>
  );
}

export default App;
