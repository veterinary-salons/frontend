import imgLogo from '../../../assets/images/icon/logo/Logo.svg';
import style from './Logo.module.scss';

const Logo = () => <img className={style.logo} src={imgLogo} alt="логотип" />;

export default Logo;
