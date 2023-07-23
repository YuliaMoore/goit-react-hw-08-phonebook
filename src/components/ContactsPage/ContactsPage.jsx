import { useSelector } from 'react-redux';

import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';

import {
  WelcomeText,
  Container,
  ContainerWrapper,
} from './ContactsPage.styled';

export const ContactsPage = () => {
  const contactsRedux = useSelector(state => state.contacts);
  const { isLoggedIn } = useSelector(state => state.auth);

  return (
    <Container>
      {isLoggedIn ? (
        <>
          <ContactForm />
          <ContainerWrapper>
            {contactsRedux.length === 0 ? (
              <p>There is no contacts in your list.</p>
            ) : (
              <>
                <Filter />
                <ContactList />
              </>
            )}
          </ContainerWrapper>
        </>
      ) : (
        <WelcomeText>Welcome to Phonebook</WelcomeText>
      )}
    </Container>
  );
};
