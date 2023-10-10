import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './style.module.scss';
import SignInAccountMain from '../../components/SignInAccountMain';

const Login = () => {
  const navigate = useNavigate();
  const [isOnAccount, setIsOnAccount] = useState(true);
  console.log(isOnAccount);

  useEffect(() => {
    if (localStorage.getItem('onAccount') !== true) {
      setIsOnAccount(true)
    } else {
      setIsOnAccount(false)
      navigate('/signin-no-account', {replace: true})
    }
  }, []);

  return (
    <section className={classes.login}>
      <SignInAccountMain />
    </section>
  );
};

export default Login;