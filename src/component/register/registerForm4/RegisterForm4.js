import React from 'react'
import { Icon, List } from 'semantic-ui-react'
import ProgressBarLevel from '../progressBar/ProgressBarLevel'
const RegisterForm4 = () => {


    return (
        <div className="registerform">
 <div className="ProgressBar">
 <ProgressBarLevel value="100"/>
  </div>
            <h4 className="registerform__heading"><Icon name="check circle outline" style={{color:'#3ace76'}}/> Successfully Booked</h4>

            <List className="listRegister" bulleted>
                <List.Item >     Your Booking Request Successfully received by our Employeee's 
                <List.List>
                <List.Item>Shortly we
                call you (2 to 3 working days)</List.Item>
                <List.Item>We also mail the respective details</List.Item>
                <List.Item>Once we verfied and confirm all details we sent Payment details</List.Item>
                <List.Item>Your can also request for sponsership</List.Item>
                <List.Item>For contact call 142-4234-234</List.Item>
                </List.List>
                </List.Item>
                <button 
                type='submit' 
                className="registerform__button finalSubmitButton" 
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://ajayaj2001.github.io/event-management/';
                    }}
                > Home</button>
             </List>
            

        </div>
    )
}

export default RegisterForm4
