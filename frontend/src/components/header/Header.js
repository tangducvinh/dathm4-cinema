import logo from '../../assets/logo/logo-main.jpg'
import { Link } from 'react-router-dom'

import NavBar from './NavBar'
import Profile from './Profile'

const Header = () => {
  return (
    <header className="w-main flex justify-center items-center py-5 mx-auto">
      <div className="flex-2 flex">
        <Link to={'/'} className="w-[100px] h-[100px]">
          <img className="w-full h-full" src={logo} alt="logo"></img>
        </Link>
      </div>

      <div className="flex-auto flex">
        <NavBar />
      </div>

      <div className="flex-3 flex justify-end">
        <Profile />
      </div>
    </header>
  )
}

export default Header