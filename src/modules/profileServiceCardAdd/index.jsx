import classes from './style.module.scss';
import Button from '../../ui/buttons/originButton/Button';

const ProfileServiceCardAdd = () => (
  <article className={classes.card}>
    <div className={classes.card__add}>
      <Button variant="add" shape="round" />
      <p className={classes['card__add-title']}>Добавить информацию</p>
    </div>
  </article>
);

export default ProfileServiceCardAdd;
