/*------------------------------------*/
/*----- TypewriterJS (typeWriter)-----*/
import React from 'react'

import Typewriter from 'typewriter-effect'

export default function TypeWriter() {
  return (
    <>
      <span className='title'>
        <p>creative</p>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('') // ! Attention pas de ";" à la fin
            .changeDelay(250)
            typewriter.typeString('developer')
            .start()
          }}
        />
      </span>
    </>
  )
}
