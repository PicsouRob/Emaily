import React from 'react';
import { connect } from 'react-redux';

// import { formFields } from './formFields';

function SurveyFormReview(props) {
    const { onCancel, formValues } = props;
    console.log(formValues)

    return (
        <div class="relative max-w-md mx-auto">
            <h5 class="">Please confirm your entries</h5>
            <div class="flex items-center justify-between my-5">
                <button to="/surveys" class="py-2 md:py-3 bg-red-600 rounded-lg px-8 text-white font-semibold hover:bg-red-500" onClick={() => onCancel()}>
                    Back
                </button>
                <button type="submit"
                    class="flex gap-x-2 py-2 md:py-3 bg-green-700 rounded-lg px-8 text-white font-semibold hover:bg-green-600"
                >
                    <span>Next</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        formValues: state.form.surveyForm.values
    };
}

export default connect(mapStateToProps)(SurveyFormReview);