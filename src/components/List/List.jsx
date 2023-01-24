import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteForm } from 'redux/operations';
import { ListUl, BtnDelete } from './List.styled';
export const List = ({ contacts }) => {
  const dispatch = useDispatch();

  return (
    <>
      <h2>Contacts</h2>
      <ListUl>
        {contacts.map(({ id, name, phone, number }) => {
          return (
            <li key={id}>
              {name}: {number}
              <BtnDelete onClick={() => dispatch(deleteForm(id))}>
                Delete
              </BtnDelete>
            </li>
          );
        })}
      </ListUl>
    </>
  );
};

List.prototype = {
  deleteForm: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
