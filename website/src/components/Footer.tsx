import { ArrowDownToLine, Facebook, Instagram, Twitter, Youtube } from "lucide-solid"
import Container from "./Container"
import Logo from "./Logo"
import { A } from "@solidjs/router"

const Footer = () => {

  const itemClasses = `text-lg text-white transition-all !font-[600] hover:cursor-pointer hover:text-primary hover:translate-y-[-2px]`

  return (
    <footer class="!pt-8">
      <Container class={`grid justify-stretch items-center gap-12 w-3/4 !m-auto`}>
        <div class={`flex justify-between items-start content-stretch gap-6`}>
          <div class={`grid justify-stretch items-stretch content-between gap-10 !h-full`}>
            <Logo theme={"light"} />
            <button class={'primary_button'}>
              Download
              <ArrowDownToLine size={18} />
            </button>
          </div>
          <div class={`grid justify-stretch items-stretch gap-6`}>
            <h6 class="text-lg !font-[700] text-gray-400">Who we are</h6>
            <ul class="grid justify-stretch items-center gap-4">
              <li class={itemClasses}>
                <A href={`${import.meta.env.VITE_ABOUT_US_ROUTE}`}>About Us</A>
              </li>
              <li class={itemClasses}>
                <A href={`${import.meta.env.VITE_PRIVACY_ROUTE}`}>Privacy</A>
              </li>
            </ul>
          </div>
          <div class={`grid justify-stretch items-stretch gap-6`}>
            <h6 class="text-lg !font-[700] text-gray-400">Use ChatGhoul</h6>
            <ul class="grid justify-stretch items-center gap-4">
              <li class={itemClasses}>
                <A href={`${import.meta.env.VITE_ANDROID_ROUTE}`}>Android</A>
              </li>
              <li class={itemClasses}>
                <a href={`${import.meta.env.VITE_CHATGHOUL_WEB_URL}`}>ChatGhoul Web</a>
              </li>
            </ul>
          </div>
          <div class={`grid justify-stretch items-start gap-6`}>
            <h6 class="text-lg !font-[700] text-gray-400">Need help?</h6>
            <ul class="grid justify-stretch items-start gap-4">
              <li class={itemClasses}>
                <A href={`${import.meta.env.VITE_CONTACT_ROUTE}`}>Contact Us</A>
              </li>
            </ul>
          </div>
        </div>
        <hr class={`border-[#111]`} />
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
