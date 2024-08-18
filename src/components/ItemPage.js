import { useParams } from "react-router-dom";
import ProfileCompact from "./ProfileCompact";
import "../styles/itempage.css";

const ItemPage = () => {
  const { id } = useParams()
  return ( 
    <div className="itempage">
      <div className="itempage__head">
        <div className="itempage__head__picture">
          <img src="../images/image1.jpg" alt="" />
        </div>
        <div className="itempage__head__title">Item id {id}</div>
      </div>
      <div className="itempage__body">
        <div className="itempage__body__text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum eligendi, consequatur, ea quae ex repellat nulla, aliquid voluptatem voluptate velit nobis veritatis architecto quisquam quo natus unde. Doloribus nam a nihil reprehenderit accusantium, fuga vel quam, libero cumque excepturi numquam? Asperiores vel aliquam dolore expedita earum tenetur fuga exercitationem porro, repellendus optio quos repudiandae, fugiat animi tempora, voluptates dicta delectus pariatur voluptas? Quidem facere esse eos eius obcaecati tempore sit, dolorum ducimus rem, aliquam quod laudantium, repudiandae minus repellendus! Quos nostrum reprehenderit eum eveniet ut reiciendis molestias, cupiditate officia deleniti unde sit culpa illum corrupti voluptate mollitia beatae facere labore quae porro voluptatum fugit commodi. Totam voluptatibus iusto neque unde deserunt delectus, est voluptas dolorum ab eveniet commodi nihil hic culpa rem saepe quae ut assumenda veritatis sed accusamus quisquam recusandae, a, praesentium aut. Distinctio repellendus iste soluta quidem nihil, esse quod temporibus eaque minus quo voluptatum asperiores eius deleniti magnam labore! Ipsa adipisci ullam earum omnis, repudiandae reiciendis autem? Perspiciatis magni corrupti eveniet animi laborum, officiis quibusdam sed dignissimos libero commodi possimus vitae dicta sunt, minima iusto provident recusandae? Placeat quod aspernatur distinctio vitae dolorem exercitationem ipsum ea obcaecati ex, eligendi cum earum eveniet fugit autem tempore est. Possimus.
        </div>
        <div className="itempage__body__email">doodle@dummy.com</div>
        <div className="itempage__body__phonenumber">+987654321</div>
      </div>
    </div>
  );
}
 
export default ItemPage;