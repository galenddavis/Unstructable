import React from 'react';
import { Link } from 'react-router-dom';


const countries = [ "Country", "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Svalbard and Jan Mayen",
        "Swaziland",
        "Sweden",
        "Switzerland",
        "Syrian Arab Republic",
        "Taiwan, Province of China",
        "Tajikistan",
        "Tanzania, United Republic of",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tokelau",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks and Caicos Islands",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States",
        "United States Minor Outlying Islands",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela",
        "Viet Nam",
        "Virgin Islands, British",
        "Virgin Islands, US",
        "Wallis and Futuna",
        "Western Sahara",
        "Yemen",
        "Zambia",
        "Zimbabwe",
    ]

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
        this.dummyLogin = this.dummyLogin.bind(this);
    }

    update(field) {
        return event => this.setState({ [field]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.submitForm(user).then(() => this.props.history.push('/'))
    }

    dummyLogin(event) {
        event.preventDefault();
        const user = {
            username: 'guest',
            password: 'password',
            occupation: 'robot',
            email: 'sample@email.com',
            location: 'Spain'}
            debugger
        this.props.login(user);
    }

    render() {
        const errors = this.props.errors.map(error => {
            return (<li className='error' key={error}>{error}</li>)
        })

        const showErrors = this.props.errors.length ? <ul className='errors-list'>{errors}</ul> : null
        const loc = countries.map(place => {
            return <option value={place} key={place}>{place}</option>
        })
        return (
            <div className='signup-page'>
                <div className='blur'>
                    {/* ^ Don't need this, but it messes up my CSS when I remove it.  */}

               <form onSubmit={this.handleSubmit} className='signup-form'>

                    <span className='guest' onClick={this.dummyLogin}>Guest Login</span>

                    <div className='divider'>
                        <span className='whitespace'></span>
                        <span className='or'>OR</span>
                        <span className='whitespace'></span>
                    </div>
                   {showErrors}
                   <div>
                   {/* <ul className='errors-list'>{showErrors}</ul>  */}
                   <input 
                        className='email'
                        type="text"
                        placeholder='Email'
                        value={this.state.email}
                        onChange={this.update('email')}
                    />
                    </div>
                    
                    <div>
                    <input 
                        type="text"
                        placeholder='Username'
                        value={this.state.username}
                        onChange={this.update('username')}
                    />
                    </div>
                    <div>
                    <input 
                        type="password"
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.update('password')}
                    />
                    </div>
                    <div className='selectors'>
                    <select className='select'
                        value={this.state.value}
                        onChange={this.update('occupation')}>
                            <option value="About You">About You</option>
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
                    
                    <select className='select'
                        value={this.state.value}
                        onChange={this.update('location')}>
                            {loc}
                    </select>
                    </div>
                    
                    {/* <CountryDropdown 
                    value={this.state.country}
                    onChange={this.update('location')}
                    /> */}
                    {/* hard code this/ Don't use libary.  */}
                   

                    <p className='legal'>By clicking "Sign Me Up" you agree to our Terms and to our Privacy Statement.</p>
                    <button>Sign Me Up!</button>
                    <p>Already a member? 
                        <Link to='/login'> Log In</Link>
                    </p>
                </form> 
                </div>
            </div>
        )
    }
}

export default SignupForm;
