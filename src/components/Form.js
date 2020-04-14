import React from 'react';

//import components
import Input from './Input';
import Select from './Select';
import Button from './Button';

const validateName = (checkingText) => {
    if(checkingText !== ''){
        if(checkingText.match(/^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/)){
            return {
                isInputName: true,
                errorMessage: ''
            };
        }else{
            return {
                isInputName: false,
                errorMessage: 'Input valid name.'
            };
        }
    } else {
        return {
            isInputName: false,
            errorMessage: 'Cannot be empty.'
        };
    }
}

const validateEmail = (checkingText) => {
    if(checkingText !== ''){
        let atPos = checkingText.lastIndexOf('@');
        let dotPos = checkingText.lastIndexOf('.');

        if ((atPos < dotPos && atPos > 0 && checkingText.indexOf('@@') === -1 && dotPos > 2 && (checkingText.length - dotPos) > 2)) {
            return {
                isInputEmail: true,
                errorMessage: ''
            };
        }else{
            return {
                isInputEmail: false,
                errorMessage: 'Input valid email.'
            };
        }
    }else{
        return {
            isInputEmail: false,
            errorMessage: 'Cannot be empty.'
        };
    }
}

const validateNumber = (checkingText) => {
    if(checkingText !== ''){
        if (checkingText.match(/^\d{10,11}$/)) {
            return {
                isInputPhone: true,
                errorMessage: ''
            };
        } else {
            return {
                isInputValid: false,
                errorMessage: 'Insert valid phone number.'
            };
        }
    }else{
        return {
            isInputValid: false,
            errorMessage: 'Cannot be empty.'
        };
    }

}

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
            errorMessage: '',
            isInputName: true,
            isInputEmail: true,
            isInputPhone: true,
            typeText: 'text',
            typeEmail: 'email',
            typeNumber: 'number',
            carOption: [
                {type:'Small', model:['Opel Corsa','Toyota Yaris', 'Smart for Two']},
                {type:'Premium', model:['Audi S8','Jaguar XJR', 'BMW 750iL']},
                {type:'Van', model:['Volkswagen Touran','Renault Espace', 'Fiat Talento']},
            ]
        }
    }

    handleInputValue = event => {
        let { value } = event.target;
        this.setState({value});
    }
    
    handleInputName = event => {
        const { isInputName, errorMessage } = validateName(this.state.value);
        this.setState({
            isInputName, errorMessage
        })
    
    }
    
    handleInputEmail = event => {
        const { isInputEmail, errorMessage } = validateEmail(this.state.value);
        this.setState({
            isInputEmail, errorMessage
        })
    
    }

    handleInputPhone = event => {
        const { isInputPhone, errorMessage } = validateNumber(this.state.value);
        this.setState({
            isInputPhone, errorMessage
        })
    
    }

    onChangeSelect(e) {
        this.setState({ value: e.target.value })
    }

   handleFormSubmit(e) {
    e.preventDefault();
    console.log('you click me');
    // fetch('firebaseURL',{
    //     method: "POST",
    //     body: JSON.stringify(userData),
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //   }).then(response => {
    //     response.json().then(data =>{
    //       console.log("Successful" + data);
    //     })
    // })
   }   

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <fieldset>
                        <legend>{this.props.tagline}</legend>
                        <Input 
                            type={this.state.typeText}
                            txtName={'txtName'}
                            placeholder={'Name'}
                            isHidden={this.state.isInputName} 
                            errorMessage={this.state.errorMessage}    
                            handleInput={this.handleInputValue}
                            handleInputValidation={this.handleInputName}
                        />
                        <Input 
                            type={this.state.typeEmail}
                            txtName={'txtEmail'}
                            placeholder={'Email'} 
                            isHidden={this.state.isInputEmail} 
                            errorMessage={this.state.errorMessage}    
                            handleInput={this.handleInputValue}
                            handleInputValidation={this.handleInputEmail}
                        />
                        <Input 
                            type={this.state.typeNumber} 
                            txtName={'txtPhone'}
                            placeholder={'Phone'}
                            isHidden={this.state.isInputPhone} 
                            errorMessage={this.state.errorMessage}    
                            handleInput={this.handleInputValue}
                            handleInputValidation={this.handleInputPhone}
                        />
                        <Select 
                            name={'Car'}
                            placeholder={'Car Option'}
                            options={this.state.carOption}
                            />
                        <Select 
                            name="Model"
                            placeHolder="Model Option"
                            options={this.state.carOption}
                            value={this.state.model}
                        />
                        <Button 
                            type={'submit'}
                            action={this.handleFormSubmit}
                            title={'Submit'} 
                        />
                    </fieldset>
                </form>
            </div>
         );
    }
}
 
export default Form;