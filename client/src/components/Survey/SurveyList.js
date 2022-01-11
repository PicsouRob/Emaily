import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

function SurveyList({ fetchSurveys, surveys }) {
    useEffect(() => {
        fetchSurveys();
    }, [fetchSurveys]);

    return (
        <div class="relative max-w-7xl px-6 py-8 mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                {surveys.reverse().map((item, index) => (
                    <div key={index} class="flex flex-col relative bg-white rounded-lg shadow-lg px-4 py-6">
                        <span class="font-semibold text-2xl md:text-3xl pb-1">{item.title}</span>
                        <p class="py-1">{item.body}</p>
                        <p class="self-end">Sent On: {new Date(item.dateSent).toLocaleDateString()}</p>
                        <hr class="my-3" />
                        <div class="flex gap-x-10">
                            <span class=""><strong>Yes:</strong> {item.yes}</span>
                            <span><strong>No:</strong> {item.no}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = ({ surveys }) => {
    return { surveys };
};

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);