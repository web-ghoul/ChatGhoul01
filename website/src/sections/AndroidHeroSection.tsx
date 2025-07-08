import { ArrowDownToLine } from 'lucide-solid'
import Container from '../components/Container'

const AndroidHeroSection = () => {
    return (
        <Container class='hero_section'>
            <Container class={`grid justify-stretch items-center grid-cols-2 gap-8`}>
                <div class={`grid justify-stretch items-center h-full gap-10 text-white`}>
                    <div class='grid justify-stretch items-center gap-4'>
                        <h1 class='text-7xl !font-[700]'>Download <span class={`text-primary`}>ChatGhoul</span> <br /> for Android</h1>
                        <h6 class='text-xl !font-[400]'>Simple, reliable, private messaging and calling all over the world.</h6>
                    </div>
                    <div class="flex justify-stretch items-center gap-6">
                        <button class={"basic_button"}>
                            Download with Expo
                            <img src="./images/expo.png" alt="expo" class={`w-[20px]`} />
                        </button>
                        <button class={'primary_button'}>
                            Download
                            <ArrowDownToLine size={18} />
                        </button>
                    </div>
                </div>
                <div class='flex justify-end'>
                    <img src="./images/android_hero.png" alt="android" />
                </div>
            </Container>
        </Container>
    )
}

export default AndroidHeroSection
