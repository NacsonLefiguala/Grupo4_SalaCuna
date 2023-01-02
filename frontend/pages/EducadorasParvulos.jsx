import { useState, useEffect } from 'react'
import { Button, Container, Heading, HStack, Stack, Table, Thead, Td, Tbody, Tr } from '@chakra-ui/react'
import { getEducadorasParvulos } from '../data/EducadoraParvulos'
import { useRouter } from 'next/router'

const EducadorasParvulos = () => {

    const [EducadoraParvulos, setEducadorasParvulos] = useState([{
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
                    <Td>
                        <HStack>
                            <Button colorScheme={"orange"} onClick={() => router.push(`./EducadoraParvulo/ver/${EducadoraParvulo._id}`)}>Ver</Button>
                            <Button colorScheme={"teal"} onClick={() => router.push(`./EducadoraParvulo/actualizar/${EducadoraParvulo._id}`)}>Editar</Button>
                        </HStack>
                    </Td>
                </Tr>
            )
        })
    }

    useEffect(() => {
        getEducadorasParvulos().then(res => {
            setEducadorasParvulos(res.data)
        })
    }, [])


    return (
        <>
            <Container maxW="container.xl">
                <Heading as="h1" size="2xl" textAlign="center" mt="10"> Listado de Educadoras de Parvulo </Heading>
                <Button colorScheme="blue" mt="10" mb="10" onClick={() => router.push('/EducadorasParvulos/crear')}>Agregar Educadora Parvulo</Button>
                <Stack spacing={4} mt="10">
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Td>NombreCompleto</Td>
                                <Td>Rut</Td>
                                <Td>FechaDeNacimiento</Td>
                                <Td>Domicilio</Td>
                                <Td>Telefono</Td>
                                <Td>Correo</Td>
                                <Td>Foto</Td>
                                <Td>InformacionRelevante</Td>
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

export default EducadorasParvulos