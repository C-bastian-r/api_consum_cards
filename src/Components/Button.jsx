import React from "react";


export function Button({ onClick, estaActivo }){

  return(
    <div
      style={{margin: 15+"px", minHeight:250+"px"}}
      onClick={onClick}
    >
      <span style={{fontSize: "150px", color:"green", cursor:"pointer" }}
      className={`${estaActivo ? "isActive":""} bi bi-check-circle-fill`} ></span>
    </div>
  );
}