import { Theme } from '@mui/material';
import Image from '../../images/landing/landing_page.webp';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: '100vh',
  },
  welcome: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    width: '90%',
  },
  leftSide: {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
  },
  rightSide: {
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));

export default useStyles;
