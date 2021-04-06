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

    render() {
        if (this.props.project === undefined) return null;
        return (
            <h1>Hey</h1>
        )
    }

}

export default StepIndex;