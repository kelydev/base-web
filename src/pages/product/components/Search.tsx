import React from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material';

const Search: React.FC<any> = ({searchValue, setSearchValue}) => {
  return (
    <>
      <TextField
        value={searchValue}
        onChange={event => setSearchValue(event.target.value)}
        placeholder="Buscar por Nombre"
        sx={{
          m: 2, 
          height: '100%',  
          width: '500px',
          borderColor: 'gray',
          borderRadius: '4px', 
        }}
      />
    </>
  );
};

export default Search;