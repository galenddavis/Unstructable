import { connect } from 'react-redux';
import { createStep, deleteStep } from '../../actions/step_actions';
import StepForm from './step_form';

const mSTP = (state, ownProps) => {
    
    return {
        formType: 'Create'
    }
}

const mDTP = dispatch => ({
    createStep: (step) => dispatch(createStep(step)),
    deleteStep: (stepId) => dispatch(deleteStep(stepId)) 
})

export default connect(mSTP, mDTP)(StepForm)
