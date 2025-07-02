import { effect } from "solid-js/web"
import Container from "./Container"
import Logo from "./Logo"
import { ArrowDownToLine, ChevronRight } from 'lucide-solid';
import { A } from "@solidjs/router";

const Header = () => {
  const listItemClasses = "text-xl transition"

  effect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY)
    })
  })
  return (
    <header class="h-[70px] flex justify-stretch items-center">
      <Container class="flex justify-between items-center gap-4">
        <Logo />
        <nav>
          <ul class="flex justify-center items-center gap-4">
            <li>
              <A href={`${import.meta.env.VITE_HOME_ROUTE}`} class={"text-xl transition-all !text-white hover:translate-y-[-2px]"}>
                Home
              </A>
            </li>
            <li class={listItemClasses}>
              <A href={`${import.meta.env.VITE_ABOUT_US_ROUTE}`} >
                About
              </A>
            </li>
            <li class={listItemClasses}>
              <A href={`${import.meta.env.VITE_DOWNLOAD_ROUTE}`} >
                Download
              </A>
            </li>
            <li class={listItemClasses}>
              <A href={`${import.meta.env.VITE_ANDROID_ROUTE}`} >
                Android
              </A>
            </li>
            <li class={listItemClasses}>
              <A href={`${import.meta.env.VITE_PRIVACY_ROUTE}`} >
                Privacy
              </A>
            </li>
          </ul>
        </nav>
        <div class="flex justify-center items-center gap-2">
          <button class={"basic"}>
            Log in
            <ChevronRight color={"white"} />
          </button>
          <button class={'primary'}>
            Download
            <ArrowDownToLine color={"white"} />
          </button>
        </div>
      </Container>
    </header>
  )
}

export default Header
