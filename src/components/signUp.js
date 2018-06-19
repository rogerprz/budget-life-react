import React, {Component} from 'react'
//import PropTypes from 'prop-types'
import {Form,Input, Button} from 'semantic-ui-react';
class SignUp extends Component{
     constructor(){
        super();

        this.state={

        }
    }
    render() {
        return (
            <div>
            <Form >
                <Form.Group>
                <Form.Field control={Input}
                    width={8}
                    label="First Name"
                    type="text"
                    name="firstName"
                    placeholder="First Name"/>
                <Form.Field control={Input}
                    width={8}
                    label="Last Name"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"/>

                </Form.Group>

                <Form.Field control={Input}
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter Email"/>

                <Form.Field id="button" control={Button}>Sign-Up</Form.Field>

            </Form>


            </div>
        );
    }
}

export default SignUp;