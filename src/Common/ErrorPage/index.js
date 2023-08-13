import {
  DangerIcon,
  ErrorButton,
  ErrorHeader,
  ErrorInfo,
  ErrorTextButton,
  ErrorWrap,
} from "./styled";

export const ErrorPage = () => (
  <ErrorWrap>
    <DangerIcon />
    <ErrorHeader>Ooops! Something went wrong...</ErrorHeader>
    <ErrorInfo>Please check your network connection and try again</ErrorInfo>
    <ErrorButton>
      <ErrorTextButton>Back to home page</ErrorTextButton>
    </ErrorButton>
  </ErrorWrap>
);
