import { useState } from "react"

export function IndexMioMio(params) {
    const [buscador, setBuscador] = useState('');
    
    console.log('buscador: ', buscador );
    return(
        <>
        <div className="carrito" >
            <h2>MioMio</h2>
            <div className="center">
                <button>Carrito</button>
            </div> 
            <hr />
        </div>

        <div className="body">
            <div className="center">
                <input type="text" placeholder="Tu búsqueda" onInput={(e) => {setBuscador(e.target.value)}}></input>
            </div>
            <br />
            <div className="center">
                <img src="/images/Anteojos/ali-pazani-GwglcplmXDs-unsplash.jpg.webp" className="thumbs" />
                <div>lorem</div>
            </div>
            <br />
            <div className="center">
                <img src="/images/Anteojos/Anteojos.jpg.webp" className="thumbs" />
                <div>lorem</div>
            </div>
            <br />
            <div className="center">
                <img src="/images/Anteojos/apostolos-vamvouras-mKi4QEJXRCs-unsplash.jpg.webp" className="thumbs" />
                <div>lorem</div>
            </div>
            <br />
        </div>    
        
        </>
    )
}