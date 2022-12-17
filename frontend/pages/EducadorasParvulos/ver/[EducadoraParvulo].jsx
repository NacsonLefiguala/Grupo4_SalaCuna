import { useState } from 'react'
import { getEducadoraParvulo } from '../../../data/EducadoraParvulos'
import { Button, Container, Heading, HStack, Stack } from '@chakra-ui/react'
import { UseRouter } from 'next/router'
import ShowInfo from '../../../components/ShowInfo'

export const getServerSideProps = async (context) => {
    try {
        const response = await getEducadoraParvulo(context.query.EducadoraParvulo, localStorage.getItem('token'))
        if (response.status == 200) {
            return {
                props: {
                    data: response.data
                }
            }
        } else {
            return {
                redirect: {
                    destination: "/",
                }
            }
        }
    } catch (error) {
        return {
            redirect: {
                destination: "/",
            }
        }
    }

}

const editar = ({ data }) => {
    const [EducadoraParvulo] = UseState(data)
    const router = UseRouter()

    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}> Educadora Parvulo: {EducadoraParvulo.NombreCompleto}</Heading>
            <Stack my={10}>
                <ShowInfo value={EducadoraParvulo.NombreCompleto} color={"green.300"} tag={"NombreVompleto"} />
                <ShowInfo value={EducadoraParvulo.Rut} color={"blue.300"} tag={"Rut"} />
                <ShowInfo value={EducadoraParvulo.FechaNacimiento} color={"blue.300"} tag={"Rut"} />
                <ShowInfo value={EducadoraParvulo.Domicilio} color={"blue.300"} tag={"Domicilio"} />
                <ShowInfo value={EducadoraParvulo.Telefono} color={"blue.300"} tag={"Telefono"} />
                <ShowInfo value={EducadoraParvulo.Correo} color={"blue.300"} tag={"Correo"} />
                <ShowInfo value={EducadoraParvulo.Foto} color={"blue.300"} tag={"Foto"} />
                <ShowInfo value={EducadoraParvulo.InformacionRelevante} color={"blue.300"} tag={"InformacionRelevante"} />
            </Stack>
            <HStack >
                <Button w={"full"} colorScheme="blue" mt={10} mb={10}> Editar </Button>
                <Button w={"full"} colorScheme="red" mt={10} mb={10}> Eliminar </Button>
                <Button w={"full"} colorScheme="green" mt={10} mb={10} onClick={() => router.push("/")}> Volver </Button>
            </HStack>
        </Container>
    )
}

export default editar