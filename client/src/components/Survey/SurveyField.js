import React from 'react';

function SurveyField({ input, label, meta: { touched, error } }) {
    return (
        <div class="flex flex-col py-2 gap-y-1">
            <label class="font-semibold text-[14px]">{label}</label>
            <input {...input} type="text" 
                class="p-2 rounded shadow"
            />
            {touched && error && (
                <p class="text-red-900">{error}</p>
            )}
        </div>
    )
}

export default SurveyField;