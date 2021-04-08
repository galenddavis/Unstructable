import { connect } from 'react-redux';
import { createStep, deleteStep, updateStep } from '../../actions/step_actions';
import StepForm from './step_form';

class EditStepForm extends React.Component {
    render() {
        return (
            <StepForm />
        )
    }
}

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
    deleteStep: (stepId) => dispatch(deleteStep(stepId)),
    updateStep: (step) => dispatch(updateStep(step)) 
})

export default connect(mSTP, mDTP)(EditStepForm)
