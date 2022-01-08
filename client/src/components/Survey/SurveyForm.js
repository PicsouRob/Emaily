import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom'; 

import SurveyField from './SurveyField';

const FIELDS = [
    { label: 'Survey Title', name: 'title' },
    { label: 'Subject Line', name: 'subject' },
    { label: 'Email Body', name: 'body' },
    { label: 'Recipient List', name: 'emails' },
];

function SurveyForm(props) {
    const { handleSubmit } = props;

    const renderField = () => (
        <div class="">
            {FIELDS.map(({ name, label }, index) => (
                <Field key={index}
                    type="text"
                    name={name}
                    component={SurveyField}
                    label={label}
                />
            ))}
        </div>
    );

    return (
        <div class="relative max-w-xl mx-auto">
            <form onSubmit={handleSubmit(values => console.log(values))}>
                {renderField()}
                <div class="flex items-center justify-between my-5">
                    <Link to="/surveys" class="py-2 md:py-3 bg-red-500 rounded-lg px-8 text-white font-semibold hover:bg-red-600">
                        Cancel
                    </Link>
                    <button type="submit"
                        class="flex gap-x-2 py-2 md:py-3 bg-green-700 rounded-lg px-8 text-white font-semibold hover:bg-green-600"
                    >
                        <span>Next</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    )
}

function validate(values) {
    const errors = {};

    FIELDS.forEach(({ name }) => {
        if(!values[name]) {
            errors[name] = `You must provide a ${name}`;
        }
    });

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm'
})(SurveyForm);