import { useContext } from "react";
import { EnviromentContext } from "../context/enviroment-context";

export default function useEnviroment() {
  const enviromentContext = useContext(EnviromentContext);

  if (!enviromentContext)
    throw new Error(
      "[useEnviroment()] must be used within its provider element",
    );
  else return enviromentContext;
}
