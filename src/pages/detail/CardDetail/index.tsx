import {
  CardActions,
  CardContent,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Persons } from "../../../models/Persons.models";
import { detailsPersonsService } from "../../../services/infrastructure/servicePersons";

const CardDetail = () => {
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

  return (
    <Paper elevation={3}>
      <CardContent>
        <Typography gutterBottom variant="h3" component="h3">
          {""}
        </Typography>
        <Typography variant="subtitle1">
          Codigo: <strong> {detailPerson?.id || "-"}</strong>
        </Typography>
        <Typography variant="subtitle1">
          Nombre: <strong> {detailPerson?.nombre || "-"}</strong>
        </Typography>
        <Typography variant="subtitle1">
          Apellido: <strong> {detailPerson?.apellido || "-"}</strong>
        </Typography>
        <Typography variant="subtitle1">
          Edad: <strong> {detailPerson?.edad || "-"}</strong>
        </Typography>
        <Typography variant="subtitle1">
          Fecha Nacimiento: <strong> {detailPerson?.fechaNacimiento || "-"}</strong>
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => navigate("/")} size="small">
          Atrás
        </Button>
      </CardActions>
    </Paper>
  );
};

export default CardDetail;
