
import Button from "../component/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      
        <h2 className="recommended-title">Recommended...</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products"/>
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas"/>
          <Button onClickHandler={handleClick} value="Puma" title="Puma"/>
          <Button onClickHandler={handleClick} value="Vans" title="Vans"/>
        </div>
      
    </>
  );
};

export default Recommended;
