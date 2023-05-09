import {
    ContainerHome,
    SectionHeader,
    SectionImage,
    SectionText,
    Title,
    Label,
    ButtonShop,
    Sliders,
    SliderPrev,
    SliderNext,
    SectionBellow,
    FirstImage,
    Text,
    TitleBellow,
    LabelBellow,
    SecondImage,
    SectionSlider
} from './styles'

import Hero1 from '../../assets/desktop-image-hero-1.jpg'
import Hero2 from '../../assets/desktop-image-hero-2.jpg'
import Hero3 from '../../assets/desktop-image-hero-3.jpg'
import ArrowPrev from '../../assets/icon-angle-left.svg'
import ArrowNext from '../../assets/icon-angle-right.svg'
import FirstImageDark from '../../assets/image-about-dark.jpg'
import SecondImageLight from '../../assets/image-about-light.jpg'
import Arrow from '../../assets/icon-arrow.svg'
import { useState, useEffect } from 'react'
import NavBar from '../NavBar'


function Home() {

    const [hero1, setHero1] = useState(true)
    const [hero2, setHero2] = useState(false)
    const [hero3, setHero3] = useState(false)

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
        <ContainerHome>
            <SectionHeader>
                <NavBar />
                {hero1 && (
                    <>
                        <SectionImage src={Hero1} height={!mobile ? (600) : (300)} />
                        <SectionText>
                            <Title>Discover innovative ways to decorate</Title>
                            <Label>We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing
                                your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.
                            </Label>
                            <ButtonShop>SHOP NOW
                                <img src={Arrow} alt="" />
                            </ButtonShop>
                            <Sliders>
                                <SectionSlider>
                                    <SliderPrev onClick={() => {
                                        setHero1(false)
                                        setHero3(true)
                                    }} src={ArrowPrev} />
                                </SectionSlider>
                                <SectionSlider>
                                    <SliderNext onClick={() => {
                                        setHero1(false)
                                        setHero2(true)
                                    }} src={ArrowNext} />
                                </SectionSlider>
                            </Sliders>
                        </SectionText>
                    </>
                )}
                {hero2 && (
                    <>
                        <SectionImage src={Hero2} height={!mobile ? (600) : (300)} />
                        <SectionText>
                            <Title>We are available all across the globe</Title>
                            <Label>With stores all over the world, it's easy for you to find furniture for your home or place of business.
                                Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.
                            </Label>
                            <ButtonShop>SHOP NOW
                                <img src={Arrow} alt="" />
                            </ButtonShop>
                            <Sliders>
                                <SectionSlider>
                                    <SliderPrev onClick={() => {
                                        setHero2(false)
                                        setHero1(true)
                                    }} src={ArrowPrev} />
                                </SectionSlider>
                                <SectionSlider>
                                    <SliderNext onClick={() => {
                                        setHero2(false)
                                        setHero3(true)
                                    }} src={ArrowNext} />
                                </SectionSlider>
                            </Sliders>
                        </SectionText>
                    </>
                )}
                {hero3 && (
                    <>
                        <SectionImage src={Hero3} height={!mobile ? (600) : (300)} />
                        <SectionText>
                            <Title>Manufactured with the best materials</Title>
                            <Label>Our modern furniture store provides a high level of quality. Our company has invested in advanced technology to ensure that
                                every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what
                                customers want for their home and office.
                            </Label>
                            <ButtonShop>SHOP NOW
                                <img src={Arrow} alt="" />
                            </ButtonShop>
                            <Sliders>
                                <SectionSlider>
                                    <SliderPrev onClick={() => {
                                        setHero3(false)
                                        setHero2(true)
                                    }} src={ArrowPrev} />
                                </SectionSlider>
                                <SectionSlider>
                                    <SliderNext onClick={() => {
                                        setHero3(false)
                                        setHero1(true)
                                    }} src={ArrowNext} />
                                </SectionSlider>
                            </Sliders>
                        </SectionText>
                    </>
                )}
            </SectionHeader>
            <SectionBellow>
                <FirstImage src={FirstImageDark} />
                <Text>
                    <TitleBellow>ABOUT OUR FURNITURE</TitleBellow>
                    <LabelBellow>Our multifunctional collection blends design and functional to suit your individual taste. Make each room unique, or pick a cohesive
                        theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything
                        in between. Product specialists are available to help you create your dream space.
                    </LabelBellow>
                </Text>
                <SecondImage src={SecondImageLight} />
            </SectionBellow>
        </ContainerHome>
    )
}

export default Home;