// import classNames from 'classnames';
import classes from './style.module.scss';

import ProfileAvatar from '../../ui/profileAvatar';
import UserContacts from '../../ui/userContacts';
import Button from '../../ui/buttons/originButton/Button';

const Profile = () => (
  <section className={classes.profile}>
    <section className={classes.profile__header}>
      <div className={classes['profile__data-wrapper']}>
        <div className={classes['profile__avatar-wrapper']}>
          <ProfileAvatar />
          <h2 className={classes['profile__data-title']}>Ася Малинина</h2>
        </div>
        <div className={classes['profile__contacts-wrapper']}>
          <UserContacts
            title="Адрес:"
            subtitle="г. Москва, ул. Гагарина, д. 6, кв. 145"
          />
          <UserContacts title="Номер телефона:" subtitle="+ 7 918 566 78 49" />
          <UserContacts title="Почта:" subtitle="asyam1998cat@mail.ru" />
        </div>
        <Button onClick={() => {}} size="medium" variant="outlined">
          Изменить мои данные
        </Button>
      </div>
      <Button onClick={() => {}} size="medium" variant="outlined">
        Выйти из профиля
      </Button>
    </section>
    <section className={classes.pets}>
      <h2 className={classes.pets__title}>Мои питомцы</h2>
      <h2>Тут будут карточки с питомцами</h2>
    </section>
  </section>
);

export default Profile;
