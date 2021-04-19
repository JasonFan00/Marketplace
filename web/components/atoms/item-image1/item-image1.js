import React from 'react';
import Image from 'next/image';



function ImageType1(props) {
    return (
        <Image src={props.src} alt="placeholder" width={680} height={360} layout="responsive"/>
    )
}

export default ImageType1;