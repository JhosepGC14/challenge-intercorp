import { Persons } from "../models/Persons.models";

export const adapterListAges = (array: Persons[]): number[] => {
  return array.map((item) => {
    return Number(item.edad);
  });
};
