import Head from "next/head";
import SimulationResult from "../components/SimulationResult";
import Simulator from "../components/Simulator";
import { Header, Main } from "../styles/Home";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Simulador de Investimentos</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <Header>
          <h1>Simulador de Investimentos</h1>
        </Header>
        <Main>
          <Simulator />
          <SimulationResult />
        </Main>
      </body>
    </div>
  );
}
