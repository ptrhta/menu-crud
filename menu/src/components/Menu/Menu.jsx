import { NavLink } from 'react-router-dom';
import uuid from 'react-uuid';

const LINKS = [
  {
    link: '/',
    title: 'Главная'
  },
  {
    link: '/drift',
    title: 'Дрифт-такси'
  },
  {
    link: '/timeattack',
    title: 'Time Attack'
  },
  {
    link: '/forza',
    title: 'Forza Karting'
  }
];

export default function Menu() {
  return (
    <div>
      <nav class="menu">
        {LINKS.map(link => (
          <NavLink
            key={uuid()}
            activeClassName="menu__item-active"
            className="menu__item"
            to={link.link}
            exact={link.link === '/'}
          >
            {link.title}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}