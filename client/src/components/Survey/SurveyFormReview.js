import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { formFields } from './formFields';
import * as actions from '../../actions';

function SurveyFormReview(props) {
    const navigate = useNavigate();
    const { onCancel, formValues, submitSurvey } = props;

    return (
        <div class="relative max-w-md mx-auto">
            <h5 class="font-semibold">Please confirm your entries</h5>
            <div class="my-4">
                {formFields.map(({ label, name }, index) => (
                    <div key={index} class="my-4">
                        <h3 class="font-bold text-gray-700">{label}</h3>
                        <span class="">{formValues[name]}</span>
                    </div>
                ))}
            </div>
            <div class="flex items-center justify-between pt-4 my-5">
                <button to="/surveys" class="py-2 md:py-3 bg-red-600 rounded-lg px-8 text-white font-semibold hover:bg-red-500 uppercase text-[14px]" onClick={() => onCancel()}>
                    Back
                </button>
                <button type="submit"
                    class="flex gap-x-2 py-2 md:py-3 bg-green-700 rounded-lg px-8 text-white font-semibold hover:bg-green-600 uppercase text-[14px] items-center"
                    onClick={() => submitSurvey(formValues, navigate)}
                >
                    <span>Send Survey</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="white">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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

export default connect(mapStateToProps, actions)(SurveyFormReview);