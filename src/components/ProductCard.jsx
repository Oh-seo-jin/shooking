export default function ProductCard({path, name, info, price}) {
    return (
        <div className="underline">
            <img src={path}></img>
            <div>
                <h3>{name}</h3>
                <p>{info}</p>
                <p>{price}</p>
            </div>
        </div>
    )
}