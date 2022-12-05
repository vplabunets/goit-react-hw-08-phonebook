import { React } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import PropTypes from 'prop-types';
import {
  Button,
  Typography,
  TableBody,
  TableCell,
  TableRow,
} from '@mui/material';

import { styled } from '@mui/material/styles';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
export const ContactItem = ({ contact, updater, handleOpenUpdater }) => {
  const { name, number, id } = contact;

  const dispatch = useDispatch();
  const contactCleaner = () => dispatch(deleteContact(id));

  return (
    <>
      <TableBody>
        <StyledTableRow>
          <TableCell
            sx={{ minWidth: 150 }}
            align="left"
            component="th"
            scope="row"
          >
            <Typography className="MuiTypography-subtitle" variant="string">
              {name}:
            </Typography>
          </TableCell>
          <TableCell sx={{ minWidth: 150 }} align="left">
            {number}
          </TableCell>
          <TableCell sx={{ minWidth: 150 }} align="right">
            <Button
              contact={contact.id}
              type="button"
              variant="contained"
              sx={{ mr: 2 }}
              onClick={contactCleaner}
            >
              Delete
            </Button>
          </TableCell>
          <TableCell sx={{ minWidth: 150 }} align="right">
            {' '}
            <Button
              contact={contact}
              type="button"
              variant="contained"
              onClick={updater}
            >
              Update
            </Button>
          </TableCell>
        </StyledTableRow>
      </TableBody>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  updater: PropTypes.func.isRequired,
};
