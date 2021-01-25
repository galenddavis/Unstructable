import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        // debugger
        super(props)
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return event => this.setState({ [field]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        const user = Object.assign({}, this.state)
        // debugger
        this.props.submitForm(user)
    }

    render() {
        // debugger
        const errors = this.props.errors.map(error => {
            return (<li>{error}</li>)
        })
        return (
            <div>
               <form onSubmit={this.handleSubmit}>
                   <ul>{errors}</ul> 
                   {/* I think my login needs to be changed so that errors will be specific to username or password */}
                    <input 
                        type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                    />

                    <input 
                        type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                    />

                    <button>Log In</button>
                    <p>New to Instructables?
                        <Link to='/signup'>Sign Up</Link>
                    </p>
                </form> 
            </div>
        )
    }
}

export default LoginForm;
