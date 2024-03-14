import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { setFilter } from '../../redux/filter/filterSlice';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// import PropTypes from 'prop-types';

const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = event => {
    event.preventDefault();
    const filterValue = event.target.value;
    dispatch(setFilter(filterValue.toLowerCase()));
  };

  return (
    <div className={css.filter}>
      <TextField
        label="Search"
        name="filter"
        onChange={changeFilter}
        placeholder="Find contacts"
      />
    </div>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string,
//   changeFilter: PropTypes.func,
// };

export default Filter;
