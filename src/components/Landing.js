import { Link } from "react-router-dom";
import '../styles/promo.css';
import '../styles/benefits.css';

const Landing = () => {
  return ( 
    <div className="landing">
      <section className="promo">
        <div className="dark__overlay"></div>
        <div className="wrapper">
          <Link to="/register" className="promo__texts">
            <div className="promo__texts__box box1"></div>
            <div className="promo__texts__box box2"></div>
            <div className="promo__texts__title">Order many stuff</div>
            <div className="promo__texts__subtitle">From many sellers</div>
            <div className="promo__texts__action">Let's go <span>→</span></div>
          </Link>
          <div className="promo__text">
            Communicate with sellers <span>directly</span> in a convenient chat or call 'em!
          </div>
        </div>
      </section>
      <section className="benefits">
      <div className="dark__overlay"></div>
        <div className="wrapper">
          <div className="benefits__title">Our benefits</div>
          <div className="benefits__list">
            <Link to="/about" className="benefits__list-card">
              <div className="benefits__list-card__title">24/7 support</div>
              <div className="benefits__list-card__descr">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et exercitationem ex praesentium, laborum, fugiat assumenda aspernatur quae, animi blanditiis quisquam mollitia dolores atque quos fuga odit perspiciatis autem dolorem reprehenderit.</div>
            </Link>
            <Link to="/about" className="benefits__list-card central">
              <div className="benefits__list-card__twisted__box"></div>
              <div className="benefits__list-card__box box1"></div>
              <div className="benefits__list-card__box box2"></div>
              <div className="benefits__list-card__title"><span>Trusted</span> Sellers</div>
              <div className="benefits__list-card__descr">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et exercitationem ex praesentium, laborum, fugiat assumenda aspernatur quae, animi blanditiis quisquam mollitia dolores atque quos fuga odit perspiciatis autem dolorem reprehenderit.</div>
            </Link>
            <Link to="/about" className="benefits__list-card">
              <div className="benefits__list-card__title">Reliable Website</div>
              <div className="benefits__list-card__descr">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et exercitationem ex praesentium, laborum, fugiat assumenda aspernatur quae, animi blanditiis quisquam mollitia dolores atque quos fuga odit perspiciatis autem dolorem reprehenderit.</div>
            </Link>
          </div>
          <div className="benefits__title end__title">... and much more!</div>
        </div>
      </section>
    </div>
  );
}
 
export default Landing;