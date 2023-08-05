import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={ s.navbar }>
      <NavLink to='/films'>
          <input type='button' className={ s.button } value='FILMS' />
      </NavLink>
      
      <NavLink to='/listing'>
        <input type='button' className={ s.button } value='LISTING' />
      </NavLink>
      
      <NavLink to='/chat'>
        <input type='button' className={ s.button } value='CHAT' />
      </NavLink>    
    </div>
    
  )
}

export default Navbar 