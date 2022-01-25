import { MoonIcon, SunIcon } from "@modulz/radix-icons";
import * as Switch from "@radix-ui/react-switch";
import { useTheme } from "next-themes";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const isDarkTheme = theme === 'dark'
  return (
    <div>
      <Switch.Root defaultChecked id="theme-mode">
        <Switch.Thumb
          onClick={() =>
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }
          className="w-10 h-10 rounded-full text-white bg-blue-500 flex justify-center items-center transition duration-300 focus:outline-none shadow"
        >
          {isDarkTheme ? <SunIcon />
          : <MoonIcon />}
        </Switch.Thumb>
      </Switch.Root>
    </div>
  );
};
