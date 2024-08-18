import { useParams } from "react-router-dom";
import ProfileCompact from "./ProfileCompact";

const ItemPage = () => {
  const { id } = useParams()
  return ( 
    <div className="itempage">
    {id}123
    </div>
  );
}
 
export default ItemPage;