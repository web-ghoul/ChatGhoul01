import { A } from "@solidjs/router"
import LottiePlayer from "./LottiePlayer"
import logoJson from "../../public/images/logo.json"

const Logo = ({ theme, hideTitle, logoClass }: { theme?: "light" | "dark"; hideTitle?: boolean; logoClass?: string }) => {
  return (
    <A href={`${import.meta.env.VITE_HOME_ROUTE}`} class="flex justify-center items-center hover:cursor-pointer">
      {/* <img src={"./images/logo.png"} alt={"logo"} class="w-[40px]" /> */}
      <LottiePlayer animationData={logoJson} className={`w-19 h-20 ${logoClass}`} />
      {!hideTitle && <h5 class={`${theme === "light" ? "text-white" : "text-primary"} text-2xl !font-[700]`}>ChatGhoul</h5>}
    </A>
  )
}

export default Logo
