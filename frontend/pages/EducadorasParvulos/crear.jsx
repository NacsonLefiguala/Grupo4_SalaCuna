import { useState } from 'react'
import { Button, Container, Heading, Stack, HStack } from '@chakra-ui/react'
import { createEducadoraParvulo } from '../../data/EducadoraParvulos'
import TextAreaInput from '../../components/TextAreaInput'
import InputForm from '../../components/InputForm'
import InputImage from '../../components/InputImage'
import { useRouter } from 'next/router' 

const EducadoraParvulos = () => {
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
                <TextAreaInput label="Nombre Completo" handleChange={handleChange} name="name" placeholder="Juanito Alcachofa Peréz" type="text" value={EducadoraParvulo.NombreCompleto} />
                <HStack>
                    <TextAreaInput label="Rut" handleChange={handleChange} name="rut" placeholder="xx.xxx.xxx-x" type="text" value={EducadoraParvulo.Rut} />
                    <InputForm label="Fecha de Nacimiento" type="date" name="Fecha de Nacimiento" value={EducadoraParvulo.FechaDeNacimiento} min="2021-01-01" max="2022-12-14" handleChange={handleChange} />
                </HStack>
                <TextAreaInput label="Domicilio" handleChange={handleChange} name="Domicilio" placeholder="Victor Lamas 1177, Concepcion" type="text" value={EducadoraParvulo.Domicilio} />
                <TextAreaInput label="Telefono" handleChange={handleChange} name="Telefono" placeholder="(Numero verficador) Telefono" type="tel" value={EducadoraParvulo.Telefono} />
                <TextAreaInput label="Correo" name="Correo" type="text" placeholder="user@salacuna.cl" onChange={handleChange} value={EducadoraParvulo.Correo} />
                <InputImage label="Foto" type="image" src="url-image" name="foto" alt="texto-alternativo" onChange={handleChange} value={EducadoraParvulo.Foto} />
                <TextAreaInput label="informacion Relevante" name="informacionrelevante" type="text" placeholder="observacion sobre parvulos,situaciones de parvulos, actividades u objetvos, entre otras" onChange={handleChange} value={EducadoraParvulo.InformacionRelevante} />
            </Stack>
            <HStack>
                <Button colorScheme="red" mt={10} mb={10} onClick={() => router.push('/')}> Cancelar </Button>
                <Button colorScheme="blue" mt={10} mb={10} onClick={sumbitEducadoraParvulo} > Crear </Button>
            </HStack>
        </Container>
    )
}

export default EducadoraParvulos