import { effect } from "solid-js/web"
import Container from "./Container"
import Logo from "./Logo"
import { ArrowDownToLine, ChevronRight } from 'lucide-solid';
import { A, useLocation } from "@solidjs/router";
import { createSignal } from "solid-js";

const Header = () => {
  const [glassy, setGlassy] = createSignal(false)
  const { pathname } = useLocation()
  const listItemClasses = `text-lg transition-all text-white hover:translate-y-[-2px] p-2`

  effect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY)
      if (window.scrollY > 0) {
        setGlassy(true)
      } else {
        setGlassy(false)
      }
    })
  })
  return (
    <header class={`h-[70px] fixed top-0 z-[100] w-screen flex justify-stretch items-center ${glassy() && "glassy"}`}>
      <Container class="flex justify-between items-center gap-4 w-full">
        <Logo />
        <nav>
          <ul class="flex justify-center items-center gap-6">
            <li>
              <A href={`${import.meta.env.VITE_HOME_ROUTE}`} class={`${listItemClasses} ${pathname === `${import.meta.env.VITE_HOME_ROUTE}` && "!text-primary"}`}>
                Home
              </A>
            </li>
            <li class={listItemClasses}>
              <A href={`${import.meta.env.VITE_ABOUT_US_ROUTE}`} class={`${listItemClasses} ${pathname === `${import.meta.env.VITE_ABOUT_US_ROUTE}` && "!text-primary"}`}>
                About
              </A>
            </li>
            <li class={listItemClasses}>
              <A href={`${import.meta.env.VITE_DOWNLOAD_ROUTE}`} class={`${listItemClasses} ${pathname === `${import.meta.env.VITE_DOWNLOAD_ROUTE}` && "!text-primary"}`}>
                Download
              </A>
            </li>
            <li class={listItemClasses}>
              <A href={`${import.meta.env.VITE_ANDROID_ROUTE}`} class={`${listItemClasses} ${pathname === `${import.meta.env.VITE_ANDROID_ROUTE}` && "!text-primary"}`}>
                Android
              </A>
            </li>
            <li class={listItemClasses}>
              <A href={`${import.meta.env.VITE_PRIVACY_ROUTE}`} class={`${listItemClasses} ${pathname === `${import.meta.env.VITE_PRIVACY_ROUTE}` && "!text-primary"}`}>
                Privacy
              </A>
            </li>
          </ul>
        </nav>
        <div class="flex justify-center items-center gap-6">
          <button class={"basic_button"}>
            Log in
            <ChevronRight size={18} />
          </button>
          <button class={'primary_button'}>
            Download
            <ArrowDownToLine size={18} />
          </button>
        </div>
      </Container>
    </header>
  )
}

export default Header
