"use client";
import {
  Dispatch,
  MouseEventHandler,
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
  past: TInstance[];
  setPast: Dispatch<SetStateAction<TInstance[]>>;
  present: TInstance[];
  setPresent: Dispatch<SetStateAction<TInstance[]>>;
  future: TInstance[];
  setFuture: Dispatch<SetStateAction<TInstance[]>>;
  undo: VoidFunction;
  redo: VoidFunction;
};

export const gloContext = createContext<gloContext | null>(null);

export default function GloContextProvider({ children }: gloContextProps) {
  const [gloInstances, setGloInstances] = useState<TInstance[]>([]);

  const [past, setPast] = useState<TInstance[]>([]);
  const [present, setPresent] = useState<TInstance[]>([]);
  const [future, setFuture] = useState<TInstance[]>([]);

  const undo = () => {
    // Stop undo when instances is empty
    if (past.length === 0) return;

    const newPresent = present.slice(0, present.length - 1);

    setPresent(newPresent);
    setFuture([present.pop() as TInstance, ...future]);
  };

  const redo = () => {
    // Stop redo when instances is latest version
    if (future.length === 0) return;

    setPresent([...present, future.shift() as TInstance]);
  };

  // Get instances from local storage
  useEffect(() => {
    const instancesFromLocalStore = JSON.parse(
      localStorage.getItem("instances") || "{}"
    );

    if (instancesFromLocalStore === null || instancesFromLocalStore === "")
      return;

    setGloInstances(instancesFromLocalStore);
  }, []);

  const value = {
    gloInstances,
    setGloInstances,
    past,
    setPast,
    present,
    setPresent,
    future,
    setFuture,
    undo,
    redo,
  };

  return (
    <gloContext.Provider value={{ ...value }}>{children}</gloContext.Provider>
  );
}

export function useGloContext() {
  const context = useContext(gloContext);

  if (context?.gloInstances === undefined) throw new Error("Error");

  return { ...context };
}
