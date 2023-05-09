import {
    ContainerNav,
    Title,
    SectionOptions,
    Options,
    SectionMobile,
    Icon,
    Overlay,
    SectionOptionsMobile,
    OptionsMobile
} from './styles'
import Hamburger from '../../assets/icon-hamburger.svg'
import Close from '../../assets/icon-close.svg'

import { useState, useEffect } from 'react'

function NavBar() {

    const [showNavBar, setShowNavBar] = useState(false)

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
                <>
                    {!showNavBar ? (
                        <SectionMobile>
                            <Icon onClick={() => setShowNavBar(true)} src={Hamburger} alt='' />
                            <Title>room</Title>
                        </SectionMobile>
                    ) : (
                        <Overlay>
                            <SectionOptionsMobile>
                                <Icon onClick={() => setShowNavBar(false)} src={Close} alt='' />
                                <OptionsMobile>home</OptionsMobile>
                                <OptionsMobile>shop</OptionsMobile>
                                <OptionsMobile>about</OptionsMobile>
                                <OptionsMobile>contact</OptionsMobile>
                            </SectionOptionsMobile>
                        </Overlay>
                    )}
                </>
            }
        </ContainerNav>
    )
}

export default NavBar