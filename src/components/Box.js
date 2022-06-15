import React from "react";

export const Box = (props) => {
  const className = {
    box: "box",
    fullHeight: props.fullHeight && "box-fullHeight",
  };
  return (
    <div className={Object.values(className).join(" ")}>{props.children}</div>
  );
};
