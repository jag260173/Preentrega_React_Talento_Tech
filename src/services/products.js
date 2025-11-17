const BASE_URL = "https://6912312d52a60f10c820f175.mockapi.io/products"; //api key recurso creado en mockapi

export const createProduct = async (product) => {
     const res = await fetch(BASE_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify(product),
     
     });

     if (!res.ok) {
        throw new Error ("No se pudo crear el producto")
     }
     const result = await res.json ();
     return result;
    }
