import { Route, Router } from '@solidjs/router'
import Home from "./pages/Home";
import Download from "./pages/Download";
import Android from "./pages/Android";
import About from "./pages/About";
import App from './App'
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';

const AppRouter = () => {
    return (
        <Router root={App}>
            <Route path="/" component={Home} />
            <Route path="/about-us" component={About} />
            <Route path="/contact-us" component={Contact} />
            <Route path="/android" component={Android} />
            <Route path="/download" component={Download} />
            <Route path="/privacy" component={Privacy} />
        </Router>
    )
}

export default AppRouter
