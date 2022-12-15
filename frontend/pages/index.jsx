import { useState, useEffect } from 'react'
import InputStack from '../components/InputStack'
import { Button, Container, Heading, HStack, Input, Stack, Table, Thead, Tr, Td, Th, Tbody } from '@chakra-ui/react'
import { getEducadoraParvulos } from '../data/EducadoraParvulos'
import { useRouter } from 'next/router'

const index = () => {
  const [EducadoraParvulos, setEducadoraParvulos] = useState([{
    NombreCompleto: '',
    Rut: '',
    FechaDeNacimiento: '',
    Domicilio: '',
    Telefono: '',
    Correo: '',
    Foto: '',
    InformacionRelevante: ''
  }])

  const router = useRouter()

  const contentTable = () => {
    return EducadoraParvulos.map(EducadoraParvulo => {
      return (
        <Tr key={EducadoraParvulo._id}>
          <Td>{EducadoraParvulo.NombreCompleto}</Td>
          <Td>{EducadoraParvulo.Rut}</Td>
          <Td>{EducadoraParvulo.FechaDeNacimiento}</Td>
          <Td>{EducadoraParvulo.Domicilio}</Td>
          <Td>{EducadoraParvulo.Telefono}</Td>
          <Td>{EducadoraParvulo.Correo}</Td>
          <Td>{EducadoraParvulo.Foto}</Td>
          <Td>{EducadoraParvulo.InformacionRelevante}</Td>
          <Td><Button onClick={() => router.push(`./EducadoraParvulos/${EducadoraParvulo.id}`)}> Editar </Button></Td>
        </Tr>
      )
    })
  }

  useEffect(() => {
    getEducadoraParvulos().then(res => {
      setEducadoraParvulos(res.data)
    })
    console.log(EducadoraParvulos)
  }, [])

  return (
    <>
      <Container maxW="container.xl">
        <Heading as="h1" size="2x1" textAlign="center" mt="10"> Lista Educadoras de Parvulo </Heading>
        <Button colorScheme="blue" mt="10" mb="10" onClick={() => router.push('./EducadoraParvulo')}> Agregar Educadora Parvulo </Button>
        <Stack spacing={4} mt="10">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Td> NombreCompleto </Td>
                <Td> Rut </Td>
                <Td> FechaDeNacimiento </Td>
                <Td> Domicilio </Td>
                <Td> Telefono </Td>
                <Td> Correo </Td>
                <Td> Foto </Td>
                <Td> InformacionRelevante </Td>
                <Td> Acciones </Td>
              </Tr>
            </Thead>
            <Tbody>
              {contentTable()}
            </Tbody>
          </Table>
        </Stack>
      </Container>
    </>
  )
}

export default index
