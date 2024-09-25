import React from 'react';
import { Wrapper, AlignedGrid } from './Thumb.styles';


const Thumb = ({city, temperature, image, validtime, country}) => {
    
    return(
        <Wrapper image = {image}>
            <AlignedGrid>
                <h3>{ city }, {country}</h3> 
            </AlignedGrid>
            <AlignedGrid>
                <p>{ temperature } °C</p>
            </AlignedGrid>
            <AlignedGrid>
                <p>Time: { validtime } </p>
            </AlignedGrid>
        </Wrapper>
    )
}

export default Thumb;