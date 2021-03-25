import React from 'react'
import { Switch,Route} from "react-router-dom";
import "react-step-progress-bar/styles.css";
import 'semantic-ui-css/semantic.min.css'

import './Register.scss'
import sideImage from '../../img/sideImage.jpg'
import RegisterForm from './registerForm/RegisterForm'
import RegisterForm2 from './registerForm2/RegisterForm2'
import RegisterForm3 from './registerForm3/RegisterForm3'
import RegisterForm4 from './registerForm4/RegisterForm4'

const Register = () => {
    return (
        <div className="containerRegister">
            <div className="register">
            <img src={sideImage} alt="rocket" className="register__image" />
                <div className="register__signup">
                    <div className="register__signup--form">
                    <Switch>
                         <Route path="/form2">
                            <RegisterForm2/>
                         </Route>
                         <Route path="/form3">
                            <RegisterForm3/>
                         </Route>
                         <Route path="/form4">
                            <RegisterForm4/>
                         </Route>
                         <Route path="/">
                             <RegisterForm/>
                        </Route>
                     </Switch>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Register
