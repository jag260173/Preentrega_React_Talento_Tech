import "./Item.css"

export const Item = ({ name, price, description, imageUrl, children })  => {
 console.log("Image URL:", imageUrl); // Agrega esta línea para depurar   
    return (
        <article className="product-item">
            <img src={imageUrl} alt={description} />
            <h2 className="product-title"> {name}</h2>
            <p>Precio: ${price}</p>
            <p>Descripcion{description}</p>
            {children}
        </article>
    );
};


