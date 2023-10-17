import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import classes from './style.module.scss';
import Button from '../../ui/buttons/originButton/Button';

const ProfileServiceCard = ({
  id,
  specialistType,
  petType,
  services,
  schedule,
  breakTime,
  description,
  add,
}) => {
  console.log(id);
  const navigate = useNavigate();

  return (
    <article className={classes.card}>
      {!add ? (
        <>
          <h4 className={classes.card__title}>{specialistType}</h4>
          <div className={classes.card__block}>
            <h5 className={classes['card__block-title']}>Только</h5>
            <ul className={classes['card__block-items']}>
              {petType?.map((item) => (
                <li key={nanoid()} className={classes['card__block-item']}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={classes['card__block-wrapper']}>
            <div className={classes.card__block}>
              <h5 className={classes['card__block-title']}>Услуги</h5>
              <ul className={classes['card__block-items']}>
                {services?.map((item) => (
                  <li key={nanoid()} className={classes['card__block-item']}>
                    {item.serviceType}
                  </li>
                ))}
              </ul>
            </div>
            <div className={classes.card__block}>
              <h5
                className={classNames(
                  classes['card__block-title'],
                  classes.textAR,
                )}
              >
                Цена
              </h5>
              <ul className={classes['card__block-items']}>
                {services?.map((item) => (
                  <li
                    key={nanoid()}
                    className={classNames(
                      classes['card__block-item'],
                      classes.textAR,
                    )}
                  >
                    {item.price}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={classes.card__block}>
            <h5 className={classes['card__block-title']}>Расписание</h5>
            <ul
              className={classNames(
                classes['card__block-items'],
                classes['card__block-items_row'],
              )}
            >
              {schedule?.map((item) => (
                <li
                  key={nanoid()}
                  className={classNames(
                    classes['card__block-item'],
                    classes['card__block-item_schedule'],
                  )}
                >
                  {item.weekDay}
                  <br />
                  {item.workingHours}
                </li>
              ))}
            </ul>
            <p
              className={classNames(
                classes.card__descr,
                classes.card__descr_fz12,
              )}
            >
              {breakTime}
            </p>
          </div>
          <p
            className={classNames(classes.card__descr, classes.card__descr_pt)}
          >
            {description}
          </p>
          <div className={classes['card__button-wrapper']}>
            <Button
              size="medium"
              isMaxWidth
              onClick={() => navigate('/profile/edit', { replace: true })}
            >
              Внести изменения
            </Button>
            <Button size="medium" variant="outlined" isMaxWidth>
              Cнять с публикации
            </Button>
          </div>
        </>
      ) : (
        <div className={classes.card__add}>
          <Button
            variant="add"
            shape="round"
            onClick={() => navigate('/advert', { replace: true })}
          />
          <p className={classes['card__add-title']}>Добавить информацию</p>
        </div>
      )}
    </article>
  );
};

ProfileServiceCard.propTypes = {
  id: PropTypes.string,
  specialistType: PropTypes.string,
  petType: PropTypes.arrayOf(PropTypes.string),
  services: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  schedule: PropTypes.arrayOf(
    PropTypes.shape({
      available: PropTypes.bool,
      weekDay: PropTypes.string,
      workingHours: PropTypes.string,
    }),
  ),
  breakTime: PropTypes.string,
  description: PropTypes.string,
  add: PropTypes.bool,
};

ProfileServiceCard.defaultProps = {
  id: '',
  specialistType: '',
  petType: [],
  services: [],
  schedule: [],
  breakTime: '',
  description: '',
  add: false,
};

export default ProfileServiceCard;
