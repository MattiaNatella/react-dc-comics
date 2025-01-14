import LogoHeader from '../assets/img/dc-logo.png'
import NavBar from './partials/NavBar';




const Header = (props) => {
    const { links } = props
    return (
        <header className='container'>
            <figure>
                <img src={LogoHeader} alt="Logo DC" />
            </figure>
            <nav>
                <NavBar links={links} />
            </nav>

        </header>
    )
}

export default Header