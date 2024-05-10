import styled from "styled-components";

export const Image = styled.img`
    width: 100%;
    max-width: 720px;
    max-height: 125px;
    height: auto;
    transition: all 0.3s;
    object-fit: fill;
    border-radius: 20px;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Wrapper = styled.div`
    background: linear-gradient(
        to bottom, rgba(0, 0, 0, 0)
        26%, rgba(0, 0, 0, 0.65)
        100%
    ),
    url(${({ image }) => image }), var(--darkGrey);
    background-size: 100%, cover;
    background-position: center;
    height: 125px;
    position: relative;
    object-fit: fill;
    border-radius: 20px;
`;

export const AlignedGrid = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    h3{
        text-shadow: -1px -1px 0 var(--black), 1px -1px 0 var(--black), -1px 1px 0 var(--black), 1px 1px 0 var(--black);
    }

    p{
        text-shadow: -1px -1px 0 var(--black), 1px -1px 0 var(--black), -1px 1px 0 var(--black), 1px 1px 0 var(--black);
    }
`;
