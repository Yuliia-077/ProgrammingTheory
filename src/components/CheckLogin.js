import React from 'react';
import { Link } from 'react-router-dom';

class CheckLogin extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            url: "/login",
            name: "Вхід",
        }
        this.check = this.check.bind(this);
    }
    check()
    {
        if (localStorage.getItem('login')==="true")
        {
            this.setState({url: "/exit", name: "Вихід"})
           // return <Link className="headLink" to="/exit" replace>Вихід</Link>;
        }
        if (localStorage.getItem('login')==="false")
        {
            this.setState({url: "/login", name: "Вхід"})
           // return <Link className="headLink" to="/login" replace>Вхід</Link>
        }

    }
   
    render()
    {
        return <Link className="headLink" onClick={this.check} onSubmit={this.check} to={this.state.url} replace>{this.state.name}</Link>
    }
}
export default CheckLogin;
