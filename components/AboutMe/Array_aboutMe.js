import { FaHtml5, FaCss3Alt, FaJsSquare, FaNeos, FaBootstrap, FaSass, FaGithubSquare, FaReact, FaTachometerAlt, FaMobileAlt, FaRocket} from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

export const iconSlider = [
    //Group-n1//
    {
    className: "iconSlider",
    typeNameIcon: <FaHtml5 className="iconReact" size='2rem' />,
    languageWeb: "HTML5"
    },
    {
    className: "iconSlider",
    typeNameIcon: <FaJsSquare className="iconReact" size='2rem' />,
    languageWeb: "JavaScript"
    },
    {
    className: "iconSlider",
    typeNameIcon: <FaCss3Alt className="iconReact" size='2rem' />,
    languageWeb: "CSS3"
    },
    //Group-n2//
    {
    className: "iconSlider",
    typeNameIcon: <FaReact className="iconReact" size='2rem' />,
    languageWeb: "React"
    },
    {
    className: "iconSlider",
    typeNameIcon: <FaBootstrap className="iconReact" size='2rem' />,
    languageWeb: "BootStrap"
    },
    {
    className: "iconSlider",
    typeNameIcon: <FaNeos className="iconReact" size='2rem' />,
    languageWeb: "NextJs"
    },
    //Group-n3//
    {
    className: "iconSlider",
    typeNameIcon: <SiTypescript className="iconReact" size='2rem' />,
    languageWeb: "TypeScript"
    },
    {
    className: "iconSlider",
    typeNameIcon: <FaSass className="iconReact" size='2rem' />,
    languageWeb: "SASS"
    },
    {
    className: "iconSlider",
    typeNameIcon: <FaGithubSquare className="iconReact" size='2rem' />,
    languageWeb: "GitHub"
    },
]

export const iconWebSkills = [
    {
        typeNameIcon: <FaTachometerAlt className="iconReact" size="3.5rem" />,
        h2:"╓ Rapide ╖",
        p:"Chargement du site rapide"
    },
    {
        typeNameIcon: <FaMobileAlt className="iconReact" size="3.5rem" />,
        h2:"╓ Responsive ╖",
        p:"Mises en page grandes ou petites"
    },
    {
        typeNameIcon: <FaRocket className="iconReact" size="3.5rem" />,
        h2:"╓ Dynamique ╖",
        p:"Sites Web dynamiques et fluide"
    }
]