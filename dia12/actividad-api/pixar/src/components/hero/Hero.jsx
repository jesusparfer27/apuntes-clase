import {pixar} from '../../deb/deb'

const {hero} = pixar;


const Hero = () => {
    const {img, src, alt, imgLogo} = hero
    return (
        <div className='hero'>
        <img src={src} alt={alt} />
        <img src={imgLogo} alt={alt} />
        </div>
        
    )
}

export default Hero

// 