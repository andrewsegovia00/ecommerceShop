import type { GetServerSideProps, NextPage } from 'next'
import { useContext, useEffect } from "react";
import Stripe from 'stripe';
import ProductCard from "../components/ProductCard";
import CartContext from "../components/context/CartContext";
import Header from "../components/Header";

export const getServerSideProps: GetServerSideProps = async (context) => {
    console.log(process.env.STRIPE_SECRET_KEY)
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
        apiVersion: '2020-08-27',
    });

    const res = await stripe.prices.list({
        limit: 10,
        expand: ['data.product']
    });

    const prices = res.data.filter(price => {
        return price.active;
    })

    return {
        props: {
            prices
        },
    }
}

type Props = {
    prices: Stripe.Price[]
}

const Home: NextPage<Props> = ({ prices }) => {
    return (
        <main className="bg-gray-100 min-h-screen">
            <Header />

            <div className="w-auto mx-10 py-8">
                <div className="flex items-center justify-between border-b pb-3">
                    <h1 className="font-semibold tracking-wide leading-10 text-xl lg:text-3xl">
                        Trending Games
                    </h1>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                    {
                        prices.map(p => (
                            <ProductCard key={p.id} price={p} />
                        ))
                    }
                </div>
            </div>
        </main>
    )
}

export default Home
