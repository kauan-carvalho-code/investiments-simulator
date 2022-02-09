import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import api from "../services/api";
import { IIndicator, ISimulation } from "../types";

interface SimulatorProviderProps {
  children: ReactNode;
}

interface SimulatorContextData {
  incomeType: string;
  setIncomeType: Dispatch<SetStateAction<string>>;
  indexingType: string;
  setIndexingType: Dispatch<SetStateAction<string>>;
  initialContribution: number;
  setInitialContribution: Dispatch<SetStateAction<number>>;
  monthlyContribution: number;
  setMonthlyContribution: Dispatch<SetStateAction<number>>;
  deadline: number;
  setDeadline: Dispatch<SetStateAction<number>>;
  profitability: number;
  setProfitability: Dispatch<SetStateAction<number>>;
  ipcaValue: number;
  setIpcaValue: Dispatch<SetStateAction<number>>;
  cdiValue: number;
  setCdiValue: Dispatch<SetStateAction<number>>;
  clearSimulator: () => void;
  simulate: (income: string, indexing: string) => void;
  simulation: ISimulation;
}

const SimulatorContext = createContext<SimulatorContextData>(
  {} as SimulatorContextData
);

export function SimulatorProvider({ children }: SimulatorProviderProps) {
  const [incomeType, setIncomeType] = useState("bruto");
  const [indexingType, setIndexingType] = useState("pre");
  const [initialContribution, setInitialContribution] = useState(0);
  const [monthlyContribution, setMonthlyContribution] = useState(0);
  const [deadline, setDeadline] = useState(0);
  const [profitability, setProfitability] = useState(0);
  const [ipcaValue, setIpcaValue] = useState(0);
  const [cdiValue, setCdiValue] = useState(0);
  const [simulation, setSimulation] = useState<ISimulation>();

  useEffect(() => {
    api.get("/indicadores").then(({ data }) =>
      data.forEach((curr: IIndicator) => {
        if (curr.nome === "cdi") {
          setCdiValue(curr.valor);
          return;
        }
        setIpcaValue(curr.valor);
      })
    );
  }, []);

  const simulate = (income: string, indexing: string) => {
    api
      .get(`/simulacoes?tipoIndexacao=${indexing}&tipoRendimento=${income}`)
      .then(({ data }) => setSimulation(data));
  };

  const clearSimulator = () => {
    setIncomeType("bruto");
    setIndexingType("pre");
    setInitialContribution(0);
    setMonthlyContribution(0);
    setDeadline(0);
    setProfitability(0);
  };

  const SimulatorContextValue = useMemo(
    () => ({
      incomeType,
      setIncomeType,
      indexingType,
      setIndexingType,
      initialContribution,
      setInitialContribution,
      monthlyContribution,
      setMonthlyContribution,
      deadline,
      setDeadline,
      profitability,
      setProfitability,
      ipcaValue,
      setIpcaValue,
      cdiValue,
      setCdiValue,
      clearSimulator,
      simulate,
      simulation,
    }),
    [
      incomeType,
      indexingType,
      initialContribution,
      monthlyContribution,
      deadline,
      profitability,
      ipcaValue,
      cdiValue,
      simulation,
    ]
  );

  return (
    <SimulatorContext.Provider value={SimulatorContextValue}>
      {children}
    </SimulatorContext.Provider>
  );
}

export function useSimulator() {
  const context = useContext(SimulatorContext);

  return context;
}
