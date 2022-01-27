import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import login from '../../helpers/APICalls/login';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';
import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  submit: {
    padding: theme.spacing(2),
    height: 56,
  },
}));

export default function DemoLogin(): JSX.Element {
  const classes = useStyles();
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const dogOwner = {
    email: 'dogowner@demo.com',
    password: 'Test123!',
  };

  const dogSitter = {
    email: 'dogsitter@demo.com',
    password: 'Test123!',
  };

  const signIn = ({ email, password }: { email: string; password: string }) => {
    login(email, password).then((data) => {
      if (data.error) {
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
      } else {
        console.error({ data });
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  return (
    <Box
      sx={{
        width: '100%',
        textAlign: 'center',
        marginTop: 4,
        paddingTop: 2.5,
        fontSize: 20,
        display: 'flex',
        justifyContent: 'space-between',
        borderTop: 'solid 1px gray',
      }}
    >
      <Button
        className={classes.submit}
        onClick={() => signIn(dogOwner)}
        size="large"
        variant="contained"
        color="primary"
        disableElevation
      >
        Demo Dog Owner
      </Button>
      <Button
        className={classes.submit}
        onClick={() => signIn(dogSitter)}
        size="large"
        variant="contained"
        color="primary"
        disableElevation
      >
        Demo Dog Sitter
      </Button>
    </Box>
  );
}
