import { setFilterValue } from '../redux/filtersSlice';
import { useDispatch } from 'react-redux';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    const inputValue = event.target.value;
    dispatch(setFilterValue(inputValue));
  };

  return (
    <div>
      <p className={css.pItem}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        onChange={handleChange}
        style={{
          backgroundColor: 'white',
          color: 'black',
        }}
      />
    </div>
  );
};

export default SearchBox;
