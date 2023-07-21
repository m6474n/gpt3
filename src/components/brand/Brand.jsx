import React from "react";
import "./brand.css";
import { google, slack, dropbox, atlassian, shopify } from "./imports.js";
const Brand = () => {
  return (
    <div className="gpt3__brands section__padding">
      <div>
        <img src={google} alt="google" srcset="" />
      </div>
      <div>
        <img src={slack} alt="slack" srcset="" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" srcset="" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" srcset="" />
      </div>
      <div>
        <img src={shopify} alt="shopify" srcset="" />
      </div>
    </div>
  );
};

export default Brand;
