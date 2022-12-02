import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const DetailsMioMio = () => {
  let { id } = useParams();
  let idProduct = id
  const [product, setProduct] = useState({});

  console.log('id', id)

  useEffect(() => {
  
    switch (Number(id)) {
      case 1:
        
        setProduct({
          titulo: "prod1",
          descripcion: "detalle de producto 1",
          colores: "rojo",
          talle: "S-L",
          precio: "$1500",
          image: "/images/Anteojos/ali-pazani-GwglcplmXDs-unsplash.jpg.webp"
        });
        break;
      case 2:
        setProduct({
            titulo: "prod2",
            descripcion: "detalle de producto 2",
            colores: "azul",
            talle: "M-L",
            precio: "$3000",
            image:'/images/Anteojos/Anteojos.jpg.webp'
          });
          break;
          case 3:
            setProduct({
                titulo: "prod3",
                descripcion: "detalle de producto 3",
                colores: "negro",
                talle: "S-L",
                precio: "$4000",
                image:'/images/Anteojos/apostolos-vamvouras-mKi4QEJXRCs-unsplash.jpg.webp'
              });
              break;

      default:
        break;
    }
  },[]);

  return (
    <>
      <div className="carrito">
        <h2>MioMio</h2>
        <div className="center">
          <button>Carrito</button>
        </div>
        <hr />
      </div>
      <a href="#"> Volver </a>
      <div className="center">
        <img
          src={product?.image}
          className="thumbs"
        />
        <h2>{product?.titulo}</h2>
        <p>
         {product?.detalle}
        </p>
        <p>colores: {product?.colores}</p>
        <p>Talle: {product?.talle}</p>
        <p>Precio:{product?.precio}</p>
      </div>
      <div className="center">
        <button>LO QUIERO</button>
      </div>
    </>
  );
};
