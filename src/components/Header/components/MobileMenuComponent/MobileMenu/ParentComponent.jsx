import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { MobileMenu } from "./MobileMenu";
import { ParentMenuContainer } from "./MobileMenu.styled";

const rootModal = document.querySelector(`#mobile-menu`);

export const ParentComponent = ({ onClose, isOpen }) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const thresholdWidth = 100;

  if (viewportWidth <= thresholdWidth) {
    return createPortal(
      <ParentMenuContainer>
        <MobileMenu onClose={onClose} isOpen={isOpen} />
      </ParentMenuContainer>,
      rootModal
    );
  }

  return (
    <ParentMenuContainer>
      <MobileMenu onClose={onClose} isOpen={isOpen} />
    </ParentMenuContainer>
  );
};