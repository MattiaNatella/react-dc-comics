import LogoHeader from '../assets/img/dc-logo.png'

const Header = () => {
    return (
        <header className='container'>
            <figure>
                <img src={LogoHeader} alt="Logo DC" />
            </figure>
            <nav>
                <ul>
                    <li><a href="">characters</a></li>
                    <li><a href=""></a>comics</li>
                    <li><a href=""></a>Movies</li>
                    <li><a href=""></a>tv</li>
                    <li><a href=""></a>games</li>
                    <li><a href=""></a>collectibles</li>
                    <li><a href=""></a>videos</li>
                    <li><a href=""></a>fans</li>
                    <li><a href=""></a>news</li>
                    <li><a href=""></a>shop</li>
                </ul>
            </nav>

        </header>
    )
}

export default Header