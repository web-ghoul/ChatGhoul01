import Header from "./components/Header";
import Footer from "./components/Footer";

const App = (props: any) => {
  return (
    <main class="!pt-[70px]">
      <Header />
      {props.children}
      <Footer />
    </main>
  );
};

export default App;
