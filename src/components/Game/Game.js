import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SnackbarContent from '@material-ui/core/SnackbarContent';
import Button from '@material-ui/core/Button/Button';

import Board from './Board/Board';

import './Game.css';

class Game extends Component {
    static propTypes = {
        isGameStarted: PropTypes.bool,
        items: PropTypes.array,
        startGame: PropTypes.func,
        select: PropTypes.func
    };

    render() {
        const {
            classes,
            items,
            isTwoItemsSelected,
            isGameStarted,
            isAllItemsHighlighted
        } = this.props;

        const { startGame, handleSelect } = this.props;

        return (
            <div className="game-container">
                { isGameStarted && isAllItemsHighlighted  &&
                <SnackbarContent
                    className={classes.snackbar}
                    message="The game is over, you have opened all the cards, click start the game for a new game"/>
                }
                <Button variant="contained" color="primary" onClick={startGame}>
                    Start game
                </Button>
                <React.Fragment>
                    {isGameStarted &&
                    <Board items={items}
                           isTwoItemsSelected={isTwoItemsSelected}
                           onSelect={handleSelect}/>}
                </React.Fragment>
            </div>
        );
    }
}

export default Game;
