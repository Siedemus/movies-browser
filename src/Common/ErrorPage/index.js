import { Link } from "react-router-dom/cjs/react-router-dom";
import {
  DangerIcon,
  ErrorButton,
  ErrorButtonLink,
  ErrorHeader,
  ErrorInfo,
  ErrorWrap,
} from "./styled";

export const ErrorPage = () => (
  <ErrorWrap>
    <DangerIcon />
    <ErrorHeader>Ooops! Something went wrong...</ErrorHeader>
    <ErrorInfo>Please check your network connection and try again</ErrorInfo>
    <ErrorButton>
      <ErrorButtonLink to="/movies">Back to home page</ErrorButtonLink>
    </ErrorButton>
  </ErrorWrap>
);
