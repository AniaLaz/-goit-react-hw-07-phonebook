import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from '../../redux/sliseContacts';
import css from 'components/Contacts/Contacts.module.css';
import { MdClose } from 'react-icons/md';

const Contacts = () => {
  const contacts = useSelector(state => state.contacts.contactsArr);
  const dispatch = useDispatch();


  const filterValue = useSelector(state => {
       return state.filter;
  });

  // // 8888888888888
  // localStorage.setItem('contactsStart', JSON.stringify(contacts));
  // // 8888888888888

  return (
    <ul className={css.list}>
      {contacts
        .filter(item => item.name.toLowerCase().includes(filterValue))
        .map(item => {
          const { id, name, number } = item;
          return (
            <li className={css.item} key={id} id={id}>
              <div className={css.itemContent}>
                {name}: {number}
              </div>
              <button
                className={css.buttonDelete}
                onClick={() => dispatch(deleteContacts(id))}
              >
                <MdClose />
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default Contacts;
