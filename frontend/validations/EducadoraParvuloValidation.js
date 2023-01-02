import * as yup from 'yup';

const EducadoraParvuloValidation = yup.object({
    NombreCompleto: yup.string()
        .min(3, "Debe contener minimo 3 caracteres")
        .max(30, "Debe contener maximo 30 caracteres")
        //  .required("El nombre es obligatorio")
        .matches(/^[a-zA-Z0-9 ]*$/, "El nombre no puede contener caracteres especiales"),
    Rut: yup.string()
        .min(9, "Debe contener minimo 9 caracteres")
        .max(12, "Debe contener maximo 12 caracteres"),
    //  .required("El rut es obligatorio"),
   // FechaDeNacimiento: yup.date()
   // .min(dd/mm/yyyy,"Minimo que tenga 20 años")
   // .required("La fecha de nacimiento es requerida"),
    Domicilio: yup.string()
        .min(10, "Debe contener minimo 10 caracteres")
        .max(50, "Debe contener maximo 50 caracteres"),
    //   .required("la direccion de domicilio es obligatoria"),
    Telefono: yup.string()
        .min(8, "Debe contener minimo 8 caracteres")
        .max(9, "Debe contener maximo 9 caracteres"),
    // .required("Telefono es obligatorio"),
    Correo: yup.string()
        .min(20, "Debe contener minimo 20 caracteres")
        .max(30, "Debe contener maximo 30 caracteres"),
    // .required("El correo es obligatorio"),
    Foto: yup.string()
        .max(50, "Debe contener maximo 50 caracteres"),
    // .required("La foto es obligatoria"), 
    InformacionRelevante: yup.string()
        .min(20, "Debe contener minimo 20 caracteres")
        .max(100, "Debe contener maximo 100 caracteres")
    // .required("La descripcion es obligatoria")
})

export default EducadoraParvuloValidation