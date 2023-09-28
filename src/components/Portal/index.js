import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal');

const Portal = ({ children, isOpened }) => {
  if (!isOpened) {
    return null;
  }

  return ReactDOM.createPortal(children, modalRoot);
};

Portal.propTypes = {
    children: PropTypes.node.isRequired,
    isOpened: PropTypes.bool.isRequired,
}


export default Portal;