import Header from "./components/Header";
import Footer from "./components/Footer";

const App = (props:any) => {
  return (
    <main>
      <Header />
      {props.children}
      <Footer />
    </main>
  );
};

export default App;
