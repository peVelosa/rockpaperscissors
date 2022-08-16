import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }: any) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    {/*
      // @ts-ignore */}
    elRef.current = document.createElement("div");
  }
  {/*
      // @ts-ignore */}
  useEffect(() => {
    const modalRoot = document.getElementById('modal');
    {/*
      // @ts-ignore */}
    modalRoot?.appendChild(elRef.current);

    //Vai ser executada quando o elemente for sair. ComponentDidUnmount
    {/*
      // @ts-ignore */}
    return () => modalRoot?.removeChild(elRef.current);
  }, []);
  {/*
      // @ts-ignore */}
  return createPortal(<div>{children}</div>, elRef.current);

};

export default Modal;



