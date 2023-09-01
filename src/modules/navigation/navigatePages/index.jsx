import { NavLink } from 'react-router-dom';
import classStyle from './style.module.scss';

const navigationPages = () => {
  const className = ({ isActive }) =>
    `${classStyle['navigation-pages__link']} ${
      isActive ? classStyle['navigation-pages__link_action'] : ''
    }`;

  return (
    <ul className={classStyle['navigation-pages']}>
      <li>
        <NavLink className={className} to="/goods">
          Товары
        </NavLink>
      </li>
      <li>
        <NavLink className={className} to="/services">
          Услуги
        </NavLink>
      </li>
      <li>
        <NavLink className={className} to="/magazine">
          Журнал
        </NavLink>
      </li>
    </ul>
  );
};

export default navigationPages;
