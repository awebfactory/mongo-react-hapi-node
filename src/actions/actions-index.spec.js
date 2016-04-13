import expect from 'expect';
import {addUser} from './index';

describe('addUser', () => {

    it('should return a uuid', () => {
        const newUser = addUser({"name": "Victor"});
        console.log(newUser);
    expect(newUser.id).toExist();
    expect(newUser.id).toExist().toBeA("string");
    });
});