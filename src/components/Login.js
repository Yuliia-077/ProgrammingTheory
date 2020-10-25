import React from 'react';
import { FormControl, Label } from 'react-bootstrap';
import {Redirect } from 'react-router-dom';

class Login extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            username: '',
            password: '',
        };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit()
    {
        if(this.state.username === "Admin" && this.state.password === "12345")
        {
            localStorage.setItem('login',true);
        }
        else
        {
            localStorage.setItem('login',false);
        }
    }

    handleUsernameChange(event)
    {
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event)
    {
        this.setState({password: event.target.value});
    }

    render()
    {
        if(localStorage.getItem('login') === 'true')
        {
            return <Redirect to="/news" />;
        } 

        return(
            <div className="login">
                <h4 className="heading">Увійдіть в обліковий запис</h4>
                <br></br>
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <Label htmlFor="username">Ім'я користувача</Label>
                    <FormControl 
                    type="text" id="username" 
                    value={this.state.username}
                    onChange={this.handleUsernameChange}>
                    </FormControl>
                    <br></br>
                    <Label htmlFor="pass">Пароль</Label>
                    <FormControl 
                    type="password" id="pass"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}>
                    </FormControl>
                    <input value="Увійдіть" type="submit" className="btn btn-secondary btn-block">
                    </input>
                </form>
            </div>
        )
    }
}
export default Login;
