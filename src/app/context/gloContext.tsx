"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type gloContextProps = {
  children: ReactNode;
};

type gloContext = {
  gloInstances: TInstance[];
  setGloInstances: Dispatch<SetStateAction<TInstance[]>>;
};

export const gloContext = createContext<gloContext | null>(null);

export default function GloContextProvider({ children }: gloContextProps) {
  const [gloInstances, setGloInstances] = useState<TInstance[]>([]);

  useEffect(() => {
    const instancesFromLocalStore = JSON.parse(
      localStorage.getItem("instances") || "{}"
    );

    if (instancesFromLocalStore === null || instancesFromLocalStore === "")
      return;

    setGloInstances(instancesFromLocalStore);
  }, []);

  return (
    <gloContext.Provider value={{ gloInstances, setGloInstances }}>
      {children}
    </gloContext.Provider>
  );
}

export function useGloContext() {
  const context = useContext(gloContext);

  if (context?.gloInstances === undefined) throw new Error("Error");

  return { ...context };
}
