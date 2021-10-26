import React, { useRef } from 'react';

import Link from 'next/link'
// import Image from 'next/image'
// import WjLogo from '../../public/img/Wj_carre_logo(grand).png'

import CursorEffect from './components/script/CursorEffect'
import TypeWriterEffect from './components/script/TypeWriter'

import { FaCaretDown } from 'react-icons/fa'

import Icon from './components/LogoSocial'
import { logoSocial } from './Array_landing'

export default function Landing() {

    const childRef = useRef()

    const _logoSocial = logoSocial.map((elem, index) => {
        return <Icon data={elem} key={index} />
    })

    return (

        <section id="landing" onMouseMove={(e) => childRef.current.movePosition(e)}>

            <main>
                <CursorEffect ref={childRef} />

                <div className="bloc_scrollDown">
                    <p className="text">SCROLL</p>
                    <FaCaretDown className="iconReact" size='2rem' />
                </div>

                {/*//?--( iconDown => Only-For-Responsive )--*/}
                <div className="iconResp"><FaCaretDown className="iconReact" size='2rem' /></div>

                <div className="container_landing">
                    <div className="bloc_social">
                        <ul>
                            {_logoSocial}
                        </ul>
                    </div>

                    <div className="bloc_logoWj">
                        <span className="logo">
                            <img className="img_wj" src='/img/logo_wj.png' alt="Logo des lettres 'WJ' dans un logo carré" width={400} height={400} />
                        </span>

                        <TypeWriterEffect />

                    </div>
                </div>
            </main>

        </section>
    )
}
