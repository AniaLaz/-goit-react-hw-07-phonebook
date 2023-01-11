import { useDispatch, useSelector } from 'react-redux';
// import { addContacts } from '../../redux/sliseContacts';
import { nanoid } from 'nanoid';
import css from 'components/Form/Form.module.css';
import { addContact } from '../../redux/operations';
import { getContacts } from '../../redux/selector';

const Form = () => {
  // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();

  const items = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();
    
    const contact = {
      name: event.target.name.value,
      phone: event.target.phone.value,
      id: nanoid(),
    };

    if (items.length > 0 && items.find(item => item.name === contact.name)) {
      alert('Такий контакт вже є');
      //очищаем поля ввода
      event.target.reset();
      return;
    }

      dispatch(addContact(contact));
    //очищаем поля ввода
    event.target.reset();
  };
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.labelName}>
        <span className={css.spanName}>Name</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.labelNamber}>
        <span className={css.spanNamber}>Namber</span>
        <input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.buttonAdd}>
        Add contact
      </button>
    </form>
  );
};

export default Form;
