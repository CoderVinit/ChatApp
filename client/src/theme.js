import { createTheme } from "@mui/material";
import { font, fontDisplay, tokens as t } from "./tokens";

const glass = {
  backgroundColor: "rgba(21, 24, 32, 0.78)",
  backdropFilter: "blur(22px) saturate(1.35)",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.10), inset 0 0 0 1px rgba(255,255,255,0.06)",
  backgroundImage: "none",
};

// Dusk: slate steps, one periwinkle signal (done, on, focused), one apricot (open, waiting).
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: t.accent, dark: t.accentHi, light: t.accentHi, contrastText: t.accentInk },
    secondary: { main: t.accent2, contrastText: t.accentInk },
    error: { main: t.error },
    background: { default: t.paper, paper: t.paper2 },
    text: { primary: t.ink, secondary: t.muted },
    divider: t.rule,
  },
  shape: { borderRadius: 10 },
  typography: {
    fontFamily: font,
    fontSize: 15,
    h4: { fontFamily: fontDisplay, fontSize: "1.728rem", fontWeight: 500, letterSpacing: "-0.022em", lineHeight: 1.1 },
    h5: { fontFamily: fontDisplay, fontSize: "1.44rem", fontWeight: 500, letterSpacing: "-0.022em", lineHeight: 1.15 },
    h6: { fontFamily: fontDisplay, fontSize: "1.2rem", fontWeight: 500, letterSpacing: "-0.015em", lineHeight: 1.2 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { minHeight: 40, borderRadius: 999, paddingInline: 20 },
        containedPrimary: { boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35)", "&:hover": { backgroundColor: t.accentHi } },
      },
    },
    MuiIconButton: { styleOverrides: { root: { width: 44, height: 44 } } },
    MuiPaper: { defaultProps: { elevation: 0 }, styleOverrides: { root: { boxShadow: "none", backgroundImage: "none" } } },
    MuiDialog: { styleOverrides: { paper: { ...glass, borderRadius: 18 } } },
    MuiMenu: { styleOverrides: { paper: { ...glass, borderRadius: 10 } } },
    MuiDrawer: { styleOverrides: { paper: { backgroundColor: t.paper2, boxShadow: "none" } } },
    MuiTooltip: { styleOverrides: { tooltip: { backgroundColor: t.paper3, color: t.ink, border: `1px solid ${t.rule}` } } },
    MuiTextField: { defaultProps: { size: "small" } },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          boxShadow: `0 0 0 1px ${t.muted}`,
          "& .MuiOutlinedInput-notchedOutline": { border: 0 },
          "&:hover": { boxShadow: `0 0 0 1px ${t.ink2}` },
          "&.Mui-focused": { boxShadow: `0 0 0 2px ${t.focus}` },
        },
      },
    },
    MuiInputLabel: { styleOverrides: { shrink: { backgroundColor: t.paper2, padding: "0 4px" } } },
    MuiBadge: { styleOverrides: { badge: { fontVariantNumeric: "tabular-nums" } } },
    MuiSkeleton: { styleOverrides: { root: { backgroundColor: t.paper3 } } },
  },
});

export default theme;
