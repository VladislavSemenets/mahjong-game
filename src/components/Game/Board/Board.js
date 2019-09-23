import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import Button from '@material-ui/core/Button';

const materialStyles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        marginTop: '15px'
    },
    gridList: {
        width: 500,
        height: 450,
    }
});

class Board extends Component {
    static propTypes = {
        items: PropTypes.array,
        onSelect: PropTypes.func
    };

    render() {
        const {
            classes,
            items
        } = this.props;

        const { onSelect } = this.props;

        return (
            <div className={classes.root}>
                <GridList cellHeight={60}
                          className={classes.gridList}
                          cols={6}>
                    {items.map((item, index) => (
                        <GridListTile key={`${item.value}-${index}`}
                                      cols={1}>
                            <Button variant="contained"
                                    color={`${item.isHighlighted ? 'primary' : 'secondary' }`}
                                    onClick={() => onSelect(index)}>
                                {item.isSelected || item.isHighlighted ? item.value : '#'}
                            </Button>
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        );
    }
}

export default withStyles(materialStyles)(Board);
