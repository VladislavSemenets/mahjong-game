import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Game from '../components/Game/Game';
import * as BuildActions from '../actions/game';

function mapStateToProps(state) {
    return {
        isGameStarted: state.game.isGameStarted,
        items: state.game.items,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(BuildActions, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);
