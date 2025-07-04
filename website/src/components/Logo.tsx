import { A } from "@solidjs/router"
import LottiePlayer from "./LottiePlayer"
import logoJson from "../../public/images/logo.json"

const Logo = () => {
  return (
    <A href={`${import.meta.env.VITE_HOME_ROUTE}`} class="flex justify-center items-center hover:cursor-pointer">
      {/* <img src={"./images/logo.png"} alt={"logo"} class="w-[40px]" /> */}
      <LottiePlayer animationData={logoJson} className="w-19 h-20" />
      <h5 class="text-primary text-2xl !font-[700]">ChatGhoul</h5>
    </A>
  )
}

export default Logo
