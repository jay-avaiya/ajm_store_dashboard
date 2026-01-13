import { useRef } from "react";

const PanelWrapper = ({ isOpen, children, className }) => {
  const ref = useRef(null);

  return isOpen ? (
    <div ref={ref} onClick={(e) => e.stopPropagation()} className={className}>
      {children}
    </div>
  ) : null;
};

export default PanelWrapper;
