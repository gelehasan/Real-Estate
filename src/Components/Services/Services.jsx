import "./index.css"


const Services = ()=>{

    return(
        <div className="card-container">
            <Card
                icon={<img src="/path-to-buy-icon.png" alt="Buy Land" />}
                title="Buy Land"
                description="Find out the guidelines for buying the properties."
            />
            <Card
                icon={<img src="/path-to-buy-icon.png" alt="Buy Property" />}
                title="Buy Property"
                description="Find out the guidelines for buying the properties."
            />
            <Card
                icon={<img src="/path-to-buy-icon.png" alt="Buy Property" />}
                title="Buy Property"
                description="Find out the guidelines for buying the properties."
            />
        </div>
    )
}

export default Services;