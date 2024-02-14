import { useDispatch } from 'react-redux';

import { addContact } from '../redux/operations';

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

  const validate = values => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Name is required';
    }

    if (!values.number) {
      errors.number = 'Number is required';
    }

    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={validate}
    >
      <Form className={css.classForm}>
        <div className={css.fieldContainer}>
          <div className={css.errorContainer}>
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>
          <Field type="text" name="name" placeholder="Username" />
        </div>
        <div className={css.fieldContainer}>
          <div className={css.errorContainer}>
            <ErrorMessage name="number" component="div" className={css.error} />
          </div>
          <Field type="text" name="number" placeholder="Number" />
        </div>
        <div className={css.messageContainer}></div>
        <button className={css.classBtn} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
