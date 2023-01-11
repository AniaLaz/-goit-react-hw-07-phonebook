import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { deleteContacts } from '../../redux/sliseContacts';
import css from 'components/Contacts/Contacts.module.css';
import { MdClose } from 'react-icons/md';
import { fetchContacts } from '../../redux/operations';
import { deleteContact } from '../../redux/operations';
import {
  getContacts,
  getIsLoading,
  getError,
  getFilterValue,
} from '../../redux/selector';

const Contacts = () => {
  const items = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const filterValue = useSelector(getFilterValue);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
      <ul className={css.list}>
        {items.length > 0 &&
          items
            .filter(item => item.name.toLowerCase().includes(filterValue))
            .map(item => {
              const { id, name, phone } = item;
              return (
                <li className={css.item} key={id} id={id}>
                  <div className={css.itemContent}>
                    {name}: {phone}
                  </div>
                  <button
                    className={css.buttonDelete}
                    onClick={() => dispatch(deleteContact(id))}
                  >
                    <MdClose />
                  </button>
                </li>
              );
            })}
      </ul>
    </>
  );
};

export default Contacts;
