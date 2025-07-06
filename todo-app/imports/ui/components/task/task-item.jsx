import React from "react";

export function TaskItem(props) {
  const { title,  onCheckboxClick, isChecked, _id, onDelete } = props;
  return (
    <div
      style={{
        border: "1px solid black",
        margin: "10px",
        padding: "5px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "40px",
        width: "300px",
      }}
    >
      <input type="checkbox" checked={!!isChecked} name="isDone" readOnly onClick={() => {
        onCheckboxClick(props);
      }} />
      <p style={{ margin: 0, padding: 0 }}>{title}</p>
      <span onClick={() => onDelete(_id)}>x</span>
    </div>
  );
}
