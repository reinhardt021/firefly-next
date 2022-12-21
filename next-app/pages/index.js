import Head from 'next/head'

export default function Main() {

  return (
    <>
      <Head>
        <title>Firefly</title>
        <meta name="description" content="Your space to write down that spark of an idea" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <main className="body__mask body__mask--dark">
        <h1> MAIN </h1>
      </main>
    </>
  );
}
