import React, { memo } from 'react'

function Child4({memoizedHandler}) {
    console.log(memoizedHandler);
    console.log("Child4");
  return (
    <div>Child4</div>
  )
}

export default Child4


export const MemoizedChildFour = memo(Child4)