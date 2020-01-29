import React from 'react';
import  { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import FormControlFeedback from 'react-bootstrap/FormGroup';
import PasswordField from '../../components/Forms/PasswordField';
import { Formik } from 'formik';
import * as yup from 'yup';
import TitleBand from '../../components/TitleBand';


const LoginPage = ({ doLogin, error,token }) => {


    const schema = yup.object({

        email: yup.string()
            .email('E-mail is not valid!')
            .required('E-mail is required!'),
        password: yup.string()
            .min(6, 'Password has to be longer than 6 characters!')
            .required('Password is required!'),


    });

   

    return (

        <div className="container-fluid">

            <div className="row login vh-90 vw-90" >
                <div className="col-12">


                    <div className="row">
                        <div className="col-12 col-sm-5 offset-sm-1 col-md-6 offset-md-0 col-lg-5 offset-lg-1">
                            <TitleBand title={" Start Now!"} />

                        </div>

                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-0 col-lg-5 offset-lg-1">

                            <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">

                                <li className="nav-item col-6 py-3 px-6 d-none d-sm-block" >
                                    <a className="nav-link active" id="login-tab" data-toggle="tab" href="#login-tab-content" role="tab" aria-controls="login-tab" aria-selected="true">Login</a>
                                </li>

                                <li className="nav-item col-6 py-3 px-6 disabled-nav-item d-none d-sm-block">
                                    <a className="nav-link disabled" id="signup-tab" data-toggle="tab" href="#signup-tab-content" role="tab" aria-controls="signup-tab-content" aria-selected="false">Sign Up</a>
                                </li>

                                <li className="nav-item dropdown d-block d-sm-none">
                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Login</a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item nav-link" data-toggle="tab" href="#login-tab-content">Login</a>

                                        <a className="dropdown-item nav-link disabled" data-toggle="tab" href="#signup-tab-content">Sign Up</a>

                                    </div>
                                </li>
                            </ul>

                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="login-tab-content" role="tabpanel" aria-labelledby="login-tab">

                                    <Formik
                                        validationSchema={schema}
                                        initialValues={{
                                            email: 'eve.holt@reqres.in',
                                            password: 'cityslicka'

                                        }}
                                        validate={values => {
                                            const errors = {};



                                            return errors;
                                        }}
                                        onSubmit={(values) => {


                                            doLogin(values);
                                            // same shape as initial values
                                            console.log(values);
                                        }}


                                    >
                                        {({
                                            handleSubmit,
                                            handleChange,
                                            handleBlur,
                                            values,
                                            isValid,
                                            errors,
                                        }) => (
                                                <Form noValidate onSubmit={handleSubmit} className="custom-form center needs-validation  pb-5"  >

                                                  
                                                          {    error != null ?  (<div class="alert alert-danger" role="alert">
                                                          {error}
                                                       </div>):  token != null ? <Redirect to='/Dashboard/welcomPage'  /> : null }

                                                   
                                                        <FormGroup controlId="validationFormikemail" className="mb-4">
                                                        <div className={"input-group mb-6 mt-6 " + (!!errors.email ? "invalid-input" : "")}>
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text"   >
                                                                    <img src={`${process.env.PUBLIC_URL}/images/email.svg`} />
                                                                </span>
                                                            </div>
                                                            <FormControl type="email"
                                                                name="email"
                                                                className="form-control form-input"
                                                                value={values.email}
                                                                required
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.email}
                                                                placeholder="Email / Username"
                                                            />

                                                        </div>
                                                        <FormControlFeedback type="invalid">
                                                            {errors.email}
                                                        </FormControlFeedback>



                                                    </FormGroup>

                                                    <FormGroup controlId="formBasicPassword" className="mb-4">


                                                        <PasswordField

                                                            name="password"
                                                            required
                                                            placeholder="Password"
                                                            className={"form-control form-input"}
                                                            value={values.password}
                                                            onChange={handleChange}
                                                            isInvalid={!!errors.password}
                                                        />

                                                        <FormControlFeedback type="invalid">
                                                            {errors.password}
                                                        </FormControlFeedback>
                                                    </FormGroup>


                                                    <Button variant="primary" type="submit" className="w-100">
                                                        Login
                                          </Button>





                                                </Form>
                                            )}
                                    </Formik>
                                </div>
                                <div className="tab-pane fade" id="signup-tab-content" role="tabpanel" aria-labelledby="signup-tab"></div>

                            </div>



                            <div className="row form-footer mt-4">

                                <div className="col-7 col-sm-6 mb-3  ">
                                    <a href="#" className="text-link left-arrow" >

                                        Back to main page
                                             </a>
                                </div>
                                <div className="col-5 col-sm-6 mb-3  text-right">
                                    <a href="#" className="text-link" >Forget Password?</a>
                                </div>
                            </div>

                        </div>
                        <div className="col-12 col-md-6 right-section d-none d-sm-none d-md-block">




                        </div>
                    </div>
                </div>

            </div>

        </div>


    );
}

LoginPage.propTypes = {
    doLogin: PropTypes.func.isRequired,
    error: PropTypes.string,
    token: PropTypes.string
}




export default LoginPage;