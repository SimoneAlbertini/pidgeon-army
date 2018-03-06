import React from "react";

export class AddContactForm extends React.Component {
    render_field(name, label) {
        let nameprop = 'add_form-' + name;
        return (
            <div>
                <label htmlFor={nameprop}>{label}</label>
                <input type="text" name={nameprop}/>
            </div>
        )
    }

    render() {
        return (
                <form id="add_contact_form" action="#" method="POST">
                {this.render_field('name', 'First name:')}
                {this.render_field('lastname', 'Last name:')}
                {this.render_field('email', 'Email:')}
                <button type="submit">Add</button>
            </form>
        )
    }
}

function ContactRow(props) {
    return (
        <tr>
            <td>{props.contact.first_name}</td>
            <td>{props.contact.last_name}</td>
            <td>{props.contact.email}</td>
        </tr>
    );
}

class ContactsTable extends React.Component {
    constructor() {
        super();
        this.state = {contacts: []};
    }

    componentDidMount() {
        let url = '/api/contact-list';
        fetch(url)
            .then(response => {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(data => {
                this.setState({contacts: data})
            });
    }

    render() {
        let contacts = this.state.contacts;

        return (
            <table id="contacts_table">
                <tbody>
                {contacts.map((contact, i) => <ContactRow contact={contact} key={i}/>)}
                </tbody>
            </table>
        );
    }
}

export default class ManageContacts extends React.Component {
    render() {
        return (
            <div>
                <AddContactForm/>
                <ContactsTable/>
            </div>
        );
    }
}

