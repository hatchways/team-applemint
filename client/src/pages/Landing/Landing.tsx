import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { FormikHelpers } from 'formik';
import { theme } from '../../themes/theme';
import LandingForm from './LandingForm/LandingForm';
import useStyles from './useStyles';

export default function Landing(): JSX.Element {
  const classes = useStyles();

  const handleSubmit = (
    { location, dropIn, dropOff }: { location: string; dropIn: Date; dropOff: Date },
    { setSubmitting }: FormikHelpers<{ location: string; dropIn: Date; dropOff: Date }>,
  ) => {
    // TODO: Form Submission from Landing Page Implementation
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={12} md={6} className={classes.leftSide}>
        <Box paddingLeft={12} className={classes.welcome}>
          <Typography
            variant="h3"
            sx={{ fontSize: 74, fontWeight: 700, marginBottom: 8, color: theme.palette.common.black }}
          >
            Find the care your <br /> dog deserves
          </Typography>
          <Box
            sx={{
              width: '80%',
            }}
          >
            <LandingForm handleSubmit={handleSubmit} />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={false} md={6} className={classes.rightSide} />
    </Grid>
  );
}
