import { ArrowDownToLine, Facebook, Instagram, Twitter, Youtube } from "lucide-solid"
import Container from "./Container"
import Logo from "./Logo"
import { A } from "@solidjs/router"

const Footer = () => {
  return (
    <footer class="py-6">
      <Container class={`grid justify-stretch items-center gap-6`}>
        <div class={`flex justify-between items-stretch content-stretch gap-6 min-h-[40vh]`}>
          <div class={`grid justify-stretch items-stretch content-between gap-4 !h-full`}>
            <Logo />
            <button class={'primary_button'}>
              Download
              <ArrowDownToLine size={18} />
            </button>
          </div>
          <div class={`grid justify-stretch items-stretch content-between gap-4`}>
            <h6 class="text-lg !font-[700] text-white">Who we are</h6>
            <ul class="grid justify-stretch items-center gap-3">
              <li>
                <A href={`${import.meta.env.VITE_ABOUT_ROUTE}`}>About Us</A>
              </li>
              <li>
                <A href={`${import.meta.env.VITE_PRIVACY_ROUTE}`}>Privacy</A>
              </li>
            </ul>
          </div>
          <div class={`grid justify-stretch items-stretch content-between gap-4`}>
            <h6 class="text-lg !font-[700] text-white">Use ChatGhoul</h6>
            <ul class="grid justify-stretch items-center gap-3">
              <li>
                <A href={`${import.meta.env.VITE_ANDROID_ROUTE}`}>Android</A>
              </li>
              <li>
                <a href={""}>ChatGhoul Web</a>
              </li>
            </ul>
          </div>
          <div class={`grid justify-stretch items-stretch content-between gap-4`}>
            <h6 class="text-lg !font-[700] text-white">Need help?</h6>
            <ul class="grid justify-stretch items-center gap-3">
              <li>
                <A href={`${import.meta.env.VITE_ANDROID_ROUTE}`}>Android</A>
              </li>
              <li>
                <a href={""}>ChatGhoul Web</a>
              </li>
            </ul>
          </div>
        </div>
        <hr class={`border-[#333]`} />
        <div class={`flex justify-between items-center gap-6 flex-wrap text-white`}>
          <h6 class={`text-md`}>{new Date().getFullYear()} © ChatGhoul LLC</h6>
          <A class={`text-md text-white transition-all hover:text-primary hover:cursor-pointer hover:underline`} href={`${import.meta.env.VITE_PRIVACY_ROUTE}`}>
            Terms & Privacy Policy
          </A>
          <div class="flex justify-center items-center gap-4">
            <div class="social_link">
              <Facebook size={18} />
            </div>
            <div class="social_link">
              <Instagram size={18} />
            </div>
            <div class="social_link">
              <Twitter size={18} />
            </div>
            <div class="social_link">
              <Youtube size={18} />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
