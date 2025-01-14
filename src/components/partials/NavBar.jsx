

const NavBar = (props) => {
    const { links, type } = props
    return (
        <ul className={type || ''}>
            {links.map((link, index) =>
                <li key={`link ${index}`}><a href={link.href}>{link.text || <img src={link.imgSrc} />}</a> </li>)}
        </ul>
    )
}

export default NavBar