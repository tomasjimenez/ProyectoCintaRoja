import React, { Component } from "react";
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebase.js';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {
    render() {
        const { user, signOut, signInWithGoogle } = this.props;
        return (
            <div className="loginHeader">
                {
                    user ?
                        <p> ¡Bienvenido! {user.displayName}</p>
                        : <p></p>
                }
                {
                    user ? <button className="login-google" onClick={signOut}>Cerra sesión</button>
                        : <button className="login-google" onClick={signInWithGoogle}>Ingresa con Google</button>
                }
            </div>
        )
    }
}

const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login);

