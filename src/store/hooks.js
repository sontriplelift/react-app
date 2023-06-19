import { useContext } from "react";
import Context from "./Context";

function useStore() {
  const [state, dispatch] = useContext(Context);

  return [state, dispatch];
}

export { useStore };