//components
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Persons } from "../../../../models/Persons.models";
import { getListPersonsService } from "../../../../services/infrastructure/servicePersons";
import { getAverageAges } from "../../../../utilities/promedio";
import { standarDeviation } from "../../../../utilities/desviacionEstandar";
import UsersCharts from "../../../../components/UsersCharts";

const ListPersons = () => {
  const navigate = useNavigate();
  const [listPersons, setListPersons] = useState<Persons[]>([]);
  const [average, setAverage] = useState(0);
  const [deviationStandar, setDeviationStandar] = useState(0);

  const getAllListPersons = async () => {
    try {
      const responseListPersons = await getListPersonsService();
      const averageMount = getAverageAges(responseListPersons);
      const deviationMount = standarDeviation(responseListPersons);
      setListPersons(responseListPersons);
      setAverage(averageMount);
      setDeviationStandar(deviationMount);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllListPersons();
  }, []);

  return (
    <>
      <Grid container justifyContent="space-between">
        <Grid item md={4}>
          <Typography
            gutterBottom
            variant="h6"
            component="h6"
            style={{ marginTop: 30 }}
          >
            Resultados: {listPersons.length}
          </Typography>
        </Grid>
        <Grid item md={4}>
          <Typography
            gutterBottom
            variant="h6"
            component="h6"
            style={{ marginTop: 30 }}
          >
            Promedio Edad: {average.toFixed(2) || "-"}
          </Typography>
        </Grid>
        <Grid item md={4}>
          <Typography
            gutterBottom
            variant="h6"
            component="h6"
            style={{ marginTop: 30 }}
          >
            Desviacion Estandar: {deviationStandar?.toFixed(2) || "-"}
          </Typography>
        </Grid>
        <Grid
          container
          item
          md={12}
          justifyContent="flex-end"
          style={{ marginTop: 30 }}
        >
          <Button onClick={() => navigate("/create")} variant="contained">
            Crear cliente
          </Button>
        </Grid>
      </Grid>
      <TableContainer component={Paper} style={{ marginTop: 16 }}>
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellido</TableCell>
              <TableCell align="right">Edad</TableCell>
              <TableCell align="right">Esperanza de Vida</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listPersons.map((person) => {
              return (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  key={person.id}
                >
                  <TableCell component="th" scope="row">
                    {person.nombre || "-"}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {" "}
                    {person.apellido || "-"}
                  </TableCell>
                  <TableCell align="right"> {person.edad || "-"}</TableCell>
                  <TableCell align="right"> {"-"}</TableCell>
                  <TableCell align="right">
                    <Button
                      onClick={() => navigate(`/detail/${person.id}`)}
                      size="small"
                      endIcon={<ArrowForwardIcon />}
                    >
                      Ver Detalle
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      {listPersons.length > 0 && <UsersCharts persons={listPersons} />}
    </>
  );
};

export default ListPersons;
