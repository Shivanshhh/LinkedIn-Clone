import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("Pratham Singh donates everything and dies", "Ndtv India")}
      {newsArticle("Owais Ali becomes CEO of Imumz", "Onion News")}
      {newsArticle("Dev Singh wins grammy again", "Glamsham News")}
      {newsArticle("Sharvansh Shukla still waiting gor inspiration", "Bhari News")}
      {newsArticle("Raahil Armaan becomes first billionaire from Odisha", "Botez News")}
    </div>
  );
};

export default Widgets;
