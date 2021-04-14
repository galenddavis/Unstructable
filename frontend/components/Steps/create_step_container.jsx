import { connect } from 'react-redux';
import { createStep, deleteStep } from '../../actions/step_actions';
import StepForm from './step_form';

const mSTP = (state) => {

    return {
        step: {
            title: '',
            body: '',
            project_id: ''
        },
        formType: 'Create'
    }
}

const mDTP = dispatch => ({
    createStep: (step) => dispatch(createStep(step)),
    deleteStep: (stepId) => dispatch(deleteStep(stepId)) 
})

export default connect(mSTP, mDTP)(StepForm)
