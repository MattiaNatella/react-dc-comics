import BuyDigital from '../assets/img/buy-comics-digital-comics.png'
import BuyMerchandise from '../assets/img/buy-comics-merchandise.png'
import BuyShopLocator from '../assets/img/buy-comics-shop-locator.png'
import Subscriptions from '../assets/img/buy-comics-subscriptions.png'

const BonusFooter = () => {
    return (
        <section id="merchandise">
            <div className="container d-flex">
                <img src={BuyDigital} alt="Digital" />
                <span>DIGITAL COMICS</span>
                <img src={BuyMerchandise} alt="Merchandise" />
                <span>DC MERCHANDISE</span>
                <img src={Subscriptions} alt="Subscriptions" />
                <span>SUBSCRIPTIONS</span>
                <img src={BuyShopLocator} alt="Shop Locator" />
                <span>COMIC SHOP LOCATOR</span>
            </div>
        </section>
    )
}

export default BonusFooter