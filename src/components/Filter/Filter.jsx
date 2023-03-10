import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <label htmlFor="">
      Find contacts by name
      <br />
      <input type="text" value={value} onChange={changeFilter} />
    </label>
  );
};
