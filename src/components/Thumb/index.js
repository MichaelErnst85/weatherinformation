import React from 'react';
import { Wrapper, AlignedGrid } from './Thumb.styles';


const Thumb = ({city, temperature, image}) => {
    
    return(
        <Wrapper image = {image}>
            <AlignedGrid>
                <h3>{ city }</h3> 
            </AlignedGrid>
            <AlignedGrid>
                <p>{ temperature } °C</p>
            </AlignedGrid>
        </Wrapper>
    )
}

export default Thumb;