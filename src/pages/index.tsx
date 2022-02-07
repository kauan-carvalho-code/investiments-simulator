import Head from "next/head";
import Simulator from "../components/Simulator";

function Home() {
  return (
    <div>
      <Head>
        <title>Simulador de Investimentos</title>
        <meta name="description" content="created by: Kauan Carvalho" />
      </Head>
      <body>
        <header>
          <h1>Simulador de Investimentos</h1>
        </header>
        <main>
          <Simulator />
        </main>
      </body>
    </div>
  );
}

export default Home;
