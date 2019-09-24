import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import './Board.css';

class Board extends Component {
    static propTypes = {
        items: PropTypes.array,
        onSelect: PropTypes.func
    };

    render() {
        const { items, isTwoItemsSelected } = this.props;
        const { onSelect } = this.props;

        return (
            <React.Fragment>
             {items.map((subItems, subIndex) => (
                 <div className="board row" role="rowgroup" key={subIndex}>
                     <React.Fragment>
                         {subItems.map((item, index) => (
                             <div className="flex-row"
                                  style={{width: `calc(100% / ${subItems.length})`}}
                                  role="cell"
                                  key={`${item.value}-${index}`}>
                                 <Button variant="contained"
                                         disabled={isTwoItemsSelected || item.isSelected}
                                         color={`${item.isHighlighted ? 'primary' : 'secondary' }`}
                                         onClick={() => !item.isHighlighted && onSelect(subIndex, index)}>
                                     {item.isSelected || item.isHighlighted ? item.value : '#'}
                                 </Button>
                             </div>
                         ))}
                     </React.Fragment>
                 </div>
             ))}
            </React.Fragment>
        );
    }
}

export default Board;
