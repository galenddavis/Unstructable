import React from 'react';
import { connect } from 'react-redux';
import { requestStep, deleteStep, updateStep } from '../../actions/step_actions';
import StepForm from './step_form';

class EditStepForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    componentDidMount() {
        debugger
        this.props.requestStep(this.props.stepId, this.props.projectId).then( step => {
            debugger
            console.log(step)
            this.setState({ step: step.step })
        })
    }
    render() {
        debugger
        const { updateStep } = this.props
        return (
            <StepForm 
                step={this.state}
                updateStep={updateStep} />
        )
    }
}

const mSTP = (state, ownProps) => {
    debugger
    return {
        projectId: ownProps.location.projectId,
        stepId: ownProps.location.stepId
    }
}

const mDTP = dispatch => ({
    deleteStep: (stepId) => dispatch(deleteStep(stepId)),
    requestStep: (stepId, projectId) => dispatch(requestStep(stepId, projectId)),
    updateStep: (step) => dispatch(updateStep(step)) 
})

export default connect(mSTP, mDTP)(EditStepForm)
