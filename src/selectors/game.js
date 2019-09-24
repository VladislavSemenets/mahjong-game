import { createSelector } from 'reselect';

const itemsSelector = state => state.game.items;

export const highlightedItemsSelector = createSelector(
    itemsSelector,
    items => items.filter(item => item.isHighlighted).length
);
