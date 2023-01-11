import Form from '../Form/Form';
import Contacts from '../Contacts/Contacts';
import Filter from '../Filter/Filter';
import css from '../App/App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <div>
        <Filter />
        <Contacts />
      </div>
    </div>
  );
};
