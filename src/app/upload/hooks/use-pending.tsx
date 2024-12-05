import { useState } from "react";

function usePending(): [boolean, () => void] {
  const [pending, setPending] = useState<boolean>(false);

  const toggle = (): void => setPending((prev) => !prev);

  return [pending, toggle];
}

export default usePending;
