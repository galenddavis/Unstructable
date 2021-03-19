import React from 'react';
import { Link } from 'react-router-dom';

class Index extends React.Component {
    constructor(props) {
        debugger
        super(props)

        
    }

    componentDidMount() {
        debugger
        this.props.requestProjects()
    }

    render () {
        debugger
        const projectList = this.props.projects === undefined ? null : this.props.projects.map((project) => {
            return <li>{project.title}</li>
        })
        // if (Object.values(this.props.projects).length === 0) {
        //     return null
        // }
        // const {projects} = this.props
        // const projectList = projects.map(project => (
        //     <li>{project}</li>
        // ))
            
        return (
        <div className='body'>
            <span className='main-image'>
                <img src={window.feature} alt="" />
            </span>

            <section className='feat-text'>

                <div>
                    <h2>NEARLY COMPLETE</h2>
                    <span>
                        We make it easy to learn how to ALMOST make anything, 
                        one step at a time. From the stovetop to the workshop, 
                        you are sure to be inspired to start something and never
                        finish it!
                    </span>
                </div>

                <div>
                    <h2>MADE BY YOU</h2>
                    <span>
                    Instructables are created by you. 
                    No matter who you are, we're sure you have some old DIWhy projects, 
                    stuffed into the back of the closet. Dust em off and show em off!
                    </span>
                </div>

                <div>
                    <h2>A HAPPY PLACE</h2>
                    <span>
                    We promise that the multitude of unfinished projects on this site 
                    are guaranteed to make you FEEL BETTER about your own lack of 
                    follow through!
                    </span>
                </div>
            </section>


            <div className='future-index'>
                <h1>I promise we got projects in the back room.</h1>
                <h1>I just can't get them to show up.</h1>
                <ul>
                {projectList}

                </ul>
                
            </div>
        </div>
        )
    }
    
}

export default Index;