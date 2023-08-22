import imgArrowRight from '../../../../assets/images/icon/arrow-right/arrow-right.svg';
import style from './ArrowRight.module.scss';

const ArrowRight = () => (
  <img
    className={style['arrow-right']}
    src={imgArrowRight}
    alt="стрелка в право"
  />
);

export default ArrowRight;
