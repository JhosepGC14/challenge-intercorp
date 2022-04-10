import { Button, Grid, TextField } from "@mui/material";
import { useFormCreate } from "../../../../hooks/useFromCreate";

const FormCreate = () => {
  const { formik } = useFormCreate();

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h2 style={{ fontFamily: "Roboto" }}>Crear Cliente: </h2>
        </Grid>
        <Grid item md={6}>
          <TextField
            id="name"
            label="Nombre"
            variant="outlined"
            fullWidth
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            id="lastName"
            label="Apellido"
            variant="outlined"
            fullWidth
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            id="age"
            label="Edad"
            variant="outlined"
            fullWidth
            name="age"
            value={formik.values.age}
            onChange={formik.handleChange}
            error={formik.touched.age && Boolean(formik.errors.age)}
            helperText={formik.touched.age && formik.errors.age}
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            id="dateBirth"
            label="Birthday"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            name="dateBirth"
            value={formik.values.dateBirth}
            onChange={formik.handleChange}
            error={formik.touched.dateBirth && Boolean(formik.errors.dateBirth)}
            helperText={formik.touched.dateBirth && formik.errors.dateBirth}
          />
        </Grid>
        <Grid container item md={12} justifyContent="flex-end">
          <Button variant="contained" type="submit">
            Crear
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default FormCreate;
