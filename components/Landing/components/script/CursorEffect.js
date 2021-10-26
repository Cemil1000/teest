/* eslint-disable react/display-name */
//? utile pour désactiver le correcteur "eslint" qui cause des bug parfois comme ici par ex

import React, { useRef, forwardRef, useImperativeHandle } from 'react'
//*forwardRef, useImperativeHandle requis pour utiliser un "hooks" dans une autre page pour pouvoir les liés !!!

const CustomCursor = forwardRef((_props, ref) => {
  const cursor = useRef()
  const shadowCursor = useRef()

  useImperativeHandle(ref, () => ({
    movePosition: (e) => {
      cursor.current.style.left = e.pageX + 'px'
      cursor.current.style.top = e.pageY + 'px'
      
      shadowCursor.current.style.left = e.pageX + 'px'
      shadowCursor.current.style.top = e.pageY + 'px'
    },
  }))
  return (
    <>
      <div className='cursor' ref={cursor}></div>
      <div className='cursorShadow' ref={shadowCursor}></div>
    </>
  )
})

export default CustomCursor

