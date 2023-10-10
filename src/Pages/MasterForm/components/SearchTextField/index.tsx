import styled from "@emotion/styled";

import { InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";


const StyledTextField = styled(TextField)(({  style }) => ({
    width: '100%',
    boxShadow: '0px 4px 16px 0px #417EE31A',
    border: '1px solid #F2F4F7',
    borderRadius: '4px',
    backgroundColor: '#fff',
    'input': {
        padding: '10px',
        paddingLeft: 0,
        fontSize: 14,
        fontWeight: 500,
        '::placeholder': {
            opacity: 1,
            color: '#9AA6AC',
            fontWeight: 300,
        },
        ...style?.input,
    },
    '.MuiInputBase-root ': {
        paddingLeft: '10px',
        borderRadius: '6px',
        ...style?.MuiInputBaseRoot,
    },
    'fieldset': {
        borderColor: '#DDE2E4',
        ...style?.fieldset
    },
    ...style?.root,
    // minWidth: '300px',
}));

function SearchTextField({  placeholder, style }) {

    return (
        <StyledTextField
            style={style}
            // padding={padding ? padding : null}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Search sx={{ fontSize: '22px', color: '#B0BABF', ...style?.icon }} />
                    </InputAdornment>
                )
            }}
            placeholder={placeholder ? placeholder : ''}
        />
    )
}

export default SearchTextField;