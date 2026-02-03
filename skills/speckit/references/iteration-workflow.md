# Iteration Workflow

Strategies for effective iterations in the Speckit loop.

## Iteration Cycle

```
Test Failure → Analysis → Specification Update → Implementation → Validation
```

### 1. Analyze Failures

**What to Check:**
- Root cause of failure
- Specification clarity
- Implementation accuracy
- Environment issues

**Questions to Ask:**
- Was the spec clear?
- Did implementation follow the spec?
- Are there environmental factors?
- What can we learn?

### 2. Update Specifications

**Add Learnings:**
```markdown
## Updated Specification: User Authentication

### Previous Issues
- Session validation failed with wrong timezone
- Password hashing was too slow

### Updated Requirements
- Session tokens include timezone info
- Use bcrypt with 12 rounds

### New Tests
- Session works across timezones
- Password hashing completes in <100ms
```

### 3. Refactor Implementation

**Update Code:**
- Fix identified issues
- Add improvements based on learnings
- Maintain backward compatibility

### 4. Validate

**Run Tests:**
- All tests should pass
- Edge cases handled
- Performance acceptable

## Iteration Types

### Hotfix Iteration
- Fast, focused fixes
- Don't change other specs
- Document reasoning

### Refactor Iteration
- Improve code quality
- Add documentation
- Enhance maintainability

### Feature Iteration
- Add new capabilities
- Enhance existing features
- Improve user experience

### Learning Iteration
- Document patterns
- Update references
- Share insights

## Success Criteria

✅ **All Tests Pass**
✅ **No New Bugs Introduced**
✅ **Performance Improved or Maintained**
✅ **Code Quality Improved**
✅ **Documentation Updated**

## Common Pitfalls

❌ **Skipping Analysis** - Jumping to fixes without understanding root cause
❌ **Over-Engineering** - Adding complexity for no reason
❌ **Not Updating Specs** - Code changes without documenting them
❌ **Ignoring Tests** - Fixing without running test suite
❌ **Rushing** - Skipping validation steps

## Tips

- **Iterate Frequently** - Small iterations are better than large ones
- **Document Everything** - Every change should be documented
- **Learn from Mistakes** - Treat failures as learning opportunities
- **Share Knowledge** - Update memory with insights
- **Stay Focused** - Each iteration should have clear goals
