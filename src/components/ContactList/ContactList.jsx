import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  deleteContact,
} from 'redux/contactsSlice/contactsOperations';
import Contact from 'components/Contact/Contact';
import { Item } from './ContactList.styled';

const ContactList = () => {
  const contactsRedux = useSelector(state => state.contacts.items);
  const filterRedux = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filtredContacts = () => {
    const normalizedFilter = filterRedux.toLowerCase();
    return contactsRedux.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContactList = filtredContacts();

  return (
    <ul>
      {filteredContactList.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <Contact
              name={name}
              number={number}
              onClick={() => {
                dispatch(deleteContact(id));
              }}
              contactId={id}
            />
          </Item>
        );
      })}
    </ul>
  );
};

export default ContactList;
