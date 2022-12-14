import { Link } from "react-router-dom"

function Item(props) {

     return (
        <div className="center">
              
                <img src={props.image} className="thumbs" />
                <Link to={`/detail/${props.id}`}> Ver Detalle</Link>         
           
        </div>
     )
        
}

export default Item