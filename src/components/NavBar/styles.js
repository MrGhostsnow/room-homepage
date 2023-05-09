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
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;