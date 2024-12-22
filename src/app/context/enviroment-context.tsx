"use client";

import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";

interface EnviromentContextType {
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
}

export const EnviromentContext = React.createContext<
  EnviromentContextType | undefined
>(undefined);

export default function EnviromentContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [color, setColor] = useState<string>("");

  return (
    <EnviromentContext.Provider
      value={{
        color,
        setColor,
      }}
    >
      {children}
    </EnviromentContext.Provider>
  );
}
