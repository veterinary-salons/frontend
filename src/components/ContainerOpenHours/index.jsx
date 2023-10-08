import PropTypes from 'prop-types';
import OpenHours from '../OpenHours';
import classes from './style.module.scss';

const ContainerOpenHours = ({ object }) => (
  <div className={classes.component}>
    <h4 className={classes.component__title}>Расписание</h4>
    <div className={classes.component__container}>
      <OpenHours {...object.monday} key={object.monday.id} />
      <OpenHours {...object.tuesday} key={object.tuesday.id} />
      <OpenHours {...object.wednesday} key={object.wednesday.id} />
      <OpenHours {...object.thursday} key={object.thursday.id} />
      <OpenHours {...object.friday} key={object.friday.id} />
      <OpenHours {...object.saturday} key={object.saturday.id} />
      <OpenHours {...object.sunday} key={object.sunday.id} />
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
