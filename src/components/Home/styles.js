import styled from 'styled-components'

export const ContainerHome = styled.div``;

export const SectionHeader = styled.div`
    display: flex;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;

export const SectionImage = styled.img`
    width: 60%;

    @media screen and (max-width: 768px){
        width: 100%;
    }
    
`;

export const SectionText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media screen and (max-width: 768px){
        height: 400px;
    }
`;

export const Title = styled.p`
    font-size: 44px;
    font-weight: 700;
    width: 400px;
    text-align: left;
    margin-bottom: 0;
`;

export const Label = styled.p`
    font-size: 16px;
    font-weight: 500;
    width: 400px;
    text-align: left;
    color: hsl(0, 0%, 63%);
    line-height: 20px;
    `;

export const ButtonShop = styled.button`
    text-align: left;
    width: 72%;
    font-weight: 700;
    border: none;
    background-color: transparent;
    letter-spacing: 12px;
    
    @media screen and (max-width: 768px){
        width: 54%;
    }
`;

export const Sliders = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 13.4rem;
    right: 27.5rem;
    width: 137px;

    @media screen and (max-width: 768px){
        right: 0rem;
    }

    @media screen and (max-width: 542px){
        bottom: 32.2rem;
    }
`;

export const SectionSlider = styled.div`
    background-color: black;
    width: 100px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SliderNext = styled.img`


`;

export const SliderPrev = styled.img`

`;

export const SectionBellow = styled.div`
    display: flex;


    @media screen and (max-width: 1024px){
        flex-direction: column;
    }
`;

export const FirstImage = styled.img``;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media screen and (max-width: 768px){
        height: 300px;
    }

`;

export const TitleBellow = styled.p`
    font-size: 16px;
    font-weight: 700;
    width: 450px;
    text-align: left;
    margin-bottom: 0;

    @media screen and (max-width: 542px){
        width: 400px;
    }
`;

export const LabelBellow = styled.p`
    font-size: 16px;
    font-weight: 500;
    width: 450px;
    text-align: left;
    color: hsl(0, 0%, 63%);
    line-height: 20px;

    @media screen and (max-width: 542px){
        width: 400px;
    }
`;

export const SecondImage = styled.img``;