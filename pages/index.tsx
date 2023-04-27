import Head from "next/head";
import { Homepage } from "@/components/home/Homepage";
import { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 6000);

  return (
    <>
      <Head>
        <title>Portyfolio</title>
        <meta name="description" content="Make your own visual resume today for free with portyfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? (
        <div className="loader">
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="box3"></div>
      </div>
      ) : (
        <Homepage />
      )}
    </>
  );
}
