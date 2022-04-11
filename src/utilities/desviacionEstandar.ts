import { adapterListAges } from "../adapters/list-ages.adapter";
import { Persons } from "../models/Persons.models";

//SACAR LA DESVIACION ESTANDAR
export const standarDeviation = (listPersons: Persons[]) => {
  // Creating the mean with Array.reduce
  let arr = adapterListAges(listPersons);
  let mean =
    arr.reduce((acc, curr) => {
      return acc + curr;
    }, 0) / arr.length;

  // Assigning (value - mean) ^ 2 to every array item
  arr = arr.map((k) => {
    return (k - mean) ** 2;
  });

  // Calculating the sum of updated array
  let sum = arr.reduce((acc, curr) => acc + curr, 0);

  // Calculating the variance
  let variance = sum / arr.length;

  // Returning the Standered deviation
  return Math.sqrt(variance);
};