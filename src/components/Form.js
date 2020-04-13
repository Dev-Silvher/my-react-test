import React from 'react';

//import components
import Input from './Input';
import Select from './Select';
import Button from './Button';
import Error from './Error';

const validateInput = (checkingText) => {
    
    const regexp = /^\d{10,11}$/; 
    // regular expression - checking if phone number contains only 10 - 11 numbers
    
    if (regexp.exec(checkingText) !== null) {
            return {
                isInputValid: true,
                errorMessage: ''
            };
        } else {
            return {
                isInputValid: false,
                errorMessage: 'Please insert valid number'
            };
        }
}

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
            isInputValid: true,
            errorMessage: '',
            carOption: [
                {type:'Small', model:['Opel Corsa','Toyota Yaris', 'Smart for Two']},
                {type:'Premium', model:['Audi S8','Jaguar XJR', 'BMW 750iL']},
                {type:'Van', model:['Volkswagen Touran','Renault Espace', 'Fiat Talento']},
            ]
        }
    }

    handleInput = event => {
        const { value } = event.target;
        this.setState({value});
    }  
      
    handleInputValidation = event => {
    const { isInputValid, errorMessage } = validateInput(this.state.value);
        this.setState({
            isInputValid: isInputValid,
            errorMessage: errorMessage
        })
    
    }

    onChangeSelect(e) {
        this.setState({ value: e.target.value })
    }

   handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;
    console.log(userData);

    // fetch('http://example.com',{
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
                            type={'text'} 
                            placeholder={'Name'}
                            />
                        <Input 
                            type={'email'} 
                            placeholder={'Email'}
                            />
                        <Input 
                            type={'number'} 
                            placeholder={'Phone'}
                            handleInput={this.handleInput}
                            handleInputValidation={this.handleInputValidation}
                            />
                        <Error
                            isHidden={this.state.isInputValid} 
                            errorMessage={this.state.errorMessage} 
                            />
                        <Select 
                            name={'Car'}
                            placeholder={'Car Option'}
                            options={this.state.carOption}
                            />
                        {/* <Select 
                            name="model"
                            placeHolder="Model Option"
                            options={this.state.modelOption}
                            value={this.state.model}
                        /> */}
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