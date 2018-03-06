import React from 'react';
import {shallow} from 'enzyme';
import {AddContactForm} from '../src/homepage';

test('AddContactForm ', () => {
    const form = shallow(<AddContactForm />);
    expect(form.find('button').text()).toEqual('Add');
});