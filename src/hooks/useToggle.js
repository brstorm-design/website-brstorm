import { useState, useCallback, useMemo } from "react";

export default function useToggle() {
  const [status, setStatus] = useState(false);

  const toggleStatus = useCallback(() => {
    setStatus((prevStatus) => !prevStatus);
  }, []);

  const values = useMemo(
    () => ({
      status,
      toggleStatus,
    }),
    [status, toggleStatus]
  );

  return values;
};