export type ColourMode = "light" | "dark";

export interface ColourContextType {
  mode: ColourMode;
  toggleMode: () => void;
}
