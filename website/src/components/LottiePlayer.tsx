import { onCleanup, onMount } from "solid-js";
import lottie from "lottie-web";

interface LottiePlayerProps {
  animationData: any;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
}

const LottiePlayer = (props: LottiePlayerProps) => {
  let container: HTMLDivElement;

  onMount(() => {
    const anim = lottie.loadAnimation({
      container,
      renderer: "svg",
      loop: props.loop ?? true,
      autoplay: props.autoplay ?? true,
      animationData: props.animationData,
    });

    onCleanup(() => anim.destroy());
  });

  return <div ref={el => (container = el)} class={props.className} />;
};

export default LottiePlayer;
