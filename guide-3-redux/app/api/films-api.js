import axios from 'axios';
import store from '../store';

/**
 * Get all users
 */

function getFilmsSuccess(films) {

    films = ['king', 'rambo', 'slot'];

    return {
        type: 'GET_MY_FILMS',
        films
    };
}

export function getFilms() {
    return axios.get('http://localhost:3001/users')
        .then(response => {
            store.dispatch(getFilmsSuccess(response.data));

            // store.dispatch({
            //     type: 'GET_MY_FILMS',
            //     films
            // });

            return response;
        });
}