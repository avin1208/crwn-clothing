import React from "react";
import './feedback.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class FeedBack extends React.Component{
    constructor(){
        super();

        this.state = {
            yourName:'',
            email:'',
            phoneNo:'',
            feedback:''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        alert("Thanks for your Feedback..!!")
        
    }


    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };



    render(){
        const{ yourName, email, phoneNo, feedback} = this.state;
        return(
            <div className="feedback">
                <h2 className="title">Your Feedback</h2>
                <form className="contact-form" onSubmit={this.handleSubmit}>
                <FormInput
                        type='text'
                        name='yourName'
                        value={yourName}
                        onChange={this.handleChange}
                        label='Your Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='number'
                        name='phoneNo'
                        value={phoneNo}
                        onChange={this.handleChange}
                        label='Phone No'
                        required
                    />
                    <FormInput
                        type='text'
                        name='feedback'
                        value={feedback}
                        onChange={this.handleChange}
                        label='Feedback'
                        required
                    />
                    <CustomButton type='submit'>
                        Send Mesaage
                    </CustomButton>
                </form>

            </div>
        )
    }

}

export default FeedBack;