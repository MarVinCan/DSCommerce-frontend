import "./styles.css";
import cartIcon from "../../assets/cart.svg";
import { useContext } from "react";

import { ContextCartCout } from "../../utils/context-card";

export default function CartIcon() {
  const { contextCartCout } = useContext(ContextCartCout);
  return (
    <>
      <img src={cartIcon} alt="Carrinho de compras" />
      {contextCartCout > 0 && (
        <div className="dsc-cart-count">{contextCartCout}</div>
      )}
    </>
  );
}
