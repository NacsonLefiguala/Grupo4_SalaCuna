import React from 'react'
import { Button, Stack, Input } from '@chakra-ui/react'

const InputStack = () => {
    return (
        <Stack>
            <Input placeholder="Full Name" />
            <Button colorScheme="teal" size="sm"></Button>
        </Stack>
    )
}

export default Input