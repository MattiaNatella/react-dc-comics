

import BonusFooter from './BonusFooter'

import DcLogoBg from '../assets/img/dc-logo-bg.png'


const Footer = () => {
    return (
        <footer>
            <BonusFooter />
            <section id='menu'>
                <div id='footer-menu' className='container'>
                    <div className='left-footer d-flex'>
                        <div className='footer-col'>
                            <h3>DC COMICS</h3>
                            <ul>
                                <li><a href="#">Characters</a></li>
                                <li><a href="#">Comics</a></li>
                                <li><a href="#">Movies</a></li>
                                <li><a href="#">TV</a></li>
                                <li><a href="#">Games</a></li>
                                <li><a href="#">Videos</a></li>
                                <li><a href="#">News</a></li>
                            </ul>
                            <h3>SHOP</h3>
                            <ul>
                                <li><a href="#">Shop DC</a></li>
                                <li><a href="#">Shop DC Collectibles</a></li>
                            </ul>
                        </div>
                        <div className='footer-col'>
                            <h3>DC</h3>
                            <ul>
                                <li><a href="#">Terms of Use</a></li>
                                <li><a href="#">Privacy Policy (New)</a></li>
                                <li><a href="#">Ad Choices</a></li>
                                <li><a href="#">Advertising</a></li>
                                <li><a href="#">Jobs</a></li>
                                <li><a href="#">Subscriptions</a></li>
                                <li><a href="#">Talent Workshop</a></li>
                                <li><a href="#">CPSC Certificates</a></li>
                                <li><a href="#">Ratings</a></li>
                                <li><a href="#">Shop Help</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className='footer-col'>
                            <h3>SITES</h3>
                            <ul>
                                <li><a href="#">DC</a></li>
                                <li><a href="#">MAD Magazine</a></li>
                                <li><a href="#">DC Kids</a></li>
                                <li><a href="#">DC Universe</a></li>
                                <li><a href="#">DC Power Visa</a></li>
                            </ul>
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
                        <ul className="d-flex">
                            <li><a href="#" className='f-bold f-primary'><h3>FOLLOW US</h3></a></li>
                            <li><a href="#"><img src="/public/footer-facebook.png" alt="Facebook Icon" /></a></li>
                            <li><a href="#"><img src="/public/footer-twitter.png" alt="Twitter Icon" /></a></li>
                            <li><a href="#"><img src="/public/footer-youtube.png" alt="Youtube Icon" /></a></li>
                            <li><a href="#"><img src="/public/footer-pinterest.png" alt="Pinterest Icon" /></a></li>
                            <li><a href="#"><img src="/public/footer-periscope.png" alt="Periscope Icon" /></a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </footer >
    )
}

export default Footer

