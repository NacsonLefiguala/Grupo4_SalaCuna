import React from 'react'
import { FormControl, FormLabel, Input } from '@chakra-ui/react'

const InputForm = ({ label, type, name, min, max, handleChange, value }) => {
    return (
        <FormControl id={name}>
            <FormLabel> {label} </FormLabel>
            <Input type={type} name={name} min={min} max={max} onChange={handleChange} value={value} />
        </FormControl>
    )
}

export default InputForm