import classNames from 'classnames';
import PropTypes from 'prop-types';
import classes from './Facts.module.scss';
import imgGroomer from '../../../assets/images/icon/specialists/groomers.svg';

const Facts = ({ color, title, img }) => {
    const getFactsHeadingClasses = classNames(
        classes.facts__heading,
        {
          [classes.facts__heading_yellow]:
        }
      )
    return (
        <section className={classes.facts}>
            <h2 className={classes.facts__title}>
                Наша статистика поможет вам не переживать за своих любимцев
            </h2>
            <div className={classes.facts__wrap}>
                    <div className={classes.facts__cat} />
                    <ul className={classes.facts__table}>
                        <li className={classes.facts__cell}>
                            <h3 className={(classes.facts__heading, classes.facts__heading_yellow)}>131</h3>
                            <p className={classes.facts__text}>
                                кошка вернулась с передержки в отличном настроении
                            </p>
                        </li>

                        <li className={classes.facts__cell}>
                            <h3 className={(classes.facts__heading, classes.facts__heading_green)}>28</h3>
                            <p className={classes.facts__text}>
                                кроликов и 1 хорёк остались довольны приёмом у ветеринара
                            </p>
                        </li>

                        <li className={classes.facts__cell}>
                            <h3 className={(classes.facts__heading, classes.facts__heading_violet)}>70</h3>
                            <p className={classes.facts__text}>
                                щенков сдали экзамен ОКД и теперь ведут себя лучше хоязев
                            </p>
                        </li>

                        <li className={classes.facts__cell}>
                            <h3 className={(classes.facts__heading, classes.facts__heading_color)}>52</h3>
                            <p className={classes.facts__text}>
                                собаки порадовали своих хозяев шелковистой шерстью после
                                груминга
                            </p>
                        </li>
                    </ul>
                </div>
              </section>
)
}

SpecialistCard.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
};

SpecialistCard.defaultProps = {
  color: 'blue',
  title: 'Грумеры',
  img: imgGroomer,
};

export default Facts;
