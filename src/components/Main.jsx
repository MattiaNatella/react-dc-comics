import comics from "../../data/comics"
import Cards from "./partials/Cards"


const Main = () => {
    return (
        <main>
            <section id="jumbotron"></section>

            <div className="container d-flex">
                {comics.map(item => (
                    <Cards key={item.id} thumb={item.thumb} series={item.series} />
                ))}
                <p className="blue-tag-series">CURRENT SERIES</p>
            </div>
            <div className="btn d-flex">
                <button className="blue-tag">LOAD MORE</button>
            </div>
        </main>
    )
}

export default Main