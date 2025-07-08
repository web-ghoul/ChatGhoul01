import { ChevronDown, ChevronRight, ChevronUp } from "lucide-solid"
import { createSignal } from "solid-js"
import data from "../data/accordion.json"

const DynamicAccordion = () => {
    const [accordion, setAccordion] = createSignal(-1)

    return (
        <div class={`grid justify-stretch items-center gap-10`}>
            {
                data.map((acc, i) =>
                    <div class={`grid justify-stretch items-center gap-2`} onClick={() => {
                        if (accordion() === i) { setAccordion(-1) } 
                        else { setAccordion(i) }
                    }}>
                        <div class={`relative h-[6px] ${accordion() === i ? "bg-primary" : "bg-[#333]"} rounded-full w-full`}>
                        </div>
                        <div class={`grid justify-stretch items-center gap-6`}>
                            <button class={`flex justify-between items-center gap-4`}>
                                <h4 class={`text-2xl !font-[600]`}>{acc.title}</h4>
                                {accordion() === i ? <ChevronUp /> : <ChevronDown />}
                            </button>
                            <div class={`transition-all ${accordion() === i ? "h-full overflow-visible" : "h-[0px] overflow-hidden"}`}>
                                <h6 class={`text-lg !font-[300]`}>{acc.content}</h6>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    )
}

export default DynamicAccordion
