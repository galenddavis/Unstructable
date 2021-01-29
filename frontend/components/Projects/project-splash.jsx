import React from 'react';
import { Link } from 'react-router-dom';


class ProjectSplash extends React.Component {

    render() {

        return (

            <div>
                <section className='image-header'>
                    <h2>START ANOTHER PROJECT</h2>
                    <p>Unstructable is a platform for you to share any and every project
                        that you've lost interest in. Whether youstarted trying to learn 
                        to knit, or maybe you have a bread recipie that you made once, 
                        this is the community to share it in.  
                    </p>
                    <Link to='/project/new'>New Unstructable</Link>
                </section>

                <section>
                    <h2>WHY PUBLISH AN UNSTRUCTABLE?</h2>
                    <img src={window.banner} alt=""/>
                    <span>
                        <h3>Everyone has something to share</h3>
                        <p>You have a project inside you, just waiting to 
                            get out. Maybe you have a plan, maybe you don't.
                            Even the most half-baked ideas are worth sharing. 
                        </p>
                    </span>
                </section>

                <section className='testimonials'>
                    <p className='test1'></p>
                    <p className='test2'></p>
                    <p className='test3'></p>
                
                </section>
            </div>
        )
    }
}

export default ProjectSplash;