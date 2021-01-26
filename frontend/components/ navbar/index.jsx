import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => (
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


        <h1 className='future-index'>This is where the future index will be</h1>

    </div>
)

export default Index;