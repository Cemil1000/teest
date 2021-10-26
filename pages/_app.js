import '../styles/link-globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

import 'slick-carousel/slick/slick.css'

//? import 'swiper/css/bundle => ça import tout les 'swipe/css' mais utilise bc de ressource ';
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
