import { colors } from "./colors";
import { tokenColors } from "./tokenColors";
import { writeFile } from "fs/promises";
import prettier from "prettier";

interface Theme {
  theme: string;
  name: string;
  fileName: string;
}

export const themes: Theme[] = [
  {
    theme: "darkTheme",
    name: "GitHub Dark (Web Based)",
    fileName: "github-dark-color-theme.json",
  },
  {
    theme: "darkBorderlessTheme",
    name: "GitHub Dark (Web Based Borderless)",
    fileName: "github-dark-color-borderless-theme.json",
  },
];

const baseTheme = {
  $schema: "vscode://schemas/color-theme",
  type: "dark",
};

export const generateThemes = async () => {
  for (const theme of themes) {
    const themeColors = colors[theme.theme];
    const themeTokens = tokenColors[theme.theme];

    await writeFile(
      `./themes/${theme.fileName}`,

      await prettier.format(
        JSON.stringify(
          {
            ...baseTheme,
            name: theme.name,
            colors: themeColors,
            tokenColors: themeTokens,
          },
          null,
          2
        ),
        { parser: "json" }
      )
    );
  }
};
