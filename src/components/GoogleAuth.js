import React, { Component } from 'react';

class GoogleAuth extends Component {
    state = { isSignedIn: null }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '431482947437-j8va0kggf5hsqtjpp50fkoc6lduoecf2.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.setState({isSignedIn: this.auth.isSignedIn.get()})
            })
        })
    }

    render() {
        return (
            <div>
                Google Auth
            </div>
        );
    }
}

export default GoogleAuth;
