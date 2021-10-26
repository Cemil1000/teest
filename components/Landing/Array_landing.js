import { FaEnvelope, FaGithub, FaPhoneAlt } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';

export const logoSocial = [
    {
        href: 'tel:0486392559',
        typeNameIcon: <FaPhoneAlt className='iconReact' size='2rem' />,
    },
    {
        href: 'mailto:jniouenwassim@gmail.com',
        typeNameIcon: <FaEnvelope className='iconReact' size='2rem' />,
    },
    {
        href: 'https://www.linkedin.com/in/wassim-jniouen-953b651b9/',
        typeNameIcon: <AiFillLinkedin className='iconReact' size='2rem' />,
    },
    {
        href: 'https://github.com/Jniouen-Wassim',
        typeNameIcon: <FaGithub className='iconReact' size='2rem' />,
    },
]