import { DeleteButton, TelecomButton } from 'components';
import React from 'react';
import { Colors } from 'utils';
import { StyledLink, Actions } from './styles';

const cols = [
  {
    name: 'Number',
    selector: 'value', // selector is the "key" in the data
  },
  {
    name: 'Setup Price',
    selector: 'setupPrice',
    sortable: true,
    style: {
      color: Colors.secondary,
    },
  },
  {
    name: 'Monthy Price',
    selector: 'monthyPrice',
    sortable: true,
    style: {
      color: Colors.secondary,
    },
  },
  {
    name: 'Actions',
    cell: (row: any) => (
      <Actions>
        <StyledLink to={`/edit/${row.id}`}>
          <TelecomButton label="Edit" width="75px" height="25px" />
        </StyledLink>
        <DeleteButton id={row.id} width="75px" height="25px" />
      </Actions>
    ),
  },
];

export default cols;
