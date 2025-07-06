import Container from "../components/Container"

const MessagesSection = () => {
    return (
        <Container class="grid justify-stretch items-center gap-6 min-h-screen">
            <img src={"./images/people_1.png"} alt={'messages_1'} class="m-auto w-full" />
            <h2 class="text-5xl text-center text-white">With private messaging and calling, you can be yourself, speak freely and feel close to the most important people in your life no matter where they are.</h2>
            <img src={"./images/people_2.png"} alt={'messages_2'} class="m-auto w-full" />
        </Container>
    )
}

export default MessagesSection
