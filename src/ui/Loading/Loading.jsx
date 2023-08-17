import PropTypes from 'prop-types';
import style from './Loading.module.scss';

const Loading = ({ classStyle }) => (
  <div className={style.background}>
    <div className={style.loading} style={classStyle} />
  </div>
);

Loading.propTypes = {
  classStyle: PropTypes.oneOfType([PropTypes.object]),
};

Loading.defaultProps = {
  classStyle: {},
};

export default Loading;
