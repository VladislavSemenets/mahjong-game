import { COMPARE_SELECTED, SELECT_ITEM, START_GAME } from '../actions/game';

const initialState = { isGameStarted: false, items: [] };

export default function game(state = initialState, action) {
    switch (action.type) {
        case START_GAME:
            const { isGameStarted, items } = action.payload;

            return { ...state, isGameStarted, items };

        case SELECT_ITEM:
            const { parentId, id } = action.payload;

            return {
                ...state,
                items: state.items.reduce((newItems, rawSubItems, index) => {
                    let subItems = rawSubItems;

                    if (parentId === index) {
                        subItems = rawSubItems.map(
                            (item, index) => index === id ? { ...item, isSelected: !item.isSelected } : item
                        )
                    }

                    newItems.push(subItems);

                    return newItems;
                }, [])
            };
        case COMPARE_SELECTED:
            const selectedItems = state.items
                .reduce(
                    (selectedItems, subItems, parentIndex) =>
                        selectedItems.concat(
                            subItems
                                .map((subItem, index) => ({ ...subItem, parentIndex, index }))
                                .filter(item => item.isSelected)
                        )
                    ,
                    []
                );

            if (selectedItems.length > 1) {
                const [first, second] = selectedItems;

                const isEqual = first.value === second.value;
                const items = [].concat(state.items);

                for (let i = 0; i < items.length; i++) {
                    for (let j = 0; j < items[i].length; j++) {
                        if (((i === first.parentIndex && j === first.index) ||
                            (i === second.parentIndex && j === second.index))
                        ) {
                            items[i][j] = {
                                ...items[i][j],
                                isHighlighted: isEqual,
                                isSelected: false
                            };
                        }
                    }
                }

                return { ...state, items };
            }

            return { ...state };
        default:
            return state;
    }
}
