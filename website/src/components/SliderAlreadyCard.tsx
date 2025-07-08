
const SliderAlreadyCard = ({ data }: { data: { title: string; image: string } }) => {
    return (
        <div class={`grid justify-stretch items-start gap-10 w-[350px] h-[400px] text-white rounded-xl content-start`}>
            <div class={`rounded-xl bg-cover bg-no-repeat bg-center w-full h-[250px]`}
                style={{ "background-image": `url('${data.image}')` }}
            />
            <h5 class={`text-xl !font-[500]`}>{data.title}</h5>
        </div>
    )
}

export default SliderAlreadyCard
