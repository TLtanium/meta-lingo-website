import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router as WouterRouter } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import FeatureDetail from "./pages/FeatureDetail";
import Legal from "./pages/Legal";

// 获取 base 路径，用于 GitHub Pages 部署
const base = import.meta.env.BASE_URL?.replace(/\/$/, '') || '';

function AppRouter() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path="/feature/:id" component={FeatureDetail} />
      <Route path="/legal" component={Legal} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <LanguageProvider>
          <WouterRouter base={base}>
            <TooltipProvider>
              <Toaster />
              <AppRouter />
            </TooltipProvider>
          </WouterRouter>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
