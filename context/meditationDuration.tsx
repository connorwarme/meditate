import { createContext, SetStateAction, Dispatch, useState } from "react";

interface MeditationDurationContext {
  duration: number;
  setDuration: Dispatch<SetStateAction<number>>;
}

export const MeditationDurationContext =
  createContext<MeditationDurationContext>({
    duration: 0,
    setDuration: () => {},
  });

interface MeditationDurationProviderProps {
  children: React.ReactNode;
}

export const MeditationDurationProvider = ({
  children,
}: MeditationDurationProviderProps) => {
  const [duration, setDuration] = useState(60);

  return (
    <MeditationDurationContext.Provider value={{ duration, setDuration }}>
      {children}
    </MeditationDurationContext.Provider>
  );
};
