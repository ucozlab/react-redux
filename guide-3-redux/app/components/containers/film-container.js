import React from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import * as filmsApi from '../../api/films-api';

class FilmsContainer extends React.Component {

    constructor (props) {
        super(props);
    }

    componentDidMount() {
        filmsApi.getFilms();
    }

    render() {
        return (
            <ul className="films">
                {this.props.films.map((film) => {
                    return (
                        <li className="films-item" key={film}>{film}</li>
                    )
                })}
            </ul>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        films: store.filmsState.films
    };
};

export default connect(mapStateToProps)(FilmsContainer);
