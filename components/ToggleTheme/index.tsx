import useDarkMode from "@/hooks/use-dark-mode";
import Image from "next/image";
import React from "react";

function ToggleTheme() {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div>
      {colorTheme === "light" ? (
        <Image
          onClick={() => {
            setTheme("light");
          }}
          src={"/images/brightness.png"}
          width={35}
          height={35}
          alt="dark icon"
        />
      ) : (
        <Image
          onClick={() => {
            setTheme("dark");
          }}
          src={"/images/moon.png"}
          width={35}
          height={35}
          alt="light icon"
        />
      )}
    </div>
  );
}

export default ToggleTheme;
