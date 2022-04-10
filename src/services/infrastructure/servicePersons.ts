import { database } from "../firebase/config";
import {
  doc,
  getDocs,
  addDoc,
  getDoc,
} from "firebase/firestore/lite";
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

// //Edit a todo from database
// export const editTodoService = async (todo: TODO) => {
//   const todoEditResponse = await setDoc(doc(db, "todos", todo.id!), {
//     name: todo.name,
//   });
//   return todoEditResponse;
// };

// // Delete un todo from database
// export const deleteTodoService = async (id: string) => {
//   await deleteDoc(doc(db, "todos", id));
// };

// TODO
// falta ver la forma de obtener el detalle de una item.
