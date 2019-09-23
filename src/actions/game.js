export const START_GAME = 'START_GAME';
export const SELECT_ITEM = 'SELECT_ITEM';
export const COMPARE_SELECTED = 'COMPARE_SELECTED';

const MAX_NUMBER = 99;
const MIN_NUMBER = 1;

export function startGame() {
    return {
        type: START_GAME,
        payload: { isGameStarted: true, items: generateItems() }
    };
}

export function handleSelect(id) {
    return async (dispatch) => {
        dispatch(selectItem(id));

        setTimeout(() => dispatch(checkSelected()), 1000);
    };
}

function checkSelected() {
    return {
        type: COMPARE_SELECTED,
        payload: { }
    };
}

function selectItem(id: number) {
    return {
        type: SELECT_ITEM,
        payload: { id }
    };
}

function generateItems() {
    return Array.from(
        Array(18),
        () => Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER)) + MIN_NUMBER
    ).reduce(
        (items, rawItem) => {
            const item = {
                value: rawItem,
                isSelected: false,
                isHighlighted: false
            };

            return items.concat(item, item);
        },
        []
    ).sort(() => 0.5 - Math.random());
}
