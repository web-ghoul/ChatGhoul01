import Container from "../components/Container"

const HeroSection = () => {
    return (
        <Container class="grid justify-stretch items-center !py-8 hero_section">
            <div class="bg-hero bg-cover bg-center bg-no-repeat rounded-3xl w-full h-full relative overflow-hidden">
                <div class="absolute z-[0] w-full h-full left-0 top-0 bg-[rgba(0,0,0,0.5)]" />

            </div>
        </Container>
    )
}

export default HeroSection
