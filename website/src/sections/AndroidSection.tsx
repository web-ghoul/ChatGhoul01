import Container from "../components/Container"
import DynamicAccordion from "../components/DynamicAccordion"

const AndroidSection = () => {
    return (
        <Container class={`bg-primary_gradient grid justify-center items-center gap-10 min-h-screen text-white`}>
            <h2 class={`text-4xl !font-[600]`}>Simple, reliable, private messaging and calling all over the world.</h2>
            <div class={`grid justify-center items-center grid-cols-2 gap-6`}>
                <img src="./images/android_screen.png" alt="android" />
                <DynamicAccordion />
            </div>
        </Container>
    )
}

export default AndroidSection
