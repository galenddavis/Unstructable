# README
<h1 align="center">Unstructable</h1>

Unstructable is a DIY site that allows users to create and share projects with others. Users can build out step by step instructions as well as comment on, and discuss other's projects. 

___

![alt text](https://github.com/galenddavis/project_images/blob/main/unstructable/splash%20page.png "Unstructable Splash Page")

Unstructable was build with a combination of Ruby/Rails and PSQL on the backend and React/Redux/Javascript on the front. Styling is done mainly is SCSS, and AWS is used in hosting project's associated images.

## Live Demo

[Live Demo](https://unstructable.herokuapp.com/#/)

## Features

### User Account Creation

When the user first hits the site, they will have virtually unlimited access to the site's projects, but in order to begin commenting or creating projects of their own, they will need to create an account of thier own. 
  
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

Once signed in, users have the ability to create their own projects. 

![alt text](https://github.com/galenddavis/project_images/blob/main/unstructable/projectCreation.PNG)

Upon titling the new projects, the backend creates the project and immediately creates the first default step that every project shares. 

![alt text](https://github.com/galenddavis/project_images/blob/main/unstructable/newproject.PNG)

``` ruby
def create
     @project = Project.new(project_params)
     @project.creator_id = current_user.id

     if @project.save
         @project.steps.create!(title: "Intro + Supplies (Click to Edit)", body: "")
         render :show
     else
         render json: @project.errors.full_messages, status: 422
     end 
end
```


