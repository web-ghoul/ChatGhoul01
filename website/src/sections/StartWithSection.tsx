import Container from "../components/Container"
import Logo from "../components/Logo"

const StartWithSection = () => {
    return (
        <Container class={`rounded-b-[50px] grid justify-stretch items-center min-h-[50vh] gap-2 bg-primary_gradient content-center border-b-[2px] border-solid border-primary`}>
            <Logo hideTitle logoClass={`!w-40 !h-40`} />
            <div class={`grid justify-center items-center gap-10`}>
                <h1 class={`text-6xl !font-[500] text-white text-center`}>Start using <br /> <span class={`text-primary`}>ChatGhoul</span> today!</h1>
                <div class={`flex justify-center items-center`}>
                    <button class={"basic_button m-auto"}>
                        Download with Expo 
                        <img src="./images/expo.png" alt="expo" class={`w-[20px]`} />
                    </button>
                </div>
            </div>
        </Container>
    )
}

export default StartWithSection
