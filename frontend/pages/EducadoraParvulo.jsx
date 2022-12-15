import { useState } from 'react'
import { Button, Container, Heading, HStack, Input, Stack, FormControl, FormLabel } from '@chakra-ui/react'
import { createEducadoraParvulo } from '../data/EducadoraParvulos'
const EducadoraParvulo = () => {
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
                <FormControl id="NombreCompleto">
                    <FormLabel> Nombre Completo </FormLabel>
                    <Input name="nombreCompleto" type="text" placeholder="Juanito Alcachofa Peréz" onChange={handleChange} />
                </FormControl>
                <FormControl id="Rut">
                    <FormLabel> RUT </FormLabel>
                    <Input name="rut" type="text" placeholder="xx.xxx.xxx-x" onChange={handleChange} />
                </FormControl>
                <FormControl id="FechaDeNacimiento">
                    <FormLabel> Fecha Nacimiento </FormLabel>
                    <Input type="date" name="FechaNacimiento" value="2022-12-14" min="2021-01-01" max="2022-12-14" onChange={handleChange} />
                </FormControl>
                <FormControl id="Domicilio">
                    <FormLabel> Domicilio </FormLabel>
                    <Input name="Domicilio" type="text" placeholder="Victor Lamas 1177, Concepcion" onChange={handleChange} />
                </FormControl>
                <FormControl id="Telefono">
                    <FormLabel> Telefono </FormLabel>
                    <Input type="tel" name="telefono" placeholder="(Numero verficador) Telefono" onChange={handleChange} />
                </FormControl>
                <FormControl id="Correo">
                    <FormLabel> Correo </FormLabel>
                    <Input name="Correo" type="text" placeholder="user@salacuna.cl" onChange={handleChange} />
                </FormControl>
                <FormControl id="Foto">
                    <FormLabel> Foto </FormLabel>
                    <Input type="image" src="url-image" name="foto" alt="texto-alternativo" onChange={handleChange} />
                </FormControl>
            </Stack>
            <Button colorScheme="Blue" mt={10} mb={10} onClick={sumbitEducadoraParvulo} > Crear </Button>
        </Container>
    )
}

export default EducadoraParvulo