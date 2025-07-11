import { SendHorizontal } from 'lucide-solid'
import Container from '../components/Container'

const ContactUsSection = () => {
    return (
        <Container class={`grid justify-stretch items-center gap-6 grid-cols-2 min-h-screen`}>
            <div class={`grid justify-stretch items-center gap-8 text-white w-[75%]`}>
                <h1 class={`text-7xl !font-[600]`}>have a <br /> Question ?</h1>
                <h6 class={`text-lg !font-[400]`}>We're here to help! Fil out the form or reach us via email or phone. Our Customer Care Team is avaliable to help you get the best experience.</h6>
            </div>
            <div class={`rounded-xl !shadow-lg !p-6 grid justify-stretch items-center gap-6 bg-primary_gradient_reverse`}>
                <h4 class={`text-2xl text-white !font-[600]`}>We'd Love to hear from you! <br /> Let's get in touch</h4>
                <div class={`grid justify-stretch items-center gap-5`}>
                    <div class={`grid justify-stretch items-center gap-3`}>
                        <div class={`grid justify-stretch items-center grid-cols-2 gap-3`}>
                            <input type={"text"} placeholder={`First Name`} />
                            <input type={"text"} placeholder={`Last Name`} />
                        </div>
                        <input type={"email"} placeholder={`Email`} />
                        <input type={"tel"} placeholder={`Phone Number`} />
                        <textarea placeholder='Message...' rows={4}>
                        </textarea>
                    </div>
                    <button class={'secondary_button'}>
                        Send
                        <SendHorizontal size={20} />
                    </button>
                </div>
            </div>
        </Container>
    )
}

export default ContactUsSection
