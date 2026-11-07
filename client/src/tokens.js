// Hallmark tokens. Every colour and font in the app comes from here (JS) or var(--x) (CSS).
export const tokens = {
  paper: "#f5f2ec",
  surface: "#fffdf9",
  ink: "#1d1b17",
  muted: "#6d675c",
  line: "#ddd6c9",
  accent: "#1b6b57",
  accentInk: "#fffdf9",
  accentSoft: "#dcebe4",
  accentDeep: "#134e40",
  danger: "#b3372b",
};

export const font = '"Figtree", system-ui, -apple-system, "Segoe UI", sans-serif';

const kebab = (k) => k.replace(/[A-Z]/g, (c) => "-" + c.toLowerCase());

export const rootVars = {
  ":root": {
    ...Object.fromEntries(Object.entries(tokens).map(([k, v]) => ["--" + kebab(k), v])),
    "--font": font,
    "--r-1": "10px",
    "--r-2": "18px",
  },
};
