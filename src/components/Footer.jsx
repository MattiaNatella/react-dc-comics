import BonusFooter from './BonusFooter'
import DcLogoBg from '../assets/img/dc-logo-bg.png'
import NavItem from './partials/NavItem';

const dcComicsLinks = [
    { text: 'Characters', href: '#' },
    { text: 'Comics', href: '#' },
    { text: 'Movies', href: '#' },
    { text: 'TV', href: '#' },
    { text: 'Games', href: '#' },
    { text: 'Videos', href: '#' },
    { text: 'News', href: '#' }
];

const shopLinks = [
    { text: 'Shop DC', href: '#' },
    { text: 'Shop DC Collectibles', href: '#' }
];

const dcLinks = [
    { text: 'Terms of Use', href: '#' },
    { text: 'Privacy Policy (New)', href: '#' },
    { text: 'Ad Choices', href: '#' },
    { text: 'Advertising', href: '#' },
    { text: 'Jobs', href: '#' },
    { text: 'Subscriptions', href: '#' },
    { text: 'Talent Workshop', href: '#' },
    { text: 'CPSC Certificates', href: '#' },
    { text: 'Ratings', href: '#' },
    { text: 'Shop Help', href: '#' },
    { text: 'Contact Us', href: '#' }
];

const sitesLinks = [
    { text: 'DC', href: '#' },
    { text: 'MAD Magazine', href: '#' },
    { text: 'DC Kids', href: '#' },
    { text: 'DC Universe', href: '#' },
    { text: 'DC Power Visa', href: '#' }
];

const socialLinks = [
    { href: "#", imgSrc: "/footer-facebook.png", alt: "Facebook Icon" },
    { href: "#", imgSrc: "/footer-twitter.png", alt: "Twitter Icon" },
    { href: "#", imgSrc: "/footer-youtube.png", alt: "Youtube Icon" },
    { href: "#", imgSrc: "/footer-pinterest.png", alt: "Pinterest Icon" },
    { href: "#", imgSrc: "/footer-periscope.png", alt: "Periscope Icon" }
];

const Footer = () => {
    return (
        <footer>
            <BonusFooter />
            <section id='menu'>
                <div id='footer-menu' className='container'>
                    <div className='left-footer d-flex'>
                        <div className='footer-col'>
                            <h3>DC COMICS</h3>
                            <nav>
                                <NavItem links={dcComicsLinks} />
                            </nav>

                            <h3>SHOP</h3>
                            <nav>
                                <NavItem links={shopLinks} />
                            </nav>

                        </div>
                        <div className='footer-col'>
                            <h3>DC</h3>
                            <nav>
                                <NavItem links={dcLinks} />
                            </nav>

                        </div>
                        <div className='footer-col'>
                            <h3>SITES</h3>
                            <nav>
                                <NavItem links={sitesLinks} />
                            </nav>

                        </div>
                    </div>
                    <div className="footer-col-dc">
                        <img src={DcLogoBg} alt="Footer-Bg" />
                    </div>
                </div>
            </section>
            <section id="cta">
                <div className="container d-flex">
                    <div className="footer-col sign-up">
                        <h3>SIGN-UP NOW!</h3>
                    </div>
                    <div className="footer-col">
                        <nav>
                            <NavItem links={socialLinks} type='d-flex' />
                        </nav>

                    </div>
                </div>
            </section>
        </footer >
    )
}

export default Footer

