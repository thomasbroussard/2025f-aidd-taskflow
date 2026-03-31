import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { TasksProvider } from "@/lib/TasksContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "TaskFlow Pro",
  description: "Master your workflow with architectural precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} light`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen">
        <TasksProvider>
          {/* SideNavBar (Desktop) */}
          <aside className="hidden md:flex flex-col h-full p-4 gap-y-6 fixed left-0 top-0 bg-surface-container-low dark:bg-slate-900 w-64 z-50">
            <div className="flex items-center gap-3 px-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-white">task_alt</span>
              </div>
              <div>
                <h2 className="text-xl font-black text-primary dark:text-[#4454a5] font-headline">TaskFlow</h2>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Management Pro</p>
              </div>
            </div>
            
            <nav className="flex flex-col gap-1 mt-4">
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:text-primary transition-all hover:translate-x-1 duration-200">
                <span className="material-symbols-outlined text-[20px]">dashboard</span>
                <span className="font-label text-[11px] font-bold uppercase tracking-widest">Dashboard</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-primary font-semibold bg-white/50 dark:bg-white/10 rounded-lg">
                <span className="material-symbols-outlined text-[20px]">checklist</span>
                <span className="font-label text-[11px] font-bold uppercase tracking-widest">Tasks</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:text-primary transition-all hover:translate-x-1 duration-200">
                <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                <span className="font-label text-[11px] font-bold uppercase tracking-widest">Calendar</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:text-primary transition-all hover:translate-x-1 duration-200">
                <span className="material-symbols-outlined text-[20px]">bar_chart</span>
                <span className="font-label text-[11px] font-bold uppercase tracking-widest">Analytics</span>
              </a>
            </nav>
            
            <div className="mt-auto flex flex-col gap-1">
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:text-primary transition-all">
                <span className="material-symbols-outlined text-[20px]">help</span>
                <span className="font-label text-[11px] font-bold uppercase tracking-widest">Help Center</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:text-primary transition-all">
                <span className="material-symbols-outlined text-[20px]">logout</span>
                <span className="font-label text-[11px] font-bold uppercase tracking-widest">Logout</span>
              </a>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="md:ml-64 min-h-screen flex flex-col">
            {/* TopNavBar */}
            <header className="flex justify-between items-center w-full px-6 py-3 sticky top-0 z-40 bg-surface dark:bg-slate-950">
              <div className="flex items-center gap-6">
                <div className="md:hidden text-2xl font-bold text-primary tracking-tight font-headline">TaskFlow</div>
                <div className="hidden md:flex items-center bg-surface-container-low px-4 py-2 rounded-xl">
                  <span className="material-symbols-outlined text-slate-400 mr-2 text-[20px]">search</span>
                  <input type="text" placeholder="Search tasks..." className="bg-transparent border-none focus:ring-0 text-sm font-body w-64 p-0" />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-2 text-slate-500 hover:bg-surface-container-low transition-colors rounded-lg active:scale-95">
                  <span className="material-symbols-outlined text-[22px]">notifications</span>
                </button>
                <div className="w-8 h-8 rounded-full overflow-hidden ml-2 ring-2 ring-primary-fixed bg-surface-container-high flex justify-center items-center">
                   <span className="material-symbols-outlined text-primary text-[18px]">person</span>
                </div>
              </div>
            </header>
            
            {/* Page Content */}
            <div className="flex-1">
              {children}
            </div>
          </main>
          
          {/* BottomNavBar (Mobile Only) */}
          <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface-container-lowest editorial-shadow z-50 flex justify-around items-center px-4 py-3">
            <a href="#" className="flex flex-col items-center gap-1 text-slate-500">
              <span className="material-symbols-outlined text-[22px]">dashboard</span>
              <span className="text-[10px] font-bold font-label">DASH</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-1 text-primary">
              <span className="material-symbols-outlined text-[22px] font-variation-settings-'FILL' 1">checklist</span>
              <span className="text-[10px] font-bold font-label">TASKS</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-1 text-slate-500">
              <span className="material-symbols-outlined text-[22px]">calendar_today</span>
              <span className="text-[10px] font-bold font-label">CAL</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-1 text-slate-500">
              <span className="material-symbols-outlined text-[22px]">settings</span>
              <span className="text-[10px] font-bold font-label">CONF</span>
            </a>
          </nav>
        </TasksProvider>
      </body>
    </html>
  );
}
