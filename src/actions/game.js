export const START_GAME = 'START_GAME';
export const SELECT_ITEM = 'SELECT_ITEM';
export const COMPARE_SELECTED = 'COMPARE_SELECTED';

const GAME_SIZE = 5;

export function startGame() {
    return {
        type: START_GAME,
        payload: { isGameStarted: true, items: generateItems() }
    };
}

export function handleSelect(parentId, id) {
    return async (dispatch) => {
        dispatch(selectItem(parentId, id));

        setTimeout(() => dispatch(checkSelected()), 1100);
    };
}

function checkSelected() {
    return {
        type: COMPARE_SELECTED,
        payload: { }
    };
}

function selectItem(parentId, id) {
    return {
        type: SELECT_ITEM,
        payload: { parentId, id }
    };
}

function generateItems() {
    const source = Array
        .from(
            { length: 99 },
            (value, key) => key + 1
        ).sort(() => Math.random() - 0.5);
    const items = source
        .splice(0, GAME_SIZE)
        .reduce(
            (items, rawItem) => {
                const item = {
                    value: rawItem,
                    isSelected: false,
                    isHighlighted: false
                };

                return items.concat(item, item);
            },
            []
        )
        .sort(() => Math.random() - 0.5);

    return chunkArray(items, 6);
}

function chunkArray(array, size){
    const arrayLength = array.length;
    const tempArray = [];

    for (let index = 0; index < arrayLength; index += size) {
        tempArray.push(array.slice(index, index + size));
    }

    return tempArray;
}
