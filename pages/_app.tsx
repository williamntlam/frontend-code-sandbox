import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ColourProvider } from "@/context/ColourContext";

export default function App({ Component }: AppProps) {
  return (
    <ColourProvider>
      <Component />
    </ColourProvider>
  );
}
