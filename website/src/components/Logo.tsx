import { A } from "@solidjs/router"

const Logo = () => {
  return (
    <A href={`${import.meta.env.VITE_HOME_ROUTE}`} class="flex justify-center items-center gap-3 hover:cursor-pointer"> 
        <img src={"./images/logo.png"} alt={"logo"} class="w-[40px]" />
        <h5 class="text-primary text-2xl !font-[700]">ChatGhoul</h5>
    </A>
  )
}

export default Logo
