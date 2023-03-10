import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import { Item } from './ContactsList.styled';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => {
        const handeleDelete = () => dispatch(deleteContact(id));

        return (
          <Item key={id}>
            {name}: {number}
            <button type="button" onClick={handeleDelete}>
              delete
            </button>
          </Item>
        );
      })}
    </ul>
  );
};
