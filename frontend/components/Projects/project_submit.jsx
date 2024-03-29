import React from 'react';
import { Link } from 'react-router-dom';
import ProjectForm from './project_form';


class ProjectSubmit extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentForm: 2,
            project: {
                title: '',
                body: '', 
                category: '',
                views: 0,
                favorites: 0,
                creator_id: this.props.currentUser
            },
            steps: []
        }
        
    }


    render() {

        return (
            <div className='submitForm'>
                {/* <section className='header'>
                    <span>
                        <button onClick={this.props.otherForm}>Back to Edit</button>
                    </span>
                    <span>
                        <button type='submit' className='publish'>Publish Now</button>
                    </span>
                </section> */}
                <div className='container'>
                    <p>Unstructable Preview</p>
                
                <section className='preview'>
                    <label>Title 
                        <input 
                            type="text"
                            value={this.props.title}
                            onChange={this.props.update('title')}/>
                    </label>
                    <select className='category'
                        value={this.props.category}
                        onChange={this.props.update('category')}>
                            <option value='Circuits'>Circuits</option>
                            <option value='Workshop'>Workshop</option>
                            <option value='Craft'>Craft</option>
                            <option value='Cooking'>Cooking</option>
                    </select>
                    
                </section>
                </div>
            </div>
        )
    }
}

export default ProjectSubmit;