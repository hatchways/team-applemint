import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  navbar: {
    boxShadow: '4px 4px 13px 7px rgba(217,217,217,0.26)',
    padding: theme.spacing(2),
    background: 'white',
  },
  transparentNavbar: {
    position: 'absolute',
    boxShadow: 'none',
    background: 'none',
  },
  navbarItem: {
    color: theme.palette.grey[900],
    fontWeight: 700,
    textDecoration: 'none',
    transition: 'color 120ms ease-in-out',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  landingNavbarItem: {
    color: theme.palette.primary.contrastText,
    textTransform: 'uppercase',
    fontWeight: 700,
    transition: 'color 120ms ease-in-out',
    '&:hover': {
      color: theme.palette.grey[500],
    },
    '& Button': {
      '&.MuiButton-outlined': {
        color: theme.palette.primary.contrastText,
        borderColor: theme.palette.primary.contrastText,
        '&:hover': {
          borderColor: theme.palette.primary.contrastText,
        },
      },
    },
  },
  navbarLogo: {
    width: 180,
  },
}));
