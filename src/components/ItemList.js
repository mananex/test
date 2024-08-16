import Item from "./Item";
import "../styles/itemlist.css";

const ItemList = () => {
  const items = [
    { 
      itemLink: "#",
      imageLink: "images/box1.jpg",
      itemName: "Test item name",
      shortDescription: "Test short description"
    },
    { 
      itemLink: "#",
      imageLink: "images/box1.jpg",
      itemName: "Test item name 2",
      shortDescription: "Test short description"
    },
    { 
      itemLink: "#",
      imageLink: "images/image1.jpg",
      itemName: "Test item name 2",
      shortDescription: "Test short description"
    }
  ]

  return ( 
    <div className="itemlist">
      {items.map((item) => (
        <Item itemLink={item.itemLink} itemName={item.itemName} imageLink={item.imageLink} shortDescription={item.shortDescription}/>
      ))}
    </div>
  );
}
 
export default ItemList;