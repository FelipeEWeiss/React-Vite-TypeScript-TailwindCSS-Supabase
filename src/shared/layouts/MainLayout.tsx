import { Header } from '../components/Header';

export const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-gray-50">
    <Header />
    <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8 bg-slate-50">
      {children}
    </main>
  </div>
);
