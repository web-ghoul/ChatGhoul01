import { JSX, children } from "solid-js";

interface ContainerProps {
  children: JSX.Element; 
  class?: string;
}

const Container = (props: ContainerProps) => {
  const resolved = children(() => props.children);

  return (
    <div class={`!px-12 ${props.class ?? ''}`}>
      {resolved()}
    </div>
  );
};

export default Container;
