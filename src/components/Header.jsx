import LogoHeader from '../assets/img/dc-logo.png'
import NavBar from './partials/NavBar';
const links = [
    { href: "#characters", text: "characters" },
    { href: "#comics", text: "comics" },
    { href: "#movies", text: "Movies" },
    { href: "#tv", text: "tv" },
    { href: "#games", text: "games" },
    { href: "#collectibles", text: "collectibles" },
    { href: "#videos", text: "videos" },
    { href: "#fans", text: "fans" },
    { href: "#news", text: "news" },
    { href: "#shop", text: "shop" }
];



const Header = () => {
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