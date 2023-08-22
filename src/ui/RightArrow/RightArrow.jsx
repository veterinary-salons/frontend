import imgRightArrow from '../../assets/image/icon/right-arrow/right-arrow.svg';
import style from './RightArrow.module.scss';

const RightArrow = () => (
  <img className={style['right-arrow']} src={imgRightArrow} alt="RightArrow" />
);

export default RightArrow;
