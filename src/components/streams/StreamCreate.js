import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends Component {
    render() {
        return (
            <div>
                Stream Create
            </div>
        );
    }
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);

