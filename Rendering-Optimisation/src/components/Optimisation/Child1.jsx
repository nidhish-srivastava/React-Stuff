import React, { memo } from 'react'

function Child1() {
    console.log("child render");
  return (
    <div>Child1</div>
  )
}

export default Child1

export const MemoizedChildOne = memo(Child1)