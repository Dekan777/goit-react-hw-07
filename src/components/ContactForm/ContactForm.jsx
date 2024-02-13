import { useSelector, useDispatch } from 'react-redux';

import { addContact } from '../redux/operations';
// import { selectContacts } from '../redux/selectors';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import css from './ContactForm.module.css';

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    const form = event.target;
    dispatch(addContact(values.name));
    form.reset();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.classForm}>
        <ErrorMessage name="name" component="div" className={css.error} />

        <Field type="text" name="name" placeholder="Username" />

        <ErrorMessage name="number" component="div" className={css.error} />

        <Field type="text" name="number" placeholder="Number" />

        <p> </p>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
