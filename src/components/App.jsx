import Phonebook from './Phonebook/Phonebook';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import ContactForm from './ContactForm/ContactForm';
import { fetchContacts } from './redux/operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContact } from './redux/selectors';
import './App.css';

export const App = () => {
  const dispatch = useDispatch();
  // Отримуємо частини стану
  const { contacts, isLoading, error } = useSelector(getContact);

  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <p>Loading tasks...</p>}

      {error && <p>{error}</p>}

      {/* <p>{contacts.length > 0 && JSON.stringify(contacts, null, 2)}</p> */}
      <Phonebook text="Phonebook" />

      <ContactForm />

      <SearchBox />

      <ContactList />
    </div>
  );
};
