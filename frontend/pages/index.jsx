import { useState } from 'react'
import { Button, Container, Heading, Input, Stack, FormControl } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { login } from '../data/user'

const index = () => {

  const [rut, setRut] = useState('')
  const router = useRouter()

  const handleChange = (e) => {
    setRut(e.target.value)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const response = await login(rut)
    if (response.status === 200) {
      localStorage.setItem('token', rut)
      router.push('./EducadorasParvulos')
    }
  }

  return (
    <>
      <Container maxW="container.xl" centerContent>
        <Heading as="h1" size="2xl" textAlign="center" mt="10"> Ingrese rut </Heading>
        <Stack my={5}>
          <FormControl>
            <Input onChange={handleChange} />
          </FormControl>
          <Button colorScheme={"blue"} onClick={onSubmit} >Ingresar</Button>
        </Stack>
      </Container>
    </>

  )
}

export default index