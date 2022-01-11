import React, { useState } from 'react';
import { reduxForm } from 'redux-form';

import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

const SurveyNew = () => {
    const [showReview, setShowReview] = useState(false);

    return (
        <div class="relative bg-green-50 md:bg-green-100 min-h-screen w-full px-8 mx-auto py-12">
            {showReview === true ? <SurveyFormReview 
                onCancel={() => setShowReview(false)}
            /> : (
                <SurveyForm 
                    onSurveySubmit={() => setShowReview(true)}
                />
            )}
        </div>
    )
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);