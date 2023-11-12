import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './style.module.scss';
import SignInAccountMain from '../../components/SignInAccountMain';

const Login = () => {
  const navigate = useNavigate();
  const [isOnAccount, setIsOnAccount] = useState(false);
  const previosUser = JSON.parse(localStorage.getItem('previousAccount'));

  useEffect(() => {
    if (previosUser !== null) {
      setIsOnAccount(true);
    } else {
      navigate('/signin-no-account', { replace: true });
    }
  }, []);

  return (
    <section className={classes.login}>
      {isOnAccount && <SignInAccountMain />}
    </section>
  );
};

export default Login;
