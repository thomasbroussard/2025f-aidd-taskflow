"use client";

import React, { useState } from 'react';
import { useTasks, Task } from '@/lib/TasksContext';

export default function TaskForm() {
  const { addTask } = useTasks();
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<Task['priority']>('Medium');
  const [dueDate, setDueDate] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) {
      return;
    }

    addTask({
      title: title.trim(),
      description: description.trim() || undefined,
      priority,
      dueDate: dueDate || undefined,
    });

    // Reset form
    setTitle('');
    setDescription('');
    setPriority('Medium');
    setDueDate('');
    
    // Show success message briefly
    setSuccessMsg('Task created seamlessly.');
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const inputClasses = "w-full px-3.5 py-2.5 mt-1 bg-surface-container-low border border-outline-variant/20 rounded-xl text-on-surface text-sm font-body focus:ring-1 focus:ring-primary/40 focus:border-primary/40 focus:bg-surface-container-lowest transition-all placeholder:text-outline";
  const labelClasses = "block text-[0.6875rem] font-bold text-on-surface-variant uppercase tracking-widest font-label ml-1";

  return (
    <div className="bg-surface-container-lowest p-6 rounded-xl editorial-shadow">
      <div className="mb-6">
        <h2 className="text-xl font-extrabold text-on-surface font-headline mb-1">Create Task</h2>
        <p className="text-on-surface-variant text-xs font-body">Define your next priority.</p>
      </div>
      
      {successMsg && (
        <div className="mb-4 px-4 py-2.5 bg-secondary-container text-on-secondary-container rounded-lg text-xs font-bold flex items-center gap-2">
          <span className="material-symbols-outlined text-base">check_circle</span>
          {successMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className={labelClasses}>Task Title</label>
          <input 
            type="text" 
            id="title" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className={inputClasses}
            placeholder="E.g., Finalize Annual Budget"
          />
        </div>

        <div>
           <label htmlFor="description" className={labelClasses}>Description</label>
           <textarea 
             id="description"
             value={description}
             onChange={(e) => setDescription(e.target.value)}
             className={`${inputClasses} resize-none h-20`}
             placeholder="Add necessary context..."
           />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="priority" className={labelClasses}>Priority Level</label>
            <div className="relative mt-1">
              <select
                id="priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value as Task['priority'])}
                className={`${inputClasses} mt-0 appearance-none`}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
          
          <div className="flex-1">
            <label htmlFor="dueDate" className={labelClasses}>Due Date</label>
            <input 
              type="date"
              id="dueDate"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className={`${inputClasses} mt-0`}
            />
          </div>
        </div>

        <button 
          type="submit"
          className="w-full mt-2 editorial-gradient text-white rounded-xl font-bold py-3 shadow-md active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          Add Task
        </button>
      </form>
    </div>
  );
}
