import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends Component {
    //  renderInput(formProps) {
    //     return (
    //     <input 
    //     onChange={formProps.input.onChange}
    //     value={formProps.input.value}
    //     />
    //     )
    // }
    //Below is a refactored version of above

    // renderInput(formProps) {
    //     return <input {...formProps.input} />
    // }
    // below is destructured version of above

     renderInput({ input }) {
        return <input {...input} />
    }

    render() {
        return (
            <form>
                <Field name="title" component={this.renderInput} />
                <Field name="description" component={this.renderInput} />
            </form>
        );
    }
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);

