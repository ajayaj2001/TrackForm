import React from 'react'
import { Form, Icon  } from 'semantic-ui-react'
 import { Link } from 'react-router-dom';
import './RegisterForm.scss'
import ProgressBarLevel from '../progressBar/ProgressBarLevel';
const RegisterForm = () => {

    return (
        <div className="registerform">
            <div className="ProgressBar">
     <ProgressBarLevel value="4"/>
  </div>

            <h4 className="registerform__heading">Personal Info</h4>
            <Form>
                <Form.Group >
                    <Form.Input
                        fluid
                        icon="user"
                        iconPosition="left"
                        label='Name'
                        className="registerform__input1 textbox_line"
                        type="text"
                    />
                    <Form.Input
                        fluid
                        label='Email'
                        icon="mail"
                        iconPosition="left"
                        type="email"

                        className=' registerform__input1'
                    />
                </Form.Group>
                <Form.Group >
                    <Form.Input
                        fluid
                        icon="phone volume"
                        iconPosition="left"
                        label='Ph Numbers'
                        className="registerform__input1 textbox_line"
                        type="text"
                    />
                      <Form.Input
                      style={{width:'16rem'}}
                        fluid
                        label='Date of event conduct'
                        type="date"
                    />
                </Form.Group>
                <Form.Input
                    fluid
                    name="Address"
                    icon="address card"
                    iconPosition="left"
                    label="Address"
                    type="text"
                    className='registerform__input2'
                />
                <Form.Input
                    fluid
                    name="Occupation"
                    icon="building outline"
                    iconPosition="left"
                    label="Occupation"
                    type="text"
                    className= 'registerform__input2'
                />
                <button type='submit' className="registerform__button" ><Link to="/form2" style={{color:'white'}}> Next <Icon name="arrow right" /> </Link> </button>
            </Form>

        </div>
    )
}

export default RegisterForm
