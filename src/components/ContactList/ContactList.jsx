import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter } from '../redux/selectors';
import { deleteContact } from '../redux/operations';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  console.log(contacts);
  const dispatch = useDispatch();

  const handleRemoveContact = contactId => dispatch(deleteContact(contactId));

  return (
    <div>
      {contacts.map(({ name, phone, id, createdAt }) => (
        <div className={css.container} key={createdAt}>
          <p className={css.pItem}>
            <BsFillPersonFill className={css.myIcon} size="20" />
            {name}
          </p>
          <p className={css.par}>
            <BsFillTelephoneFill className={css.myIcon} size="16" />
            {phone}
          </p>

          <button
            className={css.button}
            onClick={() => handleRemoveContact(id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
