import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { SelectedPage } from "./types";

type ActionButtonProps = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({ children, setSelectedPage }: ActionButtonProps) => {
  const handleActionButton = () => {
    setSelectedPage(SelectedPage.ContactUs);
  };


  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      onClick={handleActionButton}
      href={`#${SelectedPage.ContactUs}`}
    > 
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
