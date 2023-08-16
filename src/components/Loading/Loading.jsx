import './Loading.scss';
import PropTypes from 'prop-types';

const Loading = ({ style }) => (
  <div className="background">
    <div className="loading" style={style} />
  </div>
);

Loading.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object]),
};

Loading.defaultProps = {
  style: {},
};

export default Loading;
