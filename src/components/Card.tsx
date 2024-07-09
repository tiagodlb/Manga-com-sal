export const Card = ({ title, description }: { title: string; description: string }) => {
    console.log('card')
    return (
        <div className="card">
            <div className="card-image"></div>
            <h4 className="card-title">{title}</h4>
            <p className="card-description">{description}</p>
            <div className="card-container-buttons">
                <button>Show</button>
            </div>
        </div>
    )
}

export const LayoutCards = () => {
    return (
        <>
            <h2>Posts</h2>
            <div className="grid-cards">
                <Card title={"Titulo1"} description={"Teste1"} />
                <Card title={"Titulo2"} description={"Teste2"} />
                <Card title={"Titulo3"} description={"Teste3"} /> 
                <Card title={"Titulo4"} description={"Teste4"} /> 
                <Card title={"Titulo5"} description={"Teste5"} /> 
                <Card title={"Titulo6"} description={"Teste6"} /> 
            </div>
        </>
    )
}