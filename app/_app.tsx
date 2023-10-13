import "../styles/globals.css";
import type { AppProps } from "next/app";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js"

const stripe = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_KEY_PUBLIC}`)

export default function App({Component, pageProps }: AppProps) {
    return (
        <>
        <Elements stripe={stripe}>
            <Component {...pageProps} />
        </Elements>
        </>
    );
}