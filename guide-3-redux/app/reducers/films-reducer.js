const initialState = {
    films: []
};

const filmsReducer = (state = initialState, action) => {
    switch(action.type) {

        case 'GET_MY_FILMS':
            return Object.assign({}, state, { films: action.films });

    }

    return state;
};

export default filmsReducer;