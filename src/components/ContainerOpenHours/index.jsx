import PropTypes from 'prop-types';
import OpenHours from '../OpenHours';
import classes from './style.module.scss';

const ContainerOpenHours = ({ object }) => (
  <div className={classes.component}>
    <h4 className={classes.component__title}>Расписание</h4>
    <div className={classes.component__container}>
      <OpenHours {...object.monday} key={1} />
      <OpenHours {...object.tuesday} key={2} />
      <OpenHours {...object.wednesday} key={3} />
      <OpenHours {...object.thursday} key={4} />
      <OpenHours {...object.friday} key={5} />
      <OpenHours {...object.saturday} key={6} />
      <OpenHours {...object.sunday} key={7} />
    </div>
  </div>
);

ContainerOpenHours.propTypes = {
  object: PropTypes.shape(),
};

ContainerOpenHours.defaultProps = {
  object: {},
};

export default ContainerOpenHours;
