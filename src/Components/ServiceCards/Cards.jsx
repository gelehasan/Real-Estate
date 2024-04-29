


const Cards = ({ icon, title, description })=>{

    return(
        <div className="card">
            <div className="icon">{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href="#" className="discover-link">Discover Now →</a>
        </div>
    )
}