import css from './Phonebook.module.css';
const Phonebook = ({ text }) => {
  return <h1 className={css.hItem}>{text}</h1>;
};
export default Phonebook;
