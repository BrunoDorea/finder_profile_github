import React, { useMemo } from "react";
import { Brand, Button, CenterRow, HeaderContainer } from "./header.styled";
import { useThemeContext } from "providers/theme";
import { TypeTheme } from "types/themes";
import { IoIosSunny, IoIosMoon } from "react-icons/io";

const Header: React.FC = () => {
  const { themeName, setThemeName } = useThemeContext();
  const componentProps = useMemo(() => {
    if (themeName === TypeTheme.dark) {
      return {
        src: "/dio-white.svg",
        toggle: TypeTheme.light,
        button: (
          <>
            <IoIosSunny />{" "}
          </>
        ),
      };
    }
    return {
      src: "/dio-black.svg",
      toggle: TypeTheme.dark,
      button: (
        <>
          <IoIosMoon />{" "}
        </>
      ),
    };
  }, [themeName]);

  return (
    <HeaderContainer>
      <CenterRow>
        <Brand src={componentProps.src} alt="Logo da DIO" />
        <Button onClick={() => setThemeName(componentProps.toggle)}>
          {" "}
          {componentProps.button}{" "}
        </Button>
      </CenterRow>
    </HeaderContainer>
  );
};

export default Header;
