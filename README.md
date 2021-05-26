
# README
<h1 align="center">Unstructable</h1>

Unstructable is a DIY site that allows users to create and share projects with others. Users can build out step by step instructions as well as comment on, and discuss other's projects. 

___

![splash_page](https://user-images.githubusercontent.com/73361653/119686235-225bd880-be14-11eb-9505-cb6611a6c220.png)

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

Once projects have been created, new steps may be added and edited. Upon creation, steps are imediately saved to the database, and upon editing they are updated. 

![alt text](https://github.com/galenddavis/project_images/blob/main/unstructable/addingSteps.PNG)

``` javascript
addStep() {
  let newStep = {title: `Step ${this.state.allSteps.length} (Click to Edit)`, body: '', project_id: this.props.project.id}

  this.props.createStep(newStep).then( step => {

      let { allSteps } = this.state;
      let fullSteps = allSteps.push(step.step)
      this.setState({ steps: fullSteps })
  })      
}
```

Upon creation of a project, we redirect to the project show page, and if the user has not uploaded an image, a default image is provided via jbuilder. 

![alt text](https://github.com/galenddavis/project_images/blob/main/unstructable/projectShow.PNG)

``` javascript
if @project.title_photo.attached?
    json.photoUrl url_for(@project.title_photo)
else
    json.photoUrl url_for('https://unstructable-seeds.s3.amazonaws.com/no_photo_attached.png')
end
```

### Commenting

Once you have logged in, you also have the ability to comment on other's projects. 

![alt text](https://github.com/galenddavis/project_images/blob/main/unstructable/commenting.PNG)


### Categories

Beyond just the basic index that you get on the entry page, there are also indexes filtered by categories. 

![alt text](https://github.com/galenddavis/project_images/blob/main/unstructable/category.PNG)

``` javascript
export const requestProjects = (category = null) => dispatch => {
    
    return ProjectAPIUtil.fetchProjects(category).then(
        projects => dispatch(receiveAllProjects(projects)),
        errors => dispatch(receiveProjectErrors(errors.responseJSON))
    )
}
```

``` ruby
def index
     @category = params[:category]
     if @category == ""
        @projects = Project.all
     else
        @projects = Project.where(category: @category)
     end
     render :index
 end
```


