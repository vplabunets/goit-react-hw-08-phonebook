import { useEffect, useState, React } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from 'redux/contacts/operations';
import { getContacts, getFilter } from 'redux/contacts/selectors';

import { Filter } from 'components/Filter/Filter';
import Udpater from 'components/Updater/Updater';
import { ContactItem } from '../ContactItem/ContactItem';

import { List } from './ContactList.styled';
import { styled } from '@mui/material/styles';
import {
  Table,
  Paper,
  tableCellClasses,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
} from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const ContactList = handleOpenUpdater => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [currentName, setcurrentName] = useState(null);
  const [currentNumber, setcurrentNumber] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(getContacts);

  const filter = useSelector(getFilter);
  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    let visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return visibleContacts;
  };

  const openUpdater = (id, name, number) => {
    setCurrentId(id);
    setcurrentName(name);
    setcurrentNumber(number);
    setIsOpen(true);
  };
  const closeUpdater = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen && (
        <Udpater
          currentId={currentId}
          currentName={currentName}
          currentNumber={currentNumber}
          closeUpdater={closeUpdater}
        />
      )}
      {!isOpen && (
        <List>
          {contacts.length > 0 && <Filter />}
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 400 }}
              size="small"
              aria-label="a dense table"
            >
              {contacts.length > 0 && (
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">Name</StyledTableCell>
                    <StyledTableCell align="center">Number</StyledTableCell>
                    <StyledTableCell align="center">Delete</StyledTableCell>
                    <StyledTableCell align="center">Update</StyledTableCell>
                  </TableRow>
                </TableHead>
              )}
              {filterContacts().map(contact => (
                <ContactItem
                  key={contact.id}
                  contact={contact}
                  handleOpenUpdater={handleOpenUpdater}
                  updater={() =>
                    openUpdater(contact.id, contact.name, contact.number)
                  }
                />
              ))}
            </Table>
          </TableContainer>
        </List>
      )}
    </div>
  );
};
