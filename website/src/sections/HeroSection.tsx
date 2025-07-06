import { ArrowDownToLine, ChevronRight } from "lucide-solid"
import Container from "../components/Container"

const HeroSection = () => {
    return (
        <Container class="grid justify-stretch items-center !py-8 hero_section">
            <div class="bg-hero bg-cover bg-center bg-no-repeat rounded-3xl w-full h-full relative overflow-hidden">
                <div class="absolute z-[0] w-full h-full left-0 top-0 bg-[rgba(0,0,0,0.5)]" />
                <div class={`grid justify-stretch items-center gap-10 w-1/3 relative z-[1] !px-10 top-[50%] translate-y-[-50%]`}>
                    <div class={`grid justify-stretch items-center gap-6`}>
                        <h1 class="text-7xl !font-[700] !text-white">Message <br/> privately</h1>
                        <h6 class="text-xl !text-white">Simple, reliable, private messaging and calling for free*, available all over the world.</h6>
                    </div>
                    <div class="flex justify-stretch items-center gap-6">
                        <button class={"basic_button"}>
                            Log in
                            <ChevronRight size={18} />
                        </button>
                        <button class={'primary_button'}>
                            Download
                            <ArrowDownToLine size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default HeroSection
