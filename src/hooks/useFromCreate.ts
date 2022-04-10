import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { createPersonsService } from "../services/infrastructure/servicePersons";

const validationSchema = yup.object({
  name: yup.string().required("Nombre es requerido"),
  lastName: yup.string().required("Apellido es requerido"),
  age: yup
    .number()
    .positive()
    .min(1, "Edad minima 1")
    .max(200, "Edad maxima 200")
    .required("Edad es requerida")
    .integer(),
  dateBirth: yup.date().max(new Date(), "Fecha maxima es hoy"),
});

export const useFormCreate = () => {
  
  //hooks
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      age: "",
      dateBirth: new Date(),
    },

    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("new body : ", values);
      createRegisterPerson(values);
    },
  });

  const createRegisterPerson = async (values: any) => {
    try {
      const response = await createPersonsService(values);
      console.log("respuesta de la creacion de la persona : ", response);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return { formik };
};
