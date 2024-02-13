import {pixar} from "../../db/db"

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
        <h1 className="Header-h1">
            <a href={href} className="Header-a">
                <img src={src} alt={title} className="Header-img" />
            </a>
        </h1>
    )
}

const Nav = () => {
    return (
     <nav className="Header-nav">
        <ul className="Header-ul">
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
            <li className="Header-li">
            <a className="Header-a" href={href}>{text}Feature films</a>
            </li>
        )
    }
   

export default Header;