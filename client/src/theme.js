import { createTheme } from "@mui/material";
import { font, tokens as t } from "./tokens";

const theme = createTheme({
  palette: {
    primary: { main: t.accent, dark: t.accentDeep, light: t.accentSoft, contrastText: t.accentInk },
    error: { main: t.danger },
    background: { default: t.paper, paper: t.surface },
    text: { primary: t.ink, secondary: t.muted },
    divider: t.line,
  },
  shape: { borderRadius: 10 },
  typography: {
    fontFamily: font,
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiButton: { defaultProps: { disableElevation: true } },
    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: { root: { boxShadow: "none" } },
    },
    MuiDialog: {
      styleOverrides: { paper: { border: `1px solid ${t.line}`, borderRadius: 18, boxShadow: "none" } },
    },
    MuiMenu: { styleOverrides: { paper: { border: `1px solid ${t.line}`, boxShadow: "none" } } },
    MuiTooltip: { styleOverrides: { tooltip: { backgroundColor: t.ink, color: t.surface } } },
    MuiDrawer: { styleOverrides: { paper: { boxShadow: "none" } } },
    MuiTextField: { defaultProps: { size: "small" } },
  },
});

export default theme;
