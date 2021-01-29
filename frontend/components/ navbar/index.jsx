import React from 'react';
import { Link } from 'react-router-dom';

class Index extends React.Component {
    constructor(props) {
        super(props)

    }


    render () {
        return (
        <div className='body'>
            <span className='main-image'>
                <img src={window.feature} alt="" />
            </span>

            <section className='feat-text'>

                <div>
                    <h2>STEP-BY-STEP</h2>
                    <span>
                        We make it easy to learn how to make anything, 
                        one step at a time. From the stovetop to the workshop, 
                        you are sure to be inspired by the awesome projects that are 
                        shared everyday.
                    </span>
                </div>

                <div>
                    <h2>MADE BY YOU</h2>
                    <span>
                    Instructables are created by you. 
                    No matter who you are, we all have secret skills to share
                    me join our community of curious makers, 
                    innovators, teachers, and life long learners who love 
                    to share what they make.
                    </span>
                </div>

                <div>
                    <h2>A HAPPY PLACE</h2>
                    <span>
                    Making things makes people happy. 
                    We can't prove it, but we know it to be true. 
                    Find your happy place, and join one of the friendliest online 
                    communities anywhere.
                    </span>
                </div>
            </section>


            <div className='future-index'>
                {/* <h1>This is where the fun begins</h1> */}
                <img src="https://thumbs.gfycat.com/FlawedEuphoricClumber-size_restricted.gif" alt=""/>
            </div>
        </div>
        )
    }
    
}

export default Index;