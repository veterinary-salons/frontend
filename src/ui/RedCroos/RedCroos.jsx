import imgRedCroos from '../../assets/image/icon/red-cross/red-cross.svg';
import style from './RedCroos.module.scss';

const RedCroos = () => (
  <img className={style['red-croos']} src={imgRedCroos} alt="красный крестик" />
);

export default RedCroos;
