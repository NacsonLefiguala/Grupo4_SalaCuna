import { useState } from 'react'
import { getEducadoraParvulo, updateEducadoraParvulo } from '../../../data/EducadoraParvulos'
import { Button, Container, Heading, HStack, Stack } from '@chakra-ui/react'
import InputForm from '../../../components/InputForm'
import InputImage from '../../../components/InputImage'
import TextareaInput from '../../../components/TextareaInput'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

export const getServerSideProps = async (context) => {
    const response = await getEducadoraParvulo(context.query.EducadoraParvulo)
    return {
        props: {
            data: response.data
        }
    }
}

const editar = ({ data }) => {
    const [product, setEducadoraParvulo] = useState(data)
    const router = useRouter()
    const { EducadoraParvulo } = router.query

    const handleChange = (e) => {
        setEducadoraParvulo({
            ...product,
            [e.target.name]: e.target.value
        })

    }

    const submitEducadoraParvulo = async (e) => {
        e.preventDefault()
        const response = await updateEducadoraParvulo(producto, product)
        if (response.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Educadora de Parvulo actualizado',
                showConfirmButton: true,
                text: 'La Educadora de Parvulo se actualizó correctamente'
            }).then(() => {
                router.push('/')
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                showConfirmButton: true,
                text: 'Ocurrió un error al actualizar la Educadora de Parvulo'
            })
        }
    }
    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Editar Educadora de Parvulo: {EducadoraParvulo.NombreCompleto}</Heading>
            <Stack spacing={4} mt={10}>
                <TextareaInput label="NombreCompleto" handleChange={handleChange} name="NombreCompleto" placeholder="Juanito Alcachofa Peréz" type="text" value={EducadoraParvulo.NombreCompleto} />
                <HStack>
                    <TextareaInput label="Rut" handleChange={handleChange} name="rut" placeholder="xx.xxx.xxx-x" type="text" value={EducadoraParvulo.Rut} />
                    <InputForm type="date" name="FechaDeNacimiento" value={EducadoraParvulo.FechaDeNacimiento} min="2021-01-01" max="1900-12-14" handleChange={handleChange} />
                </HStack>
                <TextareaInput label="Domicilio" handleChange={handleChange} name="Domicilio" placeholder="Victor Lamas 1177, Concepcion" type="text" value={EducadoraParvulo.Domicilio} />
                <TextareaInput label="telefono" handleChange={handleChange} name="Telefono" placeholder="(Numero verficador) Telefono" type="text" value={EducadoraParvulo.Telefono} />
                <TextareaInput label="correo" name="Correo" type="text" placeholder="user@salacuna.cl" onChange={handleChange} value={EducadoraParvulo.Correo} />
                <InputImage label="foto" type="image" src="url-image" name="foto" alt="texto-alternativo" onChange={handleChange} value={EducadoraParvulo.Foto} />
                <TextareaInput label="informacionrelevante" name="informacionrelevante" type="text" placeholder="observacion sobre parvulos,situaciones de parvulos, actividades u objetvos, entre otras" onChange={handleChange} value={EducadoraParvulo.InformacionRelevante} />
            </Stack>
            <HStack>
                <Button colorScheme="blue" mt={10} mb={10} onClick={submitEducadoraParvulo}>Confirmar</Button>
                <Button colorScheme="red" mt={10} mb={10} onClick={() => router.push('/')}>Cancelar</Button>
            </HStack>
        </Container>
    )
}

export default editar