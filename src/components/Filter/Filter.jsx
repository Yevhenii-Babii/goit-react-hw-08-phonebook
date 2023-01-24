import { useDispatch } from 'react-redux';
import { filterForm } from 'redux/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(filterForm(event.target.value));
  };

  return (
    <>
      <h3>Find contacts by name</h3>
      <input onChange={handleChange}></input>
    </>
  );
};
