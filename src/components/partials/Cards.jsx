const Cards = (props) => {
    const { thumb, series } = props
    return (
        <div className="card">
            <div className="card-image">
                <img src={thumb} alt={series} />
            </div>
            <p>{series}</p>
        </div>
    )
}

export default Cards