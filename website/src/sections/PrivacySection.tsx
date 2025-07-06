import Container from "../components/Container"

const PrivacySection = () => {
    return (
        <Container class="grid justify-center items-center content-evenly text-white gap-2 min-h-screen bg-primary_gradient_reverse">
            <h2 class="text-5xl text-center !font-[600] w-3/4 !m-auto">Whether it’s your confessions, your difficult debates, or silly inside jokes, WhatsApp privacy helps your conversations stay protected.</h2>
            <div class="grid justify-stretch items-start grid-cols-3 gap-6 w-3/4 !m-auto">
                <div class="grid justify-center items-center text-center gap-3">
                    <h5 class="!font-[500] text-2xl">End-to-end encryption</h5>
                    <h6 class="!font-[400] text-lg">Personal messages, calls, photos and videos are secured with a lock with end-to-end encryption on WhatsApp, only the recipient and you have the special key needed to unlock and read them.</h6>
                </div>

                <div class="grid justify-center items-center text-center gap-3">
                    <h5 class="!font-[500] text-2xl">Additional layers of privacy</h5>
                    <h6 class="!font-[400] text-lg">Beyond end-to-end encryption, WhatsApp offers additional layers of protection to all of your conversations.</h6>
                </div>

                <div class="grid justify-center items-center text-center gap-3">
                    <h5 class="!font-[500] text-2xl">Control the privacy you need</h5>
                    <h6 class="!font-[400] text-lg">With WhatsApp privacy settings, you get to choose what you share, how you show up online, or who can talk to you.</h6>
                </div>
            </div>
        </Container>
    )
}

export default PrivacySection
