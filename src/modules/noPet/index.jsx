import classNames from 'classnames';
import { Link } from 'react-router-dom';
import classes from './style.module.scss';
import Button from '../../ui/buttons/originButton/Button';

const NoPet = () => (
  <div className={classes['no-pet']}>
    <p className={classes['no-pet__title']}>У вас пока нет питомцев</p>
    <p className={classes['no-pet__subtitle']}>Но они, наверняка, есть.</p>
    <Link to="add-pet">
      <Button shape="round" size="small" variant="add" />
    </Link>
    <p
      className={classNames(
        classes['no-pet__subtitle'],
        classes['no-pet__subtitle_black'],
      )}
    >
      Добавить информацию
    </p>
  </div>
);

export default NoPet;
