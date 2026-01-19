import { useRef } from "react";

const PanelWrapper = ({ isOpen, children, className, style = {} }) => {
  const ref = useRef(null);

  return isOpen ? (
    <div
      style={style}
      ref={ref}
      onClick={(e) => e.stopPropagation()}
      className={className}
    >
      {children}
    </div>
  ) : null;
};

export default PanelWrapper;
