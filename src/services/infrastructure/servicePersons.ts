import { database } from "../firebase/config";
import { getDocs, addDoc } from "firebase/firestore/lite";
import { adapterListPerson, adapterPerson } from "../../adapters/list-persons.adapter";
import { Persons } from '../../models/Persons.models';

// Get a list of todos from database
export const getListPersonsService = async () : Promise<Persons[]> =>  {
  const listPersonsSnapshot = await getDocs(database);
  const listPersons = listPersonsSnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
  const newListPersons = adapterListPerson(listPersons);
  return newListPersons;
};

// Create persons in database
export const createPersonsService = async (person: any) => {
  const personCreateResponse = await addDoc(database, person);
  return personCreateResponse;
};

// Get details persons in database
export const detailsPersonsService = async (personId?: string): Promise<Persons> => {
  const listPersonsSnapshot = await getDocs(database);
  const listPersons = listPersonsSnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
  let detailPerson = listPersons.find((item)=> item.id === personId);

  return adapterPerson(detailPerson);
};