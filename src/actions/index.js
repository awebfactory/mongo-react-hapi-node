import uuid from 'node-uuid';

export const addUser = (user) => {
    return {
        type: 'ADD_USER',
        id: uuid.v1(),
        user
    }
}

