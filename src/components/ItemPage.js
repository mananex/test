import { useParams } from "react-router-dom";
import ProfileCompact from "./ProfileCompact";

const ItemPage = () => {
  const { id } = useParams()
  return ( 
    <div className="itempage">
    {id}
    </div>
  );
}
 
export default ItemPage;