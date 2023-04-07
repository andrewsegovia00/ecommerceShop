import { NextPage } from "next";
import Link from "next/link";

const Cancel: NextPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-center">
                You cancelled!
                <br />
                Thanks for trying out the store
            </h1>
            <Link href="/">
                <a className="mt-8 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                    Go back to home page
                </a>
            </Link>
        </div>
    );
};

export default Cancel;
