import { combineReducers } from 'redux';
import { reducer as formReducers } from 'redux-form';

import authReducers from './authReducers';
import surveysReducers from './surveysReducers';

export default combineReducers({
    auth: authReducers,
    form: formReducers,
    surveys: surveysReducers,
});