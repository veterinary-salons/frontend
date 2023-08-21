import style from './GreenMark.module.scss';
import imgGreenMark from '../../assets/image/icon/green-check-mark/green-check-mark.svg';

const GreenMark = () => (
  <img className={style['green-mark']} src={imgGreenMark} alt="GreenMark" />
);

export default GreenMark;
