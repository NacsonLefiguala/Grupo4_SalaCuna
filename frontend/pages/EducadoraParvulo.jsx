import { useState } from 'react'
import { Button, Container, Heading, Stack } from '@chakra-ui/react'
import { createEducadoraParvulo } from '../data/EducadoraParvulos'
import TextAreaInput from '../components/TextAreaInput'
import InputForm from '../components/InputForm'
import InputImage from '../components/InputImage'
import { useRouter } from 'next/router'

const EducadoraParvulo = () => {
    const [EducadoraParvulo, setEducadoraParvulos] = useState([{
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

    const handleChange = (e) => {
        setEducadoraParvulos({
            ...EducadoraParvulo,
            [e.target.name]: e.target.value
        })
    }

    const sumbitEducadoraParvulo = (e) => {
        e.preventdefault()
        createEducadoraParvulo(EducadoraParvulo).then(res => {
            console.log(res.data.name)
        })
    }

    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2x1"} textAlign={"center"}> Crear Educadora de Parvulo </Heading>
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
                <Button colorScheme="Blue" mt={10} mb={10} onClick={sumbitEducadoraParvulo} > Crear </Button>
                <Button colorScheme="Blue" mt={10} mb={10} onClick={() => router.puah('EducadoraParvulos')}> Cancelar </Button>
            </HStack>
        </Container>
    )
}

export default EducadoraParvulo