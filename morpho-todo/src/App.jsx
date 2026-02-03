// App.jsx - 主应用组件
import React, { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

/**
 * App - 拟物风格Todo List应用
 * 主应用组件
 */
function App() {
  const [todos, setTodos] = useState(() => {
    // 从localStorage加载数据
    const saved = localStorage.getItem('morpho-todos');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    // 保存到localStorage
    localStorage.setItem('morpho-todos', JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (text) => {
    setTodos(prev => [
      {
        id: Date.now().toString(),
        text,
        completed: false,
        createdAt: new Date().toISOString()
      },
      ...prev
    ]);
  };

  const handleToggle = (id) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDelete = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const handleUpdate = (id, text) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, text } : todo
    ));
  };

  return (
    <div className="app">
      {/* 头部 */}
      <header className="app-header">
        <h1 className="app-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          Morpho Todo
        </h1>
        <p className="app-subtitle">拟物风格的任务管理</p>
      </header>

      {/* 主内容 */}
      <main className="app-main">
        <TodoInput onAdd={handleAdd} />
        <TodoList
          todos={todos}
          onAdd={handleAdd}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      </main>

      {/* 页脚 */}
      <footer className="app-footer">
        <p className="footer-text">
          使用 React + Framer Motion 构建
        </p>
      </footer>
    </div>
  );
}

export default App;
