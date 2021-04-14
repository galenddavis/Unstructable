import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        // #
        super(props)
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.dummyLogin = this.dummyLogin.bind(this);
    }

    componentWillUnmount() {
        this.props.removeErrors();
    }

    update(field) {
        return event => this.setState({ [field]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.submitForm(user);
    }

    dummyLogin(event) {
        event.preventDefault();
        const user = {
            username: 'Buster',
            password: 'password',
            occupation: 'robot',
            email: 'sample@email.com',
            location: 'Spain'}
        this.props.submitForm(user);
    }

    render() {
        // #
        const errors = this.props.errors.map(error => {
            return (<li className='error'>{error}</li>)
        })
        const showErrors = this.props.errors.length ? <ul className='errors-list'>{errors}</ul> : null
        return (
            <div className='login-page'>
                <div>
               <form onSubmit={this.handleSubmit} className='login-form'>
               <span 
                className='guest'
                onClick={this.dummyLogin}>Guest Login</span>

                    <div className='divider'>
                        <span className='whitespace'></span>
                        <span className='or'>OR</span>
                        <span className='whitespace'></span>
                    </div>
                   {showErrors}
                   {/* I think my login needs to be changed so that errors will be specific to username or password */}
                    <input 
                        type="text"
                        placeholder='Email'
                        value={this.state.username}
                        onChange={this.update('username')}
                    />

                    <input 
                        type="password"
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.update('password')}
                    />

                    <button>Log In</button>
                    <p>New to Instructables? 
                        <Link to='/signup'> Sign Up</Link>
                    </p>
                </form> 
                </div>
            </div>
        )
    }
}

export default LoginForm;
