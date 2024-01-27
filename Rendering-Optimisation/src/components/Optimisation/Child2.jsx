import { memo } from "react";

function Child2({name}) {
  console.log("Child2 render");
  return (
    <div>Child2 {name}</div>
  )
}

export default Child2


// React memo

export const MemoizedChildTwo = memo(Child2)
