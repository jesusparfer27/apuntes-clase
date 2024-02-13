import {pixar} from "../../deb/deb"

const { header } = pixar;
const {h1, nav} = header

const Header = () => {
    return (
        <>
        <header className="Header">
                <Logo />
                <Nav />
        </header>
        </>
    )
}

const Logo = () => {
    const {href, src, title} = h1;
    return (
        <h1 className="header-h1">
            <a href={href} className="header-a">
                <img src={src} alt={title} className="header-img" />
            </a>
        </h1>
    )
}

const Nav = () => {
    return (
     <nav className="header-nav">
        <ul className="header-ul">
            { nav.map ( (item, key) => {
                return <Li key= {item.id} {...item} />
            })
            }
            </ul>
     </nav>
    )}

    const Li = (props) => {
        const {text, href} = props
        return (
            <li className="header-li">
            <a className="header-a" href={href}>{text}Feature films</a>
            </li>
        )
    }
   

export default Header;