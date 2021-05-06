import React from 'react';
import { connect } from 'react-redux';
import { requestStep, deleteStep, updateStep } from '../../actions/step_actions';
import StepForm from './step_form';

class EditStepForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }


    render() {
        
        const { step, updateStep, otherForm } = this.props
        return (
            <StepForm 
                step={this.props.step}
                updateStep={updateStep}
                otherForm={otherForm}
                history={this.props.history} />
        )
    }
}

const mSTP = (state, ownProps) => {
    // Can also find project with 'state.entities.projects[ownProps.location.projectId]'
    // Would need to edit jbuilder to set each step as the value with the id as the key. 
    
    return {
        step: ownProps.currentStep,
        otherForm: ownProps.otherForm
    }
}

const mDTP = dispatch => ({
    deleteStep: (stepId) => dispatch(deleteStep(stepId)),
    requestStep: (stepId, projectId) => dispatch(requestStep(stepId, projectId)),
    updateStep: (step) => dispatch(updateStep(step)) 
})

export default connect(mSTP, mDTP)(EditStepForm)
