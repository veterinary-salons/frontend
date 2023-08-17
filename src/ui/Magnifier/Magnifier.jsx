import imgMagnifier from '../../assets/image/icon/magnifier/magnifier.svg';
import style from './Magnifier.module.scss';

const Magnifier = () => (
  <img className={style.magnifier} alt="magnifier" src={imgMagnifier} />
);

export default Magnifier;
