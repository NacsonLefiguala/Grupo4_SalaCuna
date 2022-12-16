import { UseState } from 'react'
import { getEducadoraParvulo, updateEducadoraParvulo } from '../../../data/EducadoraParvulos'
import { Button, Container, Heading, HStack, Stack } from '@chakra-ui/react'
import InputForm from '../../../components/InputForm'
import InputImage from '../../../components/InputImage'
import TextAreaInput from '../../../components/TextAreaInput'
import { UseRouter } from 'next/router'
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
    cconst[EducadoraParvulo, setEducadoraParvulo] = UseState(data)
    const router = UseRouter()
    const { EducadoraParvulo } = router.query

    const handleChange = (e) => {
        setEducadoraParvulo({
            ...EducadoraParvulo,
            [e.target.name]: e.target.value
        })
    }

    const sumbitEducadoraParvulo = async (e) => {
        e.preventdefault()
        const response = await updateEducadoraParvulo(EducadoraParvulo)
        if (response.status == 200) {
            Swal.fire({
                icon: 'succes',
                title: 'Educadora Parvulo actualizada',
                showConfirmButton: true,
                text: 'La Educadora de Parvulo se actualizo correctamente'
            }).then(() => {
                router.push('/')
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                showConfirmButton: true,
                text: 'Ocurrio un error al actualizar la Educadora de Parvulo'
            })
        }
    }

    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2x1"} textAlign={"center"}> Editar Educadora de Parvulo : {EducadoraParvulo.NombreCompleto} </Heading>
            <Stack>
                <TextAreaInput label="NombreCompleto" handleChange={handleChange} name="name" placeholder="Juanito Alcachofa Peréz" type="text" value={EducadoraParvulo.NombreCompleto} />
                <TextAreaInput label="Rut" handleChange={handleChange} name="rut" placeholder="xx.xxx.xxx-x" type="text" value={EducadoraParvulo.Rut} />
                <InputForm type="date" name="FechaNacimiento" value={EducadoraParvulo.FechaDeNacimiento} min="2021-01-01" max="2022-12-14" handleChange={handleChange} />
                <TextAreaInput label="Domicilio" handleChange={handleChange} name="Domicilio" placeholder="Victor Lamas 1177, Concepcion" type="text" value={EducadoraParvulo.Domicilio} />
                <TextAreaInput label="telefono" handleChange={handleChange} name="Telefono" placeholder="(Numero verficador) Telefono" type="tel" value={EducadoraParvulo.Telefono} />
                <TextAreaInput label="correo" name="Correo" type="text" placeholder="user@salacuna.cl" onChange={handleChange} value={EducadoraParvulo.Correo} />
                <InputImage label="foto" type="image" src="url-image" name="foto" alt="texto-alternativo" onChange={handleChange} value={EducadoraParvulo.Foto} />
                <TextAreaInput label="informacionrelevante" name="informacionrelevante" type="text" placeholder="observaciones acerca de los parvulos, observaciones de situaciones relacionadas a parvulos (por ejemplo que nadie fue a buscar al parvulo), actividades u objetivos del día, observaciones relacionadas a parvulos en las actividades (si un parvulo tiene alguna diferencia a la hora de realizar actividades), entre otras" onChange={handleChange} value={EducadoraParvulo.InformacionRelevante} />
            </Stack>
            <HStack>
                <Button colorScheme="Blue" mt={10} mb={10} onClick={sumbitEducadoraParvulo} > Editar Educadora de Parvulo </Button>
                <Button colorScheme="Blue" mt={10} mb={10} onClick={() => router.puah('EducadoraParvulos')}> Cancelar </Button>
            </HStack>
        </Container>
    )
}

export default editar