import React from "react";
function Child3({name,children}) {
    console.log("Child3 render");
  return (
    <div>Child3
        {children}
        {name}
    </div>
  )
}

export default Child3


export const MemoizedChildThree = React.memo(Child3)