import styled from 'styled-components'

export const ContainerNav = styled.div`
    display: flex;
    width: 500px;
    position: absolute;
    margin-left: 4rem;
    margin-top: 1.5rem;

    @media screen and (max-width: 542px){
        width: 100%;
        margin-left: -0.1rem;
        margin-top: -0.3rem;
    }
`;

export const Title = styled.p`
    color: #fff;
    font-weight: 700;
    font-size: 27px;
`;

export const SectionOptions = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    width: 200px;
    color: #fff;
    gap: 2rem;
`;

export const Options = styled.li`
`;

export const SectionMobile = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 3rem;
`;

export const Icon = styled.img`
`;

export const Overlay = styled.div`
    position: fixed; 
    display: flex; 
    flex-direction: column;
    width: 100%; 
    height: 100%; 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0,0.6); 
    z-index: 2; 
    cursor: pointer; 
`;

export const SectionOptionsMobile = styled.div`
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    color: #fff;
    gap: 4rem;
    height: 80px;
`;

export const OptionsMobile = styled.li`
    color: #000;
    font-weight: 600;
    margin-left: -2rem;
    font-size: 14px;

`;