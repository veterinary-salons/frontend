import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './style.module.scss';
import StarsBox from '../../ui/icons/starsBox/StarsBox';
import ProfileAvatar from '../../ui/profileAvatar';

const CardRewiew = ({ stars, published, avatar, name, serviceType, text }) => (
  <div className={classes.review}>
    <div className={classes.review__rating}>
      <StarsBox rating={stars} starsOnly />
      <p className={classes.review__date}>{published}</p>
    </div>
    <div className={classes.review__info}>
      <div className={classes.review__client}>
        <ProfileAvatar src={avatar} smallSize />
        <p className={classes.review__text}>{name}</p>
      </div>
      <p
        className={classNames(
          classes.review__text,
          classes.review__text_type_bold,
        )}
      >
        {serviceType}
      </p>
      <p className={classes.review__text}>{text}</p>
    </div>
  </div>
);

CardRewiew.propTypes = {
  stars: PropTypes.string,
  published: PropTypes.string,
  avatar: PropTypes.string,
  name: PropTypes.string,
  serviceType: PropTypes.string,
  text: PropTypes.string,
};

CardRewiew.defaultProps = {
  avatar: '',
  stars: '4.4',
  published: '13 августа 2023',
  name: 'Дарья',
  serviceType: 'Услуга: гигиенический груминг',
  text: 'Все очень понравилось. Быстро, качественно, а главное - с любовью!',
};

export default CardRewiew;
