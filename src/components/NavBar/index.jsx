import {
    ContainerNav,
    Title,
    SectionOptions,
    Options,
    SectionMobile
} from './styles'

import { useState, useEffect } from 'react'

function NavBar() {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [width]);

    const mobile = (width <= 542);


    return (
        <ContainerNav>
            {!mobile ? (
                <>
                    <Title>room</Title>
                    <SectionOptions>
                        <Options>home</Options>
                        <Options>shop</Options>
                        <Options>about</Options>
                        <Options>contact</Options>
                    </SectionOptions>
                </>
            ) :
                <SectionMobile>
                    <Title>room</Title>
                </SectionMobile>
            }
        </ContainerNav>
    )
}

export default NavBar