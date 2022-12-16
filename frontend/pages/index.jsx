import { useState, UseEffect } from 'react'
import { Button, Container, Heading, HStack, Stack, Table, Thead, Tr, Td, Tbody } from '@chakra-ui/react'
import { getEducadoraParvulos } from '../data/EducadoraParvulos'
import { UseRouter } from 'next/router'

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

  const router = UseRouter()

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
          <Td>
            <HStack>
              <Button colorScheme={'orange'} onClick={() => router.push(`./EducadoraParvulos/ver/${EducadoraParvulo.id}`)}> Ver </Button>
              <Button colorScheme={'teal'} onClick={() => router.push(`./EducadoraParvulos/actualizar/${EducadoraParvulo.id}`)}> Editar </Button>
            </HStack>
          </Td>
        </Tr>
      )
    })
  }

  UseEffect(() => {
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
