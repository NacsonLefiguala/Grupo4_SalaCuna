import React from 'react'
import { FormControl, FormLabel, Input } from '@chakra-ui/react'

const TextAreaInput = ({ name, placeholder, handleChange, label, type, value }) => {
  return (
    <FormControl id={name}>
      <FormLabel> {label} </FormLabel>
      <Input name={name} type={type} placeholder={placeholder} onChange={handleChange} value={value} />
    </FormControl>
  )
}

export default TextAreaInput