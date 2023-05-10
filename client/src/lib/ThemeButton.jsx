import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { Moon, Sun } from "../assets/theme";
import { Form } from "react-bootstrap";

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Form>
      <Form.Check
        onChange={toggleTheme}
        type="switch"
        id="theme-switch"
        label="dark mode"
      />
    </Form>
  );
}
