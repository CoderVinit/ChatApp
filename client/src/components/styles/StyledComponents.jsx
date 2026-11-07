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
    background-color: var(--color-paper-3);
  }
`;

const InputBox = styled("input")`
  width: 100%;
  height: 3rem;
  padding: 0 1.2rem 0 3rem;
  border-radius: var(--radius-inner);
  font-size: 1rem;
  font-family: inherit;
  background-color: var(--color-paper);
  color: var(--color-ink);
  border: 1px solid var(--color-muted);
  box-sizing: border-box;
  &:hover { border-color: var(--color-ink); }
  &:focus-visible { border-color: var(--color-focus); outline: 2px solid var(--color-focus); outline-offset: 0; }
`;


const SearchField = styled("input")`
  padding:1rem 2rem;
  width:20vmax;
  border-radius:var(--radius-inner);
  background-color:var(--color-paper-2);
  border:1px solid var(--color-muted);
  color:var(--color-ink);
  font-family:inherit;
  font-size:1.1rem
`


const CurveButton = styled("button")`
  border-radius:var(--radius-inner);
  padding:1rem 2rem;
  border:none;
  cursor:pointer;
  background-color:var(--color-accent);
  color:var(--color-accent-ink);
  border-radius:var(--radius-pill);
  min-height:44px;
  font-family:inherit;
  font-weight:500;
  font-size:1.1rem;
  &:hover{ background-color:var(--color-accent-hi); }
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
