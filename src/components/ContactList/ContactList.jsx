import { FaUserAlt } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from '../redux/selectors';
import { deleteContact } from '../redux/operations';

import { IconContext } from 'react-icons';
import { IoClose } from 'react-icons/io5';

const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);
  console.log(filteredContacts);
  const dispatch = useDispatch();

  const handleRemoveContact = contactId => dispatch(deleteContact(contactId));

  return (
    <div className={css.containerAll}>
      {filteredContacts.map(({ name, phone, id, createdAt }) => (
        <div className={css.container} key={createdAt}>
          <div className={css.pConteiner}>
            <p className={css.pItem}>
              <FaUserAlt className={css.myIcon} />
              {name}
            </p>
            <p className={css.par}>
              <FaPhoneAlt className={css.myIcon} />
              {phone}
            </p>
          </div>

          <button
            className={css.button}
            onClick={() => handleRemoveContact(id)}
          >
            <IconContext.Provider value={{ size: '2em' }}>
              <IoClose />
            </IconContext.Provider>
          </button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
