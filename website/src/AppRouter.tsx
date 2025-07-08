import { Route, Router } from '@solidjs/router'
import Home from "./pages/Home";
import Android from "./pages/Android";
import About from "./pages/About";
import App from './App'
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';

const AppRouter = () => {
    return (
        <Router root={App}>
            <Route path={`${import.meta.env.VITE_HOME_ROUTE}`} component={Home} />
            <Route path={`${import.meta.env.VITE_ABOUT_US_ROUTE}`} component={About} />
            <Route path={`${import.meta.env.VITE_CONTACT_ROUTE}`} component={Contact} />
            <Route path={`${import.meta.env.VITE_ANDROID_ROUTE}`} component={Android} />
            <Route path={`${import.meta.env.VITE_PRIVACY_ROUTE}`} component={Privacy} />
        </Router>
    )
}

export default AppRouter
