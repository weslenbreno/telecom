import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from 'utils';

export const customStyles = {
  table: {
    style: {
      borderRadius: 35,
      border: 'none',
      padding: 10,
      backgroundColor: 'transparent',
    },
  },
  rows: {
    style: {
      fontSize: '14px',
      padding: 0,
      '&:first-child': {
        border: 'none',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
      },
      '&:last-child': {
        border: 'none',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
      },
      '&:not(:last-of-type)': {
        border: 'none',
      },
      '&:nth-child(even)': {
        background: '#DFE7EF',
      },
      fontFamily: 'SFProSemibold',
    } as React.CSSProperties,
  },
  headCells: {
    style: {
      paddingLeft: '8px', // override the cell padding for head cells
      paddingRight: '8px',
      textAlign: 'center',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      color: Colors.white,
      fontFamily: 'SFProSemibold',
      fontSize: 12.5,
    } as React.CSSProperties,
  },
  head: {
    style: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  headRow: {
    style: {
      borderRadius: 35,
      background: Colors.primary,
    } as React.CSSProperties,
  },
  cells: {
    style: {
      color: Colors.primary,
      boder: 'none',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
    } as React.CSSProperties,
  },
};

export const StyledLink = styled(Link)`
  &:hover {
    outline: none;
    text-decoration: none;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
