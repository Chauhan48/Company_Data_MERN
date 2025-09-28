import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

export default function Dropdown({ filterList, field, applyFilter }) {
    const [options, setOptions] = useState('');

    const handleChange = (event) => {
        setOptions(event.target.value);
        applyFilter(field, event.target.value);
    };
    return (
        <>
            <FormControl variant='standard' sx={{ minWidth: 100, mr: 2, ml: 1 }} >
                <InputLabel id={`${field}-select-label`}>{field}</InputLabel>
                <Select
                    labelId={`${field}-select-label`}
                    id={`${field}-select`}
                    value={options}
                    label={field}
                    autoWidth
                    onChange={handleChange}
                >
                    {filterList.map(it =>

                        <MenuItem value={it}>{it}</MenuItem>
                    )}
                </Select>
            </FormControl>
        </>
    )
}