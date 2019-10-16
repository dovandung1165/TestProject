import React from "react";
import DungBoLoRender from "../component/main/maintainDBL";
import GoiYPhongCachRender from "../component/main/maintainGYPC";
import ShopSuggestRender from "../component/main/shopsugest";
import SupTopBarRender from "../component/header/suptopbar";
import BackgroundRender from "../component/main/background";

function Home() {
  return (
    <section>
      <SupTopBarRender />
      <BackgroundRender />
      <DungBoLoRender />
      <GoiYPhongCachRender />
      <ShopSuggestRender />
    </section>
  );
}

export default Home;
