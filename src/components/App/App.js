import { useSelector } from 'react-redux';
import Form from '../Form/Form';
import Contacts from '../Contacts/Contacts';
import Filter from '../Filter/Filter';
import css from '../App/App.module.css';



export const App = () => {
  const getContacts = useSelector(state => state.contacts.items);
 
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      {getContacts.length > 0 && (
        <div>
          <Filter />
          <Contacts />
        </div>
     )}
    </div>
  );
};
