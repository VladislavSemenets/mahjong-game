import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Board from './Board/Board';
import Button from '@material-ui/core/Button/Button';

const materialStyles = () => ({
    card: {
        minWidth: 800,
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
            isGameStarted
        } = this.props;

        const { startGame, handleSelect } = this.props;

        return (
            <Card className={classes.card}>
                <CardContent>
                    <Button variant="contained" color="primary" onClick={startGame}>
                        Start game
                    </Button>

                    <div className="board">
                        { isGameStarted && <Board items={items} onSelect={handleSelect}/> }
                    </div>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(materialStyles)(Game);
