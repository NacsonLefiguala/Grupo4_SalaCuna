import { useState } from 'react'
import { Button, Container, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { createEducadoraParvulo } from '../../data/EducadoraParvulos'
import TextAreaInput from '../../components/TextAreaInput'
import InputForm from '../../components/InputForm'
import InputImage from '../../components/InputImage'
import { useRouter } from 'next/router'
import { Formik } from 'formik'
import EducadoraParvuloValidation from '../../validations/EducadoraParvuloValidation'

const EducadoradeParvulo = () => {

    const [EducadoraParvulo, setEducadoraParvulo] = useState({
        NombreCompleto: '',
        Rut: '',
        FechaDeNacimiento: '',
        Domicilio: '',
        Telefono: '',
        Correo: '',
        Foto: '',
        InformacionRelevante: ''
    })
    const router = useRouter()


    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Crear Educadora de Parvulo</Heading>
            <Formik
                initialValues={EducadoraParvulo}
                validationSchema={EducadoraParvuloValidation}
                onSubmit={(values) => {
                    createEducadoraParvulo(values).then(res => {
                        router.push("/EducadorasParvulos")
                    })
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit
                }) => (
                    <form onSubmit={handleSubmit} id="form">
                        <Stack spacing={4} mt={10}>
                            <TextAreaInput label="Nombre Completo" handleChange={handleChange} name="name" placeholder="Juanito Alcachofa Peréz" type="text" value={values.NombreCompleto} handleBlur={handleBlur} />
                            {touched.NombreCompleto && errors.NombreCompleto && (
                                <Text color={"red"}>{errors.NombreCompleto}</Text>
                            )}
                            <HStack>
                                <TextAreaInput label="Rut" handleChange={handleChange} name="rut" placeholder="xx.xxx.xxx-x" type="text" value={values.Rut} handleBlur={handleBlur} />
                                <InputForm label="Fecha de Nacimiento" type="date" name="Fecha de Nacimiento" value={values.FechaDeNacimiento} min="2021-01-01" max="2022-12-14" handleChange={handleChange} handleBlur={handleBlur} />
                            </HStack>
                            <HStack justify={"space-between"}>
                                {touched.Rut && errors.Rut && (
                                    <Text color={"red"}>{errors.Rut}</Text>
                                )}
                                {touched.FechaDeNacimiento && errors.FechaDeNacimiento && (
                                    <Text color={"red"}>{errors.FechaDeNacimiento}</Text>
                                )}
                            </HStack>
                            <TextAreaInput label="Domicilio" handleChange={handleChange} name="Domicilio" placeholder="Victor Lamas 1177, Concepcion" type="text" value={values.Domicilio} handleBlur={handleBlur} />
                            {touched.Domicilio && errors.Domicilio && (
                                <Text color={"red"}>{errors.Domicilio}</Text>
                            )}
                            <TextAreaInput label="Telefono" handleChange={handleChange} name="Telefono" placeholder="(Numero verficador) Telefono" type="tel" value={values.Telefono} handleBlur={handleBlur} />
                            {touched.Telefono && errors.Telefono && (
                                <Text color={"red"}>{errors.Telefono}</Text>
                            )}
                            <TextAreaInput label="Correo" name="Correo" type="text" placeholder="user@salacuna.cl" onChange={handleChange} value={values.Correo} handleBlur={handleBlur} />
                            {touched.Correo && errors.Correo && (
                                <Text color={"red"}>{errors.Correo}</Text>
                            )}
                            <InputImage label="Foto" type="image" src="url-image" name="foto" alt="texto-alternativo" onChange={handleChange} value={values.Foto} handleBlur={handleBlur} />
                            {touched.Foto && errors.Foto && (
                                <Text color={"red"}>{errors.Foto}</Text>
                            )}
                            <TextAreaInput label="informacion Relevante" name="informacionrelevante" type="text" placeholder="observacion sobre parvulos,situaciones de parvulos, actividades u objetvos, entre otras" onChange={handleChange} value={values.InformacionRelevante} handleBlur={handleBlur} />
                            {touched.InformacionRelevante && errors.InformacionRelevante && (
                                <Text color={"red"}>{errors.InformacionRelevante}</Text>
                            )}
                        </Stack>
                        <HStack>
                            <Button colorScheme="blue" mt={10} mb={10} type={"submit"} >Crear</Button>
                            <Button colorScheme="red" mt={10} mb={10} onClick={() => router.push('/EducadorasParvulos')}>Cancelar</Button>
                        </HStack>
                    </form>
                )}
            </Formik>
        </Container >
    )
}

export default EducadoradeParvulo