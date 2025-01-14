import BonusFooter from './BonusFooter'
import DcLogoBg from '../assets/img/dc-logo-bg.png'
import NavBar from './partials/NavBar';

const Footer = (props) => {
    const { dcComicsLinks, shopLinks, dcLinks, sitesLinks, socialLinks } = props
    return (
        <footer>
            <BonusFooter />
            <section id='menu'>
                <div id='footer-menu' className='container'>
                    <div className='left-footer d-flex'>
                        <div className='footer-col'>
                            <h3>DC COMICS</h3>
                            <nav>
                                <NavBar links={dcComicsLinks} />
                            </nav>

                            <h3>SHOP</h3>
                            <nav>
                                <NavBar links={shopLinks} />
                            </nav>

                        </div>
                        <div className='footer-col'>
                            <h3>DC</h3>
                            <nav>
                                <NavBar links={dcLinks} />
                            </nav>

                        </div>
                        <div className='footer-col'>
                            <h3>SITES</h3>
                            <nav>
                                <NavBar links={sitesLinks} />
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
                            <NavBar links={socialLinks} type='d-flex' />
                        </nav>

                    </div>
                </div>
            </section>
        </footer >
    )
}

export default Footer

