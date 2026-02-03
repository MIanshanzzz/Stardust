// TodoList.jsx - Todo列表组件
import React, { useState, useMemo } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

/**
 * TodoList - 拟物风格的Todo列表组件
 * 管理所有Todo项
 */
export default function TodoList({ todos, onAdd, onToggle, onDelete, onUpdate }) {
  // 过滤和排序
  const { activeTodos, completedTodos, stats } = useMemo(() => {
    const active = todos.filter(t => !t.completed);
    const completed = todos.filter(t => t.completed);
    
    return {
      activeTodos: active,
      completedTodos: completed,
      stats: {
        total: todos.length,
        active: active.length,
        completed: completed.length,
        progress: todos.length > 0 ? Math.round((completed.length / todos.length) * 100) : 0
      }
    };
  }, [todos]);

  const handleAdd = (text) => {
    onAdd({
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: new Date().toISOString()
    });
  };

  const handleToggle = (id) => {
    onToggle(id);
  };

  const handleDelete = (id) => {
    onDelete(id);
  };

  const handleUpdate = (id, text) => {
    onUpdate(id, text);
  };

  return (
    <div className="todo-list">
      {/* 统计信息 */}
      <div className="todo-stats">
        <div className="stat-item">
          <div className="stat-number">{stats.total}</div>
          <div className="stat-label">总任务</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{stats.active}</div>
          <div className="stat-label">进行中</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{stats.completed}</div>
          <div className="stat-label">已完成</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{stats.progress}%</div>
          <div className="stat-label">完成率</div>
        </div>
      </div>

      {/* 进度条 */}
      <div className="todo-progress-container">
        <div className="todo-progress-bg">
          <div
            className="todo-progress-fill"
            style={{ width: `${stats.progress}%` }}
          />
        </div>
        <div className="todo-progress-text">{stats.progress}% 完成</div>
      </div>

      {/* 过滤器 */}
      <div className="todo-filters">
        <button
          onClick={() => { /* 实现过滤逻辑 */ }}
          className="filter-btn active"
        >
          全部
        </button>
        <button
          onClick={() => { /* 实现过滤逻辑 */ }}
          className="filter-btn"
        >
          进行中
        </button>
        <button
          onClick={() => { /* 实现过滤逻辑 */ }}
          className="filter-btn"
        >
          已完成
        </button>
      </div>

      {/* Active Todos */}
      <div className="todo-section">
        <div className="section-header">
          <h3>进行中</h3>
          <span className="section-count">{stats.active}</span>
        </div>
        {activeTodos.length > 0 ? (
          <div className="todo-items">
            {activeTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={handleToggle}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            <p>暂无进行中的任务</p>
            <p className="empty-hint">添加新任务开始吧！</p>
          </div>
        )}
      </div>

      {/* Completed Todos */}
      <div className="todo-section completed">
        <div className="section-header">
          <h3>已完成</h3>
          <span className="section-count">{stats.completed}</span>
        </div>
        {completedTodos.length > 0 ? (
          <div className="todo-items">
            {completedTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={handleToggle}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p>太棒了！所有任务都已完成</p>
            <p className="empty-hint">完成得完美！</p>
          </div>
        )}
      </div>

      {/* 清除完成按钮 */}
      {completedTodos.length > 0 && (
        <motion.button
          className="todo-clear-btn"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            // 实现清除逻辑
            alert('清除所有已完成任务');
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          清除已完成
        </motion.button>
      )}
    </div>
  );
}
