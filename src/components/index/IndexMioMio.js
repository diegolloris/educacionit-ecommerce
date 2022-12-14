import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

export function IndexMioMio(params) {
    const [buscador, setBuscador] = useState('');
    
    let navigate = useNavigate();

    console.log('buscador: ', buscador );

   
    function goToCart() {
        alert('anda');
        navigate("/cart", {replace: true})
    }


  

    return(
        <>
        <div className="carrito" >
            <h2>MioMio</h2>
            <div className="center">
                <button onClick={ goToCart }>Carrito</button>
            </div> 
            <hr />
        </div>

        <div className="body">
            <div className="center">
                <input type="text" placeholder="Tu búsqueda" onBlur={(e) => {setBuscador(e.target.value)}}></input>
            </div>
            <br />
            <div className="center">
                <img src="/images/Anteojos/ali-pazani-GwglcplmXDs-unsplash.jpg.webp" className="thumbs" />
                <Link to={'/detail/1'}> Ver Detalle</Link>         
            </div>
            <br />
            <div className="center">
                <img src="/images/Anteojos/Anteojos.jpg.webp" className="thumbs" />
                <Link to={'/detail/2'}> Ver Detalle</Link>
            </div>
            <br />
            <div className="center">
                <img src="/images/Anteojos/apostolos-vamvouras-mKi4QEJXRCs-unsplash.jpg.webp" className="thumbs" />
                <Link to={'/detail/3'}> Ver Detalle</Link>
            </div>
            <br />
        </div>    
        
        </>
    )

}
