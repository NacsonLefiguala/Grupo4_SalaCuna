import React from 'react'
import { FormLabel, FormControl, Input } from '@chakra-ui/react'

const InputImage = ({ label, name, src, alt, handleChange, value }) => {
    return (
        <FormControl id={name}>
            <FormLabel> {label} </FormLabel>
            <Input type={type} src={src} name={name} alt={alt} onChange={handleChange} value={value} />
        </FormControl>
    )
}

export default InputImage