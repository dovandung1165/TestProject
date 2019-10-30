import React from "react";

import HeaderMenuRender from "./headder";
import TopBarRender from "./topbar";

function Header() {
  return (
    <header>
      <HeaderMenuRender />
      <TopBarRender />
    </header>
  );
}

export default Header;
