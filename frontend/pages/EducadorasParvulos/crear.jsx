import { useState } from 'react'
import { Button, Container, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { createEducadoraParvulo } from '../../data/EducadoraParvulos'
import TextareaInput from '../../components/TextareaInput'
import InputForm from '../../components/InputForm'
import InputImage from '../../components/InputImage'
import { useRouter } from 'next/router'
import { Formik } from 'formik'
import EducadoraParvuloValidation from '../../validations/EducadoraParvuloValidation'

const EducadoraParvulos = () => {

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
                            <TextareaInput label="Nombre Completo" handleChange={handleChange} name="NombreCompleto" placeholder="Juanito Alcachofa Peréz" type="text" value={values.NombreCompleto} handleBlur={handleBlur} />
                            {touched.NombreCompleto && errors.NombreCompleto && (
                                <Text color={"red"}>{errors.NombreCompleto}</Text>
                            )}
                            <HStack>
                                <TextareaInput label="Rut" handleChange={handleChange} name="Rut" placeholder="xx.xxx.xxx-x" type="text" value={values.Rut} handleBlur={handleBlur} />
                                {touched.Rut && errors.Rut && (
                                <Text color={"red"}>{errors.Rut}</Text>
                            )}
                            <InputForm label="Fecha de nacimiento" handleChange={handleChange} name="FechaDeNacimiento" placeholder="xx/xx/xxxx" type="date" value={values.FechaDeNacimiento} min="2021-01-01" max="1900-12-14" handleBlur={handleBlur} />
                            {touched.FechaDeNacimiento && errors.FechaDeNacimiento && (
                                <Text color={"red"}>{errors.FechaDeNacimiento}</Text>
                            )}

                            </HStack>
                            <TextareaInput label="Domicilio" handleChange={handleChange} name="Domicilio" placeholder="Victor Lamas 1177, Concepcion" type="text" value={values.Domicilio} handleBlur={handleBlur} />
                            {touched.Domicilio && errors.Domicilio && (
                                <Text color={"red"}>{errors.Domicilio}</Text>
                            )}
                            <TextareaInput label="Telefono" handleChange={handleChange} name="Telefono" placeholder="(Numero verficador) Telefono" type="text" value={values.Telefono} handleBlur={handleBlur} />
                            {touched.Telefono && errors.Telefono && (
                                <Text color={"red"}>{errors.Telefono}</Text>
                            )}
                        
                            <TextareaInput label="correo" handleChange={handleChange} name="correo" placeholder="(user@salacuna.cl) Telefono" type="text" value={values.correo} handleBlur={handleBlur} />
                            {touched.correo && errors.correo && (
                                <Text color={"red"}>{errors.correo}</Text>
                            )}
                            
                            <InputImage label="Foto" type="text"  name="Foto" handleChange={handleChange} value={values.Foto} handleBlur={handleBlur} />
                            {touched.Foto && errors.Foto && ( 
                                <Text color={"red"}>{errors.Foto}</Text>
                            )}
                            <TextareaInput label="informacion Relevante" name="InformacionRelevante" type="text" placeholder="observacion sobre parvulos,situaciones de parvulos, actividades u objetvos, entre otras" handleChange={handleChange} value={values.InformacionRelevante} handleBlur={handleBlur} />
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

export default EducadoraParvulos
