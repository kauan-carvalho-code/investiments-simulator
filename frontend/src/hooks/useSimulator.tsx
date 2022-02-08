import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";

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
}

const SimulatorContext = createContext<SimulatorContextData>(
  {} as SimulatorContextData
);

export function SimulatorProvider({ children }: SimulatorProviderProps) {
  const [incomeType, setIncomeType] = useState("gross");
  const [indexingType, setIndexingType] = useState("PRÉ");
  const [initialContribution, setInitialContribution] = useState(0);
  const [monthlyContribution, setMonthlyContribution] = useState(0);
  const [deadline, setDeadline] = useState(0);
  const [profitability, setProfitability] = useState(0);
  const [ipcaValue, setIpcaValue] = useState(0);
  const [cdiValue, setCdiValue] = useState(0);

  const clearSimulator = () => {
    setIncomeType("gross");
    setIndexingType("PRÉ");
    setInitialContribution(0);
    setMonthlyContribution(0);
    setDeadline(0);
    setProfitability(0);
    setIpcaValue(0);
    setCdiValue(0);
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
