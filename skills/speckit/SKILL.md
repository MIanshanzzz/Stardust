---
name: speckit
description: Specification-Driven Development workflow using OpenClaw and Claude Code. Use when implementing features, creating skills, or working on projects requiring specification-driven approach, iteration, and automatic learning.
---

# Speckit - Specification-Driven Development

Speckit enables OpenClaw to drive Claude Code through a complete specification-driven development workflow, creating a self-improving system that learns from execution and iterations.

## Core Workflow

**The Loop:** Requirement → Execution → Test → Iterate → Optimize

### 1. Requirement Analysis
- Understand user requirements clearly
- Break down into executable specifications
- Identify dependencies and constraints

### 2. Execution
- Use OpenClaw to control Claude Code
- Implement specifications step-by-step
- Maintain zero-intervention automation

### 3. Testing
- Run tests automatically
- Validate outputs against specifications
- Document failures and edge cases

### 4. Iteration
- Analyze test failures
- Update specifications with learnings
- Refine implementations

### 5. Optimization
- Identify patterns and best practices
- Update memory with insights
- Improve future iterations

## Usage Patterns

### Creating New Skills
When creating skills from scratch:
1. Start with requirements
2. Create initial specification
3. Implement using Speckit workflow
4. Test and iterate
5. Package and optimize

### Feature Development
For feature requests:
1. Break down into smaller specs
2. Implement incrementally
3. Test after each spec
4. Iterate based on feedback
5. Auto-learn from errors

### Project Refactoring
When refactoring:
1. Document current state
2. Create new specifications
3. Implement changes
4. Test thoroughly
5. Validate improvements

## Key Principles

**Specification-First:** Always work from clear, testable specifications

**Automation-Driven:** Use OpenClaw to drive Claude Code for zero-intervention workflows

**Learning-Embedded:** Every iteration should improve future performance

**Iterative-Growth:** Small improvements compound over time

**Safety-First:** Always validate changes before committing

## Resources

For detailed workflow patterns, configuration, and examples, see:
- `references/spec-patterns.md` - Common specification patterns
- `references/iteration-workflow.md` - Iteration strategies
- `references/learnings.md` - Auto-learned best practices

## Configuration

Ensure OpenClaw and Claude Code are properly configured before using Speckit:
- Gateway token configured
- Claude Code API accessible
- Memory persistence enabled
- Safety filters in place
