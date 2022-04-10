import { Persons } from "../models/Persons.models";

export const adapterListPerson = (
  listPersons: any[] | undefined
): Persons[] => {
  if (listPersons) {
    return listPersons?.map((person) => {
      return {
        id: person?.id,
        nombre: person?.name,
        apellido: person?.lastName,
        fechaNacimiento: person?.dateBirth,
        edad: person?.age,
      };
    });
  } else {
    return [];
  }
};

export const adapterPerson = (person: any): Persons => {
  return {
    id: person?.id || "-",
    nombre: person?.name || "-",
    apellido: person?.lastName || "-",
    edad: person?.age || "-",
    fechaNacimiento: person?.dateBirth || "-",
  };
};
