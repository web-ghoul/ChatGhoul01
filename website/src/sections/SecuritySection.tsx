import Container from "../components/Container"

const SecuritySection = () => {
    return (
        <Container class={`bg-primary_gradient h-screen flex justify-center items-center rounded-b-[50px]`}>
            <div class={`grid justify-center items-center gap-6 grid-cols-2`}>
                <div class="grid justify-start items-center gap-4 text-white w-3/4">
                    <h2 class="text-5xl !font-[700]">
                        <span class="text-primary">Security</span> <br />
                        and Safety
                    </h2>
                    <h6 class="text-lg">Protect your account from hackers and scammers and stop unwanted chats.</h6>
                </div>
                <img src="./images/block_screen.png" alt="block screen" />
            </div>
        </Container>
    )
}

export default SecuritySection
