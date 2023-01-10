import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { deleteContacts } from '../../redux/sliseContacts';
import css from 'components/Contacts/Contacts.module.css';
import { MdClose } from 'react-icons/md';
import { fetchContacts } from '../../redux/operations';
import { deleteContact } from '../../redux/operations';


const Contacts = () => {
  const getContacts = useSelector(state => {
    // console.log('state', state.contacts);
    return state.contacts
  });
  const { items, isLoading, error } = getContacts;
  
  // console.log('items', items);
  const dispatch = useDispatch();
  const filterValue = useSelector(state => {
       return state.filter;
  });

    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);

  return (
    <>
      {isLoading && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
      <ul className={css.list}>
        {items.length > 0
          && items
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
