import  { ReactNode } from "react";
import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from "@tanstack/react-query";
import { I18nProvider, ThemeProvider } from ".";
import { APPContainer } from "../styles/App";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CssBaseline } from "@mui/material";



const queryClient = new QueryClient();

type TypeProps={
    children:ReactNode
}

function RootProvider({ children }:TypeProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <CssBaseline />
          <APPContainer>
            <I18nProvider>
              <QueryErrorResetBoundary>
                    {children}
              </QueryErrorResetBoundary>
            </I18nProvider>
          </APPContainer>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default RootProvider;
