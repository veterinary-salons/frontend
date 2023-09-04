import classes from './style.module.scss';

import NotificationMessage from '../../components/NotificationMessage';

const ProfileGoods = () => (
  <section className={classes.goods}>
    <NotificationMessage
      imageNumber="7"
      title="Вы пока ничего не купили"
      text="...в мире грустит один котик!
Посмотрите сколько интересного у нас есть:"
      to="/goods"
      buttonText="Товары"
    />
  </section>
);

export default ProfileGoods;
