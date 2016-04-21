import expect from 'expect';
import users from './index';

describe('user', () => {

    it('should return a new user state', () => {
        const aUser = users({"id": "29f9d5a0-0196-11e6-808f-83c2665c11f8", user: {"firstName": "Victor", "lastName": "Kane"}}, 'ADD_USER');
        console.log(aUser);
    expect(aUser.id).toExist().toBeA("string");
    });
});