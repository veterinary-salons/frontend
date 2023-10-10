import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './style.module.scss';
import Avatar from '../../assets/images/icon/avatar/img-avatar.svg'

function MailAccount({ image, title, email, to }) {

  return (
    <Link to={to} className={classes.card}>
      <img src={image} alt="Аватар" className={classes.card__image} />
      <div className={classes.card__info}>
        <span className={classes.card__title}>{title}</span>
        <span className={classes.card__email}>{email}</span>
      </div>
    </Link>
  );
}

MailAccount.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  email: PropTypes.string,
  to: PropTypes.string,
};

MailAccount.defaultProps = {
  image: Avatar,
  title: 'Ася Малинина',
  email: 'asya1995cat@mail.ru',
  to: '/',
};

export default MailAccount;
