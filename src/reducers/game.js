import { COMPARE_SELECTED, SELECT_ITEM, START_GAME } from '../actions/game';

const initialState = { isGameStarted: false, items: [] };

export default function game(state = initialState, action) {
    switch (action.type) {
        case START_GAME:
            const { isGameStarted, items } = action.payload;

            return { ...state, isGameStarted, items };

        case SELECT_ITEM:
            const { id } = action.payload;

            return {
                ...state,
                items: state.items.map(
                    (item, index) => index === id ? { ...item, isSelected: !item.isSelected } : item
                )
            };
        case COMPARE_SELECTED:
            const selectedItems = state.items.filter(item => item.isSelected);

            if (selectedItems.length > 1) {
                const [first, second] = selectedItems;
                const ids = [state.items.indexOf(first), state.items.indexOf(second)];
                const isEqual = first.value === second.value;

                return {
                    ...state,
                    items: state.items.map(
                        (item, index) => ids.includes(index) && isEqual
                            ? { ...item, isHighlighted: isEqual, isSelected: false }
                            : { ...item, isSelected: false }
                    )
                };
            }

            return { ...state };
        default:
            return state;
    }
}
