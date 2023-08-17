import imgArrowDown from '../../assets/image/icon/arrow-down/arrow-down.svg';
import styel from './ArrowDown.module.scss';

const ArrowDown = () => (
  <img className={styel['arrow-down']} src={imgArrowDown} alt="стрелка вверх" />
);

export default ArrowDown;
