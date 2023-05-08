import {
    ContainerNav,
    Title,
    SectionOptions,
    Options
} from './styles'

function NavBar() {
    return (
        <ContainerNav>
            <Title>romm</Title>
            <SectionOptions>
                <Options>home</Options>
                <Options>shop</Options>
                <Options>about</Options>
                <Options>contact</Options>
            </SectionOptions>
        </ContainerNav>
    )
}

export default NavBar