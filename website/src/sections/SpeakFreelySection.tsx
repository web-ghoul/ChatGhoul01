import Container from "../components/Container"

const SpeakFreelySection = () => {
    return (
        <Container class={`min-h-screen grid justify-stretch items-center grid-cols-2 gap-8 bg-primary_gradient`}>
            <img src={"../images/app.png"} alt={"chat_screne"} class={'h-full'} />
            <div class={`grid justify-stretch items-center gap-4`}>
                <h2 class="text-5xl text-white !font-[700]">Speak <span class='text-primary'>freely</span></h2>
                <h6 class='text-xl text-white w-[85%]'>With end-to-end encryption on WhatsApp, your personal messages and calls are secured with a lock. Only you and the person you're talking to can read or listen to them, and no one else, not even WhatsApp</h6>
            </div>
        </Container>
    )
}

export default SpeakFreelySection
