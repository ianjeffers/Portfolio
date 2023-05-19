import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import backgroundImg from '../images/background.jpg'; // Import your background image

function BackgroundParallax() {
    const parallax = useRef(null);

    return (
        <Parallax ref={parallax} pages={3}>
            <ParallaxLayer 
                offset={0}
                speed={0}
                factor={3}
                style={{
                    backgroundImage: `url(${backgroundImg})`,
                    backgroundSize: 'cover',
                    zIndex: -1,
                }}
            />
        </Parallax>
    );
}

export default BackgroundParallax;
