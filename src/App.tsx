import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { TransactionsProvider } from "./contexts/TransactionsContext";

export const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <TransactionsProvider>
                <RouterProvider router={router} />
            </TransactionsProvider>
        </ThemeProvider>
    );
};

export default App;
