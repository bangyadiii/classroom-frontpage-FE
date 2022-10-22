import Router from "next/router";
import "../../styles/styles.css";
import { ToastContainer } from "react-toastify";
import "nprogress/nprogress.css";
import "react-toastify/dist/ReactToastify.css";
import { start, finish } from "../utils/nprogress.handler";
import Head from "next/head";

// NProgress.configure({ color: "#fff" });
Router.events.on("routeChangeStart", start);
Router.events.on("routeChangeComplete", finish);
Router.events.on("routeChangeError", finish);

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Classroom Micro</title>
            </Head>
            <Component {...pageProps} />
            <ToastContainer position="top-right"></ToastContainer>
        </>
    );
}

export default MyApp;
