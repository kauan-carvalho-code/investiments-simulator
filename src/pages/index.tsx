import Head from "next/head";
import Simulator from "../components/Simulator";
import { Header, Main } from "../styles/Home";

function Home() {
  return (
    <div>
      <Head>
        <title>Simulador de Investimentos</title>
        <meta name="description" content="created by: Kauan Carvalho" />
      </Head>
      <body>
        <Header>
          <h1>Simulador de Investimentos</h1>
        </Header>
        <Main>
          <Simulator />
        </Main>
      </body>
    </div>
  );
}

export default Home;
