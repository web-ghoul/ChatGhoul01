import { lazy } from "solid-js";

export const routes = [
    {
        path: `${import.meta.env.VITE_HOME_ROUTE}`,
        component: lazy(() => import("./pages/Home")),
    },
    {
        path: `${import.meta.env.VITE_ABOUT_US_ROUTE}`,
        component: lazy(() => import("./pages/About")),
    },
    {
        path: `${import.meta.env.VITE_DOWNLOAD_ROUTE}`,
        component: lazy(() => import("./pages/Download")),
    },
    {
        path: `${import.meta.env.VITE_ANDROID_ROUTE}`,
        component: lazy(() => import("./pages/Android")),
    },
    {
        path: `${import.meta.env.VITE_PRIVACY_ROUTE}`,
        component: lazy(() => import("./pages/privacy")),
    }
]
