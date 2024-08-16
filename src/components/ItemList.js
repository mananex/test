import Item from "./Item";
import "../styles/itemlist.css";

const ItemList = () => {
  const items = [1, 2, 3, 4, 5]

  return ( 
    <div className="itemlist">
      {items.map((item) => (
        <Item/>
      ))}
    </div>
  );
}
 
export default ItemList;