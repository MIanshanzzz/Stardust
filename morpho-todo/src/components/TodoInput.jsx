// TodoInput.jsx - 输入组件
import React, { useState, useRef } from 'react';
import './TodoInput.css';

/**
 * TodoInput - 拟物风格的Todo输入组件
 * 添加新的Todo项
 */
export default function TodoInput({ onAdd, placeholder = '添加一个新的Todo...' }) {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedText = text.trim();
    if (trimmedText) {
      onAdd(trimmedText);
      setText('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  const handleClear = () => {
    setText('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={`todo-input-container ${isFocused ? 'focused' : ''}`}>
      <form onSubmit={handleSubmit} className="todo-input-form">
        {/* 真实材质背景 */}
        <div className={`todo-input-bg texture-paper`}>
          {/* 纹理噪点 */}
          <div className="texture-noise"></div>

          {/* 输入框 */}
          <input
            ref={inputRef}
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className="todo-input"
            autoComplete="off"
          />

          {/* 清除按钮 */}
          {text && (
            <button
              type="button"
              onClick={handleClear}
              className="todo-clear-btn"
              aria-label="清除输入"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* 添加按钮 */}
        <button
          type="submit"
          disabled={!text.trim()}
          className={`todo-add-btn ${!text.trim() ? 'disabled' : ''}`}
          aria-label="添加Todo"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span>添加</span>
        </button>
      </form>
    </div>
  );
}
