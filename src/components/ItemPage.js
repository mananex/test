import { useParams } from "react-router-dom";

const ItemPage = () => {
  const { id } = useParams()
  return ( 
    <div className="itempage">
      {id}
    </div>
  );
}
 
export default ItemPage;