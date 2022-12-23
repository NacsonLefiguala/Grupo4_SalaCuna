import { useState } from 'react'
import { Button, Container, Heading, Stack, Input, FormControl, FormLabel } from '@chakra-ui/react'
import { getEducadoraParvulos } from '../data/EducadoraParvulos'
import { useRouter } from 'next/router'
import { login } from '../data/user'

const index = () => {
  const [rut, setRut] = useState('')
  const router = useRouter()

  const handleChange = (e) => {
    setRut(e.target.value)
  }

  const onSumbit = async (e) => {
    e.preventDefault()
    const response = await login(rut)
    if (response.status == 200) {
      localStorage.setItem('token', rut)
      router.push('./EducadoraParvulos')
    }
  }

  return (
    <>
      <Container maxW="container.xl" centerContent>
        <Heading as="h1" size="2x1" textAlign="center" mt="10"> Que usuario ingresara </Heading>
        <Stack my={5}>
          <FormControl>
            <FormLabel> Rut del usuario </FormLabel>
            <Input onChange={handleChange} />
          </FormControl>
          <Button colorScheme="green" onClick={onSumbit}> Ingresar </Button>
        </Stack>
      </Container>
    </>
  )
}

export default index
