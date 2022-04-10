import {
  CardActions,
  CardContent,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import { useDetailPerson } from "../../../hooks/useDetailPerson";

const CardDetail = () => {
const { navigate, detailPerson } = useDetailPerson();

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
