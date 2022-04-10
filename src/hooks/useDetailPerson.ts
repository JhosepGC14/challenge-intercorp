import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Persons } from "../models/Persons.models";
import { detailsPersonsService } from "../services/infrastructure/servicePersons";

export const useDetailPerson = () => {

    const navigate = useNavigate();
    const params = useParams();
    const [detailPerson, setDetailPerson] = useState<Persons | null>(null);

    const getDetailPerson = async () => {
      try {
        const responseDetail = await detailsPersonsService(params.personId);
        console.log("responseDetail : ", responseDetail);
        setDetailPerson(responseDetail);
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      if (params.personId) {
        getDetailPerson();
      }
    }, [params.personId]);

  return {
    navigate,
detailPerson
  }
}

