const chats = (state = [], action) => {
    switch (action.type) {
        case "TOGGLE_OPEN":
            return [
                ...state,
                {
                    id: action.id
                }
            ];
        default:
            return state;
    }
}

export default chats;