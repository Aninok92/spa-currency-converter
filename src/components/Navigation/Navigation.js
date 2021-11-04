import { NavLink } from 'react-router-dom'
import s from './Navigation.module.scss'

const Navigation = () => (
  <nav>
    <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
      Currency exchange
    </NavLink>
    <NavLink to="/current" className={s.link} activeClassName={s.activeLink}>
      Exchange rates
    </NavLink>
  </nav>
)

export default Navigation
