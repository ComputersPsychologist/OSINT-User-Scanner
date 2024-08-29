import styles from "./InputField.module.css";
import { useRef, useEffect } from "react";

export default function InputField({ value, onChange }) {
  const focusedInput = useRef(null);

  useEffect(() => {
    if (focusedInput.current) {
      focusedInput.current.focus();
    }
  }, []);

  return (
    <input
      className={`${styles.userInput} font-pixelify bg-black border-none text-white text-base no-underline w-full`}
      type="text"
      placeholder="@username + ENTER↵"
      ref={focusedInput}
      value={value} // El valor del input se controla con la prop "value"
      onChange={(e) => onChange(e.target.value)} // Se llama a la función "onChange" del padre al cambiar el input
    />
  );
}