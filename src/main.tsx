import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { TooltipProvider } from '@/components/ui/tooltip.tsx';
import { ThemeProvider } from '@/components/dark-mode/theme-provider.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/tanstack/query.client.ts';
import { Toaster } from './components/ui/sonner.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="sarathi-web-theme">
        <TooltipProvider>
          <App />
          <Toaster closeButton={true} position="top-center" />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);
