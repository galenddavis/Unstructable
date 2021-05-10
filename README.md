# README

<p align-'center'>
# Unstructable 
</p>

___

## Description

Unstructable is a working clone of the website [Instructables](https://www.instructables.com/) which allows users to create and share DIY projects with others. Users can build out step by step instructions and discuss both their own work as well as others'. 

![alt text](https://github.com/galenddavis/project_images/blob/main/unstructable/splash%20page.png "Unstructable Splash Page")

Unstructable was build with a combination of Ruby/Rails and PSQL on the backend and React/Redux/Javascript on the front. Styling is done mainly is SCSS, and AWS will be implemented in order to handle and store static assests. The Demo version below is hosted on Heroku.

## Live Demo

[Live Demo](https://unstructable.herokuapp.com/#/)

## Features

### User Account Creation

When the user first hits the site, they will have virtually unlimited access to the site's projects and other users, but in order to begin commenting or creating projects of their own, they will need to create an account of thier own. 

* Account-locked features
  * Commmenting
  * Creating and editing projects
  
  ![alt text](https://github.com/galenddavis/project_images/blob/main/unstructable/login.png "Unstructable Login Page")
  
User account validations and and basic security measures are in place.
* Minimum password length
* Password hashing

![alt text](https://github.com/galenddavis/project_images/blob/main/unstructable/user_auth.png "Unstructable Login errors")

Pictured below is the Demo Login functionality on the site allowing visitors to access the full funtionality to the site without having to create a user account.

``` javascript
handleSubmit(event) {
        event.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.submitForm(user);
    }

    dummyLogin(event) {
        event.preventDefault();
        const user = {
            username: 'guest',
            password: 'password',
            occupation: 'robot',
            email: 'sample@email.com',
            location: 'Spain'}
        this.props.submitForm(user);
    }
```
### Project Creation

Once signed in, users have the ability to create their own projects. At this moment, the created projects are a single body field, but will soon be expanded to allow for the creation of individual steps and organize them on the project creation form. 

![alt text](https://github.com/galenddavis/project_images/blob/main/unstructable/create_project.png "Unstructable create form")


