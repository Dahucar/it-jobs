import React from "react";
export const MessageComponent = ({ msg, typeAlert }) => {
  return (
    <div className={` alert ${ typeAlert } `} role="alert">
      { msg }
    </div>
  );
};
