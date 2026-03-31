"use client";

import TaskForm from "@/components/TaskForm";
import { useTasks } from "@/lib/TasksContext";

export default function Home() {
  const { tasks } = useTasks();

  const getPriorityStyles = (priority: string) => {
    switch(priority) {
      case 'High':
        return {
          gutter: 'bg-tertiary-container',
          badge: 'bg-tertiary-container text-on-tertiary-container'
        };
      case 'Medium':
        return {
          gutter: 'bg-primary-fixed-dim',
          badge: 'bg-secondary-fixed text-on-secondary-fixed-variant'
        };
      default:
        return {
          gutter: 'bg-outline-variant',
          badge: 'bg-surface-container text-slate-500'
        };
    }
  };

  return (
    <div className="px-6 md:px-10 py-4 md:py-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px] gap-6 lg:gap-8 items-start">
        <section className="order-2 lg:order-1 space-y-4">
          {/* Hero Header */}
          <div className="mb-6">
            <h1 className="text-[2.25rem] font-headline font-extrabold leading-tight tracking-tight text-on-surface mb-1">My Tasks</h1>
            <p className="text-on-surface-variant font-body text-sm">Manage and track your active projects and daily goals.</p>
          </div>

          {/* Filters & Actions Bar */}
          <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4">
            <button className="px-4 py-2 bg-surface-container-lowest editorial-shadow rounded-full text-[10px] md:text-xs font-bold font-label tracking-widest uppercase text-on-surface hover:bg-primary-fixed transition-colors">ALL TASKS</button>
            <button className="px-4 py-2 bg-surface-container-low text-on-secondary-fixed-variant rounded-full text-[10px] md:text-xs font-bold font-label tracking-widest uppercase hover:bg-secondary-container transition-colors">HIGH PRIORITY</button>
            <button className="px-4 py-2 bg-surface-container-low text-on-secondary-fixed-variant rounded-full text-[10px] md:text-xs font-bold font-label tracking-widest uppercase hover:bg-secondary-container transition-colors">IN PROGRESS</button>
          </div>

          {tasks.length === 0 ? (
            <div className="mt-6 py-12 border-2 border-dashed border-outline-variant/20 rounded-2xl flex flex-col items-center justify-center text-center bg-surface-dim/10">
              <span className="material-symbols-outlined text-5xl text-outline-variant mb-4">layers</span>
              <p className="text-on-surface-variant font-medium text-sm">Your workspace is uniquely clear.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {tasks.map((task) => {
                const styles = getPriorityStyles(task.priority);
                return (
                  <div key={task.id} className="group relative bg-surface-container-lowest rounded-xl editorial-shadow p-5 pl-[4rem] flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all hover:-translate-y-1">
                    {/* Vertical Gutter */}
                    <div className={`absolute left-0 top-0 bottom-0 w-2.5 rounded-l-xl ${styles.gutter}`}></div>
                    
                    {/* Checkbox placement */}
                    <div className="absolute left-5 top-1/2 -translate-y-1/2">
                      <button className="w-7 h-7 rounded-md border-2 border-outline-variant flex items-center justify-center text-transparent hover:border-primary hover:text-primary transition-all">
                        <span className="material-symbols-outlined text-lg">check</span>
                      </button>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-lg font-headline font-semibold text-on-surface group-hover:text-primary transition-colors">{task.title}</h3>
                        <span className={`text-[9px] font-bold font-label tracking-widest uppercase px-2.5 py-0.5 rounded-full ${styles.badge}`}>
                          {task.priority}
                        </span>
                      </div>
                      {task.description && (
                        <p className="text-on-surface-variant text-sm max-w-2xl whitespace-pre-wrap">{task.description}</p>
                      )}
                    </div>

                    <div className="flex items-center gap-6 min-w-fit">
                      {task.dueDate && (
                        <div className="text-right">
                          <span className="block text-[9px] font-bold font-label text-slate-400 uppercase tracking-widest mb-0.5">DUE DATE</span>
                          <span className="text-sm font-bold text-on-surface">{task.dueDate}</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        <section className="order-1 lg:order-2 sticky top-20 z-10">
          <TaskForm />
        </section>
      </div>
    </div>
  );
}
