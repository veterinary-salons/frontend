import imgRedCross from '../../../assets/images/icon/red-cross/red-cross.svg';
import style from './RedCross.module.scss';

const RedCross = () => (
  <img className={style['red-cross']} src={imgRedCross} alt="красный крестик" />
);

export default RedCross;
