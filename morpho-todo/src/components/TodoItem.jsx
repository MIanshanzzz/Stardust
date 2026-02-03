// TodoItem.jsx - Todo单项组件
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './TodoItem.css';

/**
 * TodoItem - 拟物风格的Todo项组件
 * 显示单个Todo，支持删除和完成
 */
export default function TodoItem({ todo, onToggle, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [isHovered, setIsHovered] = useState(false);
  const editInputRef = useRef(null);

  useEffect(() => {
    if (isEditing && editInputRef.current) {
      editInputRef.current.focus();
      editInputRef.current.select();
    }
  }, [isEditing]);

  const handleSave = () => {
    const trimmedText = editText.trim();
    if (trimmedText && trimmedText !== todo.text) {
      onUpdate(todo.id, trimmedText);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  const handleBlur = () => {
    if (isEditing) {
      setIsEditing(false);
    }
  };

  return (
    <motion.div
      className={`todo-item ${todo.completed ? 'completed' : ''} ${isHovered ? 'hovered' : ''}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 100, transition: { duration: 0.3 } }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 真实材质背景 */}
      <div className="todo-item-bg texture-paper">
        {/* 纹理噪点 */}
        <div className="texture-noise"></div>

        {/* 复选框区域 */}
        <button
          onClick={() => onToggle(todo.id)}
          className={`todo-checkbox ${todo.completed ? 'completed' : ''}`}
          aria-label={`标记${todo.text}为${todo.completed ? '未完成' : '完成'}`}
        >
          {todo.completed && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>

        {/* Todo内容 */}
        <div className="todo-content">
          {isEditing ? (
            /* 编辑模式 */
            <input
              ref={editInputRef}
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={handleKeyDown}
              onBlur={handleBlur}
              className="todo-edit-input"
              autoComplete="off"
            />
          ) : (
            /* 展示模式 */
            <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
              {todo.text}
            </span>
          )}
        </div>

        {/* 操作按钮 */}
        <div className="todo-actions">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="todo-action-btn save"
                aria-label="保存"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </button>
              <button
                onClick={() => {
                  setEditText(todo.text);
                  setIsEditing(false);
                }}
                className="todo-action-btn cancel"
                aria-label="取消"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </>
          ) : (
            <>
              {/* 编辑按钮 */}
              <button
                onClick={() => setIsEditing(true)}
                className="todo-action-btn edit"
                aria-label="编辑"
                title="编辑"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>

              {/* 删除按钮 */}
              <button
                onClick={() => onDelete(todo.id)}
                className="todo-action-btn delete"
                aria-label="删除"
                title="删除"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>

      {/* 完成时的划线效果 */}
      {todo.completed && (
        <div className="todo-strikethrough" />
      )}
    </motion.div>
  );
}
