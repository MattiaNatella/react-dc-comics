import LogoHeader from '../assets/img/dc-logo.png'
import NavBar from './partials/NavBar';

const Header = (props) => {
    const { links } = props
    return (
        <header className='container p-0'>
            <figure>
                <img src={LogoHeader} alt="Logo DC" />
            </figure>
            <NavBar links={links} />
        </header>
    )
}

export default Header