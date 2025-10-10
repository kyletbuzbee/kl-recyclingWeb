import { FC, useEffect, useState } from "react";

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

const Toast: FC<ToastProps> = ({ message, type, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!visible) {
    return null;
  }

  const baseClasses = "fixed bottom-5 right-5 p-4 rounded-lg shadow-lg text-white";
  const typeClasses = type === "success" ? "bg-green-500" : "bg-red-500";

  return <div className={`${baseClasses} ${typeClasses}`}>{message}</div>;
};

export default Toast;
