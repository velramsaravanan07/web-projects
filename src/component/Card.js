// import { BsFillBagFill } from "react-icons/bs";

// function Card ({ img, title, star, reviews, prevPrice, newPrice }) {
//   return (
//     <>
//       <section className="card">
//         <img src={img} alt={title} className="card-img" />
//         <div className="card-details">
//           <h3 className="card-title">{title}</h3>
//           <section className="card-reviews">
//             {star} {star} {star} {star}
//             <span className="total-reviews">{reviews}</span>
//           </section>
//           <section className="card-price">
//             <div className="price">Price
//               <del>{prevPrice}</del> {newPrice}
//             </div>
//             <div className="bag">
//               <BsFillBagFill className="bag-icon" />
//             </div>
//           </section>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Card;

import React from "react";
import { BsFillBagFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

function Card({ product, handleAddToCart }) {
  const { img, title, star, reviews, prevPrice, newPrice } = product;

  const addToCartHandler = () => {
    // Call the addToCart function passed from the parent component
    handleAddToCart(product);
  };

  return (
    <section className="card">
      <img src={img} alt={title} className="card-img" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          {star} {star} {star} {star}
          <span className="total-reviews">{reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            Price <del>{prevPrice}</del> {newPrice}
          </div>
          <div className="bag" onClick={addToCartHandler}>
            <BsFillBagFill className="bag-icon" />
          </div>
        </section>
      </div>
    </section>
  );
}

export default Card;




