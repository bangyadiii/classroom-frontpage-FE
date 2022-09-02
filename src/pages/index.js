import Head from "next/head";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Head>
                <title>Home | NextJs</title>
            </Head>
            <div className="bg-gray-600 min-h-screen flex justify-center items-center">
                <h1 className=" text-white">Hello World</h1>
            </div>
        </>
    );
}
