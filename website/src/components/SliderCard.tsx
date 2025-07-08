import Logo from "./Logo";

const SliderCard = ({ data }: { data: { title: string; content: string } }) => {
    return (
        <article class="bg-[#111] h-[400px] min-w-[450px] rounded-xl flex flex-col !items-start justify-stretch gap-4 !p-6">
            <div class="flex justify-start items-start">
                <Logo hideTitle />
            </div> 
            <div class={`grid justify-stretch items-start gap-4 text-white`}>
                <h3 class={`text-2xl !font-[600]`}>{data.title}</h3>
                <p class={`text-lg !font-[300]`}>{data.content}</p>
            </div>
        </article>
    )
}

export default SliderCard
