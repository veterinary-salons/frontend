import classes from './style.module.scss';

import NotificationMessage from '../../components/NotificationMessage';

const SuccessfulRecovery = () => (
  <section className={classes['successful-message']}>
    <NotificationMessage
      imageNumber='1'
      title='Доступ восстановлен'
      text='Теперь вы можете войти в аккаунт с новым паролем'
      to='/signin'
      buttonText='Войти'
    />      
  </section>
);

export default SuccessfulRecovery;
