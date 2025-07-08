import { ChevronLeft, ChevronRight } from 'lucide-solid';
import Container from '../components/Container';
import SliderCard from '../components/SliderCard';
import data from "../data/stay_up_to_date.json"

const StayUpToDateSection = () => {
  let sliderRef: HTMLDivElement | undefined;
  let cardRef: HTMLDivElement | undefined;

  const handleSlide = (direction: 'left' | 'right') => {
    if (!sliderRef || !cardRef) return;
    const cardWidth = cardRef.offsetWidth;
    const style = window.getComputedStyle(cardRef);
    const gap = parseInt(style.marginRight || '0', 10);
    const scrollAmount = cardWidth + gap;
    sliderRef.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <Container class={`grid justify-stretch items-center gap-6 grid-cols-[35%,1fr] min-h-screen rounded-b-[50px] bg-primary_gradient_reverse`}>
      <div class={`grid justify-stretch items-stretch gap-10 !h-[400px] content-between bg-transparent`}>
        <div class="grid justify-stretch items-center gap-5">
          <h2 class='text-5xl !font-[700] text-white'>Stay up to date</h2>
          <h6 class='text-lg text-white !font-[300]'>
            Get the latest from WhatsApp: news, useful tips, and our newest features to help you stay connected.
          </h6>
        </div>
        <div class='flex justify-stretch items-center gap-6'>
          <button
            class="slider_button disabled:opacity-30 disabled:cursor-not-allowed"
            onClick={() => handleSlide('left')}
          >
            <span class='hidden'>.</span>
            <ChevronLeft size={18} />
          </button>
          <button
            class="slider_button disabled:opacity-30 disabled:cursor-not-allowed"
            onClick={() => handleSlide('right')}
          >
            <span class='hidden'>.</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      <div
        ref={(el) => (sliderRef = el)}
        class={`flex gap-6 overflow-x-auto scroll-smooth no-scrollbar w-full relative snap-x snap-mandatory`}
      >
        {data.map((item, i) => (
          <div ref={i === 0 ? (el) => (cardRef = el) : undefined} class="snap-start">
            <SliderCard data={item} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default StayUpToDateSection;
