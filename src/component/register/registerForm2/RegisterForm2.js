import React from 'react'
import { Form, Icon } from 'semantic-ui-react'
import ProgressBarLevel from '../progressBar/ProgressBarLevel'
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
const RegisterForm2 = () => {

    return (
        <div className="registerform">
 <div className="ProgressBar">
   <ProgressBarLevel value="39"/>
  </div>
            <h4 className="registerform__heading">Events Details</h4>
            <Form>
                <Form.Group >
                    <Form.Input
                        fluid
                        icon="tag"
                        iconPosition="left"
                        label='Event Name'
                        className="registerform__input1 textbox_line"
                        type="text"
                    />
                    <Form.Input
                        fluid
                        label='Number of Person'
                        icon="users"
                        iconPosition="left"
                        type="number"

                        className=' registerform__input1'
                    />
                </Form.Group>
                <Form.Group >
                <Form.Input
                      style={{width:'16rem'}}
                        fluid
                        label='From'
                        type="date"
                    />
                      <Form.Input
                      style={{width:'16rem'}}
                        fluid
                        label='To'
                        type="date"
                    />
                </Form.Group>
                <Form.Input
                    fluid
                    name="Description"
                    icon="bolt"
                    iconPosition="left"
                    label="About Event"
                    type="text"
                    className=' registerform__input2'
                />
                <Form.Input
                    fluid
                    name="Event Place"
                    icon="building outline"
                    iconPosition="left"
                    label="Event Place"
                    type="text"
                    className='registerform__input2'
                />
                <button type='submit' className="registerform__button" ><Link to="/form3" style={{color:'white'}}> Next  <Icon name="arrow right" /></Link> </button>
            </Form>

        </div>
    )
}

export default RegisterForm2
