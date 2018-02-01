import React from "react";

class AddContactForm extends React.Component {
    render_field(name, label) {
        let nameprop = 'add_form-' + name;
        return (
            <div>
                <label for={nameprop}>{label}</label>
                <input type="text" name={nameprop}/>
            </div>
        )
    }

    render() {
        return (
            <form id="add_contact_form" action="#" className="addcontactform" method="POST">
                {this.render_field('name', 'First name:')}
                {this.render_field('lastname', 'Last name:')}
                {this.render_field('email', 'Email:')}
                <button type="submit">Add</button>
            </form>
        )
    }
}

class ContactsTable extends React.Component {
    render() {
        return (
            <table id="contacts_table" className="contactstable">
                <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                </tr>
            </table>
        )
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

