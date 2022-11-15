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
      <Link href="/posts" className="nav-item-container">
        <p>projects</p>
      </Link>
      <Link href="/about" className="nav-item-container">
        <p>about</p>
      </Link>
      <Link href="/contact" className="nav-item-container">
        <p>contact</p>
      </Link>
    </nav>
  )
}

export default NavBar