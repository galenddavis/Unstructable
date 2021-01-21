import React from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';


// const options = [
//     { value: 'hobbyist', label: 'Hobbyist' },
//     { value: 'student', label: 'Student' },
//     { value: 'teacher (Ages 5-7)', label: 'Teacher (Ages 5-7)' },
//     { value: 'teacher (Ages 8-10)', label: 'Teacher (Ages 8-10)' },
//     { value: 'teacher (Ages 11-13)', label: 'Teacher (Ages 11-13)' },
//     { value: 'teacher (Ages 14-17)', label: 'Teacher (Ages 14-17)' },
//     { value: 'teacher (Ages 18+)', label: 'Teacher (Ages 18+ )' },
//     { value: 'parent', label: 'Parent' },
//     { value: 'professional', label: 'Professional' },
//     { value: 'robot', label: 'Robot' },
//     { value: 'mad Scientist', label: 'Mad Scientist' },
// ]

class SignupForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            occupation: "",
            email: "",
            location: "",
            user_bio: "",
            website: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return event => this.setState({ [field]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.submitForm(user)
    }

    render() {
        // const errors = this.props.errors.map(error => {
        //     return (<li>{error}</li>)
        // })
        debugger
        return (
            <div>
               <form onSubmit={this.handleSubmit}>
                   {/* <ul>{errors}</ul>  */}
                   {/* I think my login needs to be changed so that errors will be specific to username or password */}
                   <input 
                        type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                    />
                    
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

                    <select
                        value={this.state.value}
                        onChange={this.update('occupation')}>
                            <option value="hobbyist">Hobbyist</option>
                            <option value="student">Student</option>
                            <option value="teacher (Ages 5-7)">Teacher (Ages 5-7)</option>
                            <option value="teacher (Ages 8-10)">Teacher (Ages 8-10)</option>
                            <option value="teacher (Ages 11-13)">Teacher (Ages 11-13)</option>
                            <option value="teacher (Ages 14-17)">Teacher (Ages 14-17)</option>
                            <option value="parent">Parent</option>
                            <option value="professional">Professional</option>
                            <option value="robot">Robot</option>
                            <option value="mad scientist">Mad Scientist</option>
                    </select>


                    <button>Sign Up</button>
                    <p>Already a member?
                        <Link to='/login'>Log In</Link>
                    </p>
                </form> 
            </div>
        )
    }
}

export default SignupForm;
