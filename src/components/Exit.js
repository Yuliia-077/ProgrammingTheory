import React from 'react';
import {Redirect } from 'react-router-dom';
import Check from './CheckLogin';

class Exit extends React.Component
{
    render()
    {
        if (localStorage.getItem('login')==="true")
        { 
            const conf = window.confirm("are you want to exit?");
        //const conf = confirm("are you want to exit?");
            if (conf === true) {
                localStorage.setItem('login',false);
            }
        }
        return <Redirect to="/login" />;
    }
}
export default Exit;
