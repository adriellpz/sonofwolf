import React from "react";
import cmessage from "../cmessage.png";

const Content = () => {
  return (
    <div>
      <Content style={{ margin: "24px 16px 0" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          <img src={cmessage} class="cmessage" alt="cmessage"></img>
        </div>
      </Content>
    </div>
  );
};

export default Content;
