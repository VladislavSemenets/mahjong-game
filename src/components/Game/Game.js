import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import SnackbarContent from '@material-ui/core/SnackbarContent';

import Button from '@material-ui/core/Button/Button';

import Board from './Board/Board';

const materialStyles = (theme) => ({
    card: {
        minWidth: 800,
    },
    snackbar: {
        margin: theme.spacing(1),
    }
});

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
            isGameStarted,
            highlightedItems
        } = this.props;

        const { startGame, handleSelect } = this.props;

        return (
            <React.Fragment>
                <Card className={classes.card}>
                    <CardContent>
                        { isGameStarted && highlightedItems === items.length &&
                        <SnackbarContent
                            className={classes.snackbar}
                            message="The game is over, you have opened all the cards, click start the game for a new game"/>
                        }
                        <Button variant="contained" color="primary" onClick={startGame}>
                            Start game
                        </Button>
                        <div className="board">
                            {isGameStarted && <Board items={items} onSelect={handleSelect}/>}
                        </div>
                    </CardContent>
                </Card>
            </React.Fragment>
        );
    }
}

export default withStyles(materialStyles)(Game);
