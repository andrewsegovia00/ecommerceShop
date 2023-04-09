import { NextPage } from "next";
import Link from "next/link"

const Success: NextPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-center">
                Thanks for your Purchase!
            </h1>
            <Link href="https://main--sunny-travesseiro-feb150.netlify.app/success">
                <a className="mt-8 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                    Continue Shopping
                </a>
            </Link>
        </div>
    );
};

export default Success;
