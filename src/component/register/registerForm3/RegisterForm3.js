import React from 'react'
import { Form, Icon } from 'semantic-ui-react'
import ProgressBarLevel from '../progressBar/ProgressBarLevel'
import { Link } from 'react-router-dom';
const RegisterForm3 = () => {

    const options1 = [
        { key: 'a', text: 'Public', value: 'Public' },
        { key: 'b', text: 'Private', value: 'Private' },
        { key: 'c', text: 'Both', value: 'Both' }
      ]

      const options2 = [
        { key: 'd', text: `DJ Party's`, value: `DJ Party's` },
        { key: 'e', text: 'Wedding', value: 'Wedding' },
        { key: 'f', text: 'College Cultural', value: 'College Cultural' },
        { key: 'g', text: 'Workshops / Seminars training', value: 'Workshops / Seminars training' },
        { key: 'h', text: 'Birthday Celebration', value: 'Birthday Celebration' },
        { key: 'i', text: 'Festival Celebration', value: 'Festival Celebration' },
        { key: 'j', text: 'Other', value: 'Other' }
      ]

      const options3 = [
        { key: 'k', text: 'UPI payment', value: 'UPI payment' },
        { key: 'l', text: 'Challan', value: 'Challan' },
        { key: 'm', text: 'Net Banking ', value: 'Net Banking '},
        { key: 'n', text: ' bank check', value: ' bank check' },
        { key: 'o', text: ' bank check', value: ' bank check' },

      ]

    return (
        <div className="registerform">
 <div className="ProgressBar">
   <ProgressBarLevel value="70"/>
  </div>
            <h4 className="registerform__heading">Payment Details</h4>
            <Form>
                <Form.Group >
                <Form.Select label="Type" options={options1} placeholder='type'  />
                <Form.Select label="category" options={options2} placeholder='category'  />
                </Form.Group>
                <Form.Group >
                <Form.Input
                      style={{width:'16rem'}}
                        fluid
                        label='Price Range : From'
                        type="number"
                    />
                      <Form.Input
                      style={{width:'16rem'}}
                        fluid
                        label='To'
                        type="number"
                    />
                </Form.Group>
                <Form.Input
                    fluid
                    name="Description"
                    icon="bolt"
                    iconPosition="left"
                    label="What you want to tell us"
                    type="text"
                    className=' registerform__input2'
                />
                 <Form.Select 
                 label="Payment Method" 
                 options={options3} 
                 placeholder='Payment Method'  
                 />
                <button type='submit' className="registerform__button" ><Link to="/form4" style={{color:'white'}}> Next  <Icon name="arrow right" /></Link> </button>
            </Form>
        </div>
    )
}

export default RegisterForm3
