import { keyframes, Skeleton, styled } from "@mui/material";
import { Link as LinkComponent } from "react-router-dom";

const VisuallyHiddenInput = styled("input")({
  border: 0,
  clip: "rect(0 0 0 0)",
  height: 1,
  margin: -1,
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: -1,
});

const Link = styled(LinkComponent)`
  text-decoration: none;
  color: inherit;
  display: block;
  &:hover {
    background-color: var(--accent-soft);
  }
`;

const InputBox = styled("input")`
  width: 100%;
  height: 100%;
  outline: none;
  padding: 0.9rem 1.2rem 0.9rem 3rem;
  border-radius: var(--r-1);
  font-size: 1rem;
  font-family: inherit;
  background-color: var(--paper);
  color: var(--ink);
  border: 1px solid var(--line);
  box-sizing: border-box;
  &:focus-visible { border-color: var(--accent); outline-offset: 0; }
`;


const SearchField = styled("input")`
  padding:1rem 2rem;
  width:20vmax;
  border:none;
  outline:none;
  border-radius:var(--r-1);
  background-color:var(--surface);
  border:1px solid var(--line);
  color:var(--ink);
  font-family:inherit;
  font-size:1.1rem
`


const CurveButton = styled("button")`
  border-radius:var(--r-1);
  padding:1rem 2rem;
  border:none;
  cursor:pointer;
  background-color:var(--accent);
  color:var(--accent-ink);
  font-family:inherit;
  font-weight:600;
  font-size:1.1rem;
  &:hover{ background-color:var(--accent-deep); }
`
const bounceAnimation = keyframes`
0% {transform: scale(1);}
50% {transform: scale(1.5);}
100% {transform: scale(1);}
`
const BouncingSkeleton = styled(Skeleton)(() => ({
  animation: `${bounceAnimation} 1s infinite`,

}))



export { BouncingSkeleton, CurveButton, SearchField, InputBox, Link, VisuallyHiddenInput }
