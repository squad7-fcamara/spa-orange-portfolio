import { createGlobalStyle, styled } from "styled-components";

const tablet = "768px";

export const Dashboard = styled.div`
  max-width: 1536px;
  width: 100%;
  min-height: calc(100dvh - 7.3rem);
  padding: 0 3.2rem 8rem;
  margin: 7.3rem auto 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: ${tablet}) {
    & {
      padding: 0 2.4rem;
    }
  }
`;

export const GlobalStyled = createGlobalStyle`
  :root {
    font-weight: 400;
    font-size: 62.5%;
    line-height: 1.5;
    font-family: "Roboto", sans-serif;
    background-color: #FCFDFF;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    font: inherit;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  input:focus {
    outline: none;
  }
`;
