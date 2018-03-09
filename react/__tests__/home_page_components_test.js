import React from 'react';
import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';
import {AddContactForm, ContactsTable} from '../src/homepage';

describe('<AddContactForm />', () => {
    test('snapshot', () => {
        const component = renderer.create(<AddContactForm/>);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('has add button', () => {
        const form = shallow(<AddContactForm/>);
        expect(form.find('button').text()).toEqual('Add');
    });
});

describe('<ContactsTable />', () => {
    it('calls componentDidMount', () => {
        const spy = jest.spyOn(ContactsTable.prototype, 'componentDidMount');
        const wrapper = mount(<ContactsTable />);

        expect(spy).toHaveBeenCalled();
    });

    it('renders fetched data in rows', () => {
        fail('TODO');
    });
});