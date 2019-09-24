import { createSelector } from 'reselect';

const itemsSelector = state => state.game.items;

export const highlightedItemsSelector = createSelector(
    itemsSelector,
    items => items.reduce(
        (highlightedItems, subItems) =>
            highlightedItems.concat(
                subItems.every(item => item.isHighlighted)
            )
        ,
        []
    ).every(item => item)
);

export const twoItemsSelectedSelector = createSelector(
    itemsSelector,
    items => items.reduce(
        (selectedItems, subItems, parentIndex) =>
            selectedItems.concat(
                subItems
                    .map((subItem, index) => ({ ...subItem, parentIndex, index }))
                    .filter(item => item.isSelected)
            )
        ,
        []
    ).length === 2
);
