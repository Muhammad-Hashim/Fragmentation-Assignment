import type React from 'react';
import { useState } from 'react';
interface Toast {
  message: string;
  severity: "success" | "error" | "warning" | "info";
}
const useAppToast: React.FC = () => {
      const [toast, setToast] = useState<Toast | null>(null);
      const showToast = (
        message: string,
        severity: "success" | "error" | "warning" | "info"
      ) => {
        setToast({ message, severity });
      };
  return {
    toastMsg: toast?.message || "",
    toastSev: toast?.severity || "info",
    showToast,
  };
}

export default useAppToast;