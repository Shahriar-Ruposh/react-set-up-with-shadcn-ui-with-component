import { ThemeProvider } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

function App() {
  const { theme, setTheme } = useTheme();

  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <div className="min-h-screen bg-background p-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-foreground">Client Template</h1>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
          <div className="mt-8">
            <p className="text-muted-foreground">
              Start building your next project with this template. It includes:
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground">
              <li>React + TypeScript</li>
              <li>Vite for blazing fast development</li>
              <li>shadcn/ui components</li>
              <li>Tailwind CSS for styling</li>
              <li>ESLint + Prettier for code quality</li>
              <li>Dark mode support</li>
            </ul>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;