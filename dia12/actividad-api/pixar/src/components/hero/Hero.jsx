import {pixar} from '../../deb/deb'

const {hero} = pixar;


const Hero = () => {
    const {img, src, alt, imgLogo} = hero
    return (
        <div>
        <h1>Hero</h1>
        <img src={src} alt={alt} />
        </div>
        
    )
}

export default Hero

// 