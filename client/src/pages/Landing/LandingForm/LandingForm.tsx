import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import useStyles from './useStyles';
import FormInput from '../../../components/FormInput/FormInput';
import { Grid } from '@mui/material';

interface Props {
  handleSubmit: (
    {
      location,
      dropIn,
      dropOff,
    }: {
      location: string;
      dropIn: Date;
      dropOff: Date;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      location: string;
      dropIn: Date;
      dropOff: Date;
    }>,
  ) => void;
}

export default function Login({ handleSubmit }: Props): JSX.Element {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        location: '',
        dropIn: new Date(),
        dropOff: new Date(),
      }}
      validationSchema={Yup.object().shape({
        location: Yup.string().required('Location is required'),
        dropIn: Yup.date().required('DropIn is required'),
        dropOff: Yup.date().required('DropOff is required'),
      })}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <FormInput
            id="location"
            label="Where"
            fullWidth
            margin="normal"
            name="location"
            placeholder="Anywhere"
            helperText={touched.location ? errors.location : ''}
            error={touched.location && Boolean(errors.location)}
            value={values.location}
            onChange={handleChange}
          />

          <Grid container>
            <Grid item xs={6}>
              <FormInput
                id="dropIn"
                label="Drop In"
                fullWidth
                margin="normal"
                name="dropIn"
                placeholder="mm/dd/yyyy"
                helperText={touched.dropIn ? errors.dropIn : ''}
                error={touched.dropIn && Boolean(errors.dropIn)}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={6}>
              <FormInput
                id="dropOff"
                label="Drop Off"
                fullWidth
                margin="normal"
                name="dropOff"
                placeholder="mm/dd/yyyy"
                helperText={touched.dropOff ? errors.dropOff : ''}
                error={touched.dropOff && Boolean(errors.dropOff)}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Box marginTop={2}>
            <Button
              type="submit"
              size="large"
              variant="contained"
              color="primary"
              className={classes.submit}
              disableElevation
            >
              {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'Find my dog sitter'}
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
}
