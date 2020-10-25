import React from 'react';
import {Redirect } from 'react-router-dom';

class Profile extends React.Component
{
    render()
    {
        if(localStorage.getItem('login') === 'false')
        {
            return <Redirect to="/login" />;
        } 
        return(
            <div className="home">
                <h1 className="heading">Admin</h1>
                <p>Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world 
                Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world 
                Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world 
                Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world 
                Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world 
                Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world 
                Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world 
                Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world 
                Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world
                Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world 
                Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world 
                Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world 
                Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world 
                </p>
            </div>
        )
    }
}
export default Profile;