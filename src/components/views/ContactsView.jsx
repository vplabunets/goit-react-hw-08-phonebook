import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Container from '../components/Container';
// import TodoList from '../components/TodoList';
// import TodoEditor from '../components/TodoEditor';
// import Filter from '../components/TodoFilter';
// import Stats from '../components/Stats';
// import Modal from '../components/Modal';
// import IconButton from '../components/IconButton';
// import { ReactComponent as AddIcon } from '../icons/add.svg';
// import { todosOperations, todosSelectors } from '../redux/todos';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

import { getContacts, getError, getIsLoading } from 'redux/contacts/selectors';

import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactsList';
import { Filter } from '../Filter/Filter';

import { AppWrap, PageTitle, SectionTitle } from '../App/App.styled';

// const barStyles = {
//   display: 'flex',
//   alignItems: 'flex-end',
//   marginBottom: 20,
// };

export default function ContactsView(params) {
  const dispatch = useDispatch();
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  //   const dispatch = useDispatch();
  //   const isLoadingTodos = useSelector(todosSelectors.getLoading);

  //   const [isModalOpen, setIsModalOpen] = useState(false);
  //   const toggleModal = () => setIsModalOpen(state => !state);

  //   useEffect(() => dispatch(todosOperations.fetchTodos()), [dispatch]);

  return (
    <AppWrap>
      <PageTitle>Phonebook</PageTitle>
      <ContactForm></ContactForm>
      <SectionTitle>Contacts</SectionTitle>
      <Filter />
      {isLoading && 'Your contacts are loading, please wait foe a while'}
      {error && { error }}
      {getContacts.length > 0 && <ContactList />}
    </AppWrap>
  );

  // <Container>
  //   <div style={barStyles}>
  //     <Filter />
  //     <Stats />
  //     <IconButton onClick={toggleModal} aria-label="Добавить todo">
  //       <AddIcon width="40" height="40" fill="#fff" />
  //     </IconButton>

  //     {isLoadingTodos && <h1>Загружаем...</h1>}
  //   </div>

  //   <TodoList />

  //   {isModalOpen && (
  //     <Modal onClose={toggleModal}>
  //       <TodoEditor onSave={toggleModal} />
  //     </Modal>
  //   )}
  // </Container>
}
