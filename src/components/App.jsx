import Phonebook from './Phonebook/Phonebook';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import ContactForm from './ContactForm/ContactForm';
import { fetchContacts } from './redux/operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Phonebook text="Phonebook" />

      <ContactForm />

      <SearchBox />

      <ContactList />
    </div>
  );
};
