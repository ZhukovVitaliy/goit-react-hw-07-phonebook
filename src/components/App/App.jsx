import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectError, selectIsLoading } from 'redux/selectors';

import { fetchContacts } from 'redux/operations';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { GlobalStyle } from '../../GlobalStyle';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Container } from './App.styled';
import { Filter } from 'components/Filter/Filter';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />

      <h1>Phonebook</h1>
      <Container>
        <ContactForm />
      </Container>

      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactsList />
    </>
  );
};
