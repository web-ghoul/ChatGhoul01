import { JSX, children } from "solid-js";

interface ContainerProps {
  children: JSX.Element; 
  class?: string;
}

const Container = (props: ContainerProps) => {
  const resolved = children(() => props.children);

  return (
    <section class={`!px-12 !py-12 ${props.class ?? ''}`}>
      {resolved()}
    </section>
  );
};

export default Container;
