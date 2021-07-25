import { useContext } from "react";
import ReactDOM from "react-dom";
import CartContext from "../../store/cart-context";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  const context = useContext(CartContext);

  return <div className={classes.backdrop} onClick={context.onHideCart} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const portalElement = document.getElementById("overlays");
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
