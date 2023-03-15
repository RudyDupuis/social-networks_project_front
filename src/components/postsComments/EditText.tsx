import React from "react";

interface Props {
  data: string;
}

const EditText = ({ data }: Props) => {
  return (
    <div className="posts__content--message">
      <div className="edit-text">
        <i className="fa-solid fa-pen-to-square btn-anim"></i>
        <i className="fa-regular fa-circle-xmark btn-anim"></i>
      </div>
      <p>{data}</p>
    </div>
  );
};

export default EditText;
