import React from 'react';
import { Link } from 'react-router-dom';

class StepIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        debugger
        this.props.requestProjects
    }

}

export default StepIndex;