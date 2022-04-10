import { Persons } from "../models/Persons.models";

export const getAverageAges = (array: Persons[]): number => {
  let average = array.reduce((acumulator, current) => {
      return acumulator + Number(current.edad);
    }, 0) / array.length;

  return average;
};
