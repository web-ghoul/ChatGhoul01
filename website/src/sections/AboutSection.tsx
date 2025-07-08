import Container from "../components/Container"

const AboutSection = () => {
    return (
        <Container class={`bg-[#111] rounded-b-[50px] hero_section`}>
            <Container class={`grid justify-stretch items-center gap-10 text-white`}>
                <h1 class={`text-6xl !font-[700]`}>About ChatGhoul</h1>
                <div class={`grid justify-stretch items-center gap-3`}>
                    <h3 class={`text-3xl !font-[600]`}>Our App</h3>
                    <h6 class={`text-lg !font-[400] w-[50%]`}>More than 2 billion people in over 180 countries use WhatsApp1 to stay in touch with friends and family, anytime and anywhere. WhatsApp is free2 and offers simple, secure, reliable messaging and calling, available on phones all over the world.</h6>
                </div>
                <div class={`grid justify-stretch items-center gap-3`}>
                    <h3 class={`text-3xl !font-[600]`}>Our Mission</h3>
                    <h6 class={`text-lg !font-[400] w-[65%]`}>ChatGhoul started as an alternative to SMS. Our product now supports sending and receiving a variety of media: text, photos, videos, documents, and location, as well as voice calls. Some of your most personal moments are shared with ChatGhoul, which is why we built end-to-end encryption into our app. Behind every product decision is our desire to let people communicate anywhere in the world without barriers.</h6>
                </div>
                <div class={`grid justify-stretch items-center gap-3`}>
                    <h3 class={`text-3xl !font-[600]`}>Our Team</h3>
                    <h6 class={`text-lg !font-[400] w-[75%]`}>ChatGhoul was founded by Jan Koum and Brian Acton who had previously spent 20 years combined at Yahoo. ChatGhoul joined Facebook in 2014, but continues to operate as a separate app with a laser focus on building a messaging service that works fast and reliably anywhere in the world.</h6>
                </div>
            </Container>
        </Container>
    )
}

export default AboutSection
