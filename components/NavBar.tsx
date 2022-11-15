import Image from "next/image"
import Link from "next/link"
import logo from '../public/logo.png'

const NavBar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-item-container">
        <Link href="/">
          <Image
            src={logo}
            alt="Travel logo"
            width={140}
            height={140}
          />
        </Link>
      </div>
      <div className="nav-item-container">
        <p>xxxx</p>
      </div>
    </nav>
  )
}

export default NavBar