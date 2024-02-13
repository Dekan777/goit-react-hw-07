import { useId } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../redux/contacsSlice';
import { getContact } from '../redux/selectors';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const contacts = useSelector(getContact);
  const dispatch = useDispatch();

  const handlePushForm = async (values, { resetForm }) => {
    const { name, number } = values;

    const contactExists = contacts.contacts.some(item => item.name === name);

    if (contactExists) {
      alert(`${name} is already in contact!`);
    } else {
      const newContact = { id: nanoid(10), name, number };
      dispatch(addContact(newContact));
      resetForm();
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handlePushForm}>
      <Form className={css.classForm}>
        <ErrorMessage name="name" component="div" className={css.error} />

        <Field
          type="text"
          name="name"
          id={nameFieldId}
          placeholder="Username"
        />

        <ErrorMessage name="number" component="div" className={css.error} />

        <Field
          type="text"
          name="number"
          id={numberFieldId}
          placeholder="Number"
        />

        <p> </p>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
