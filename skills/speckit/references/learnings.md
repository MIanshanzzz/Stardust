# Auto-Learned Best Practices

Continuously updated best practices discovered through Speckit iterations.

## General Principles

### 1. Specification Quality
- **Always be specific** - Vague specs lead to ambiguity
- **Write for testing** - Each spec should be testable
- **Document assumptions** - State what you're assuming
- **Update frequently** - Specs should evolve with the code

### 2. Implementation Patterns
- **Start simple** - Basic implementation first, then optimize
- **Fail fast** - Validate early in the process
- **Test thoroughly** - Cover edge cases and error paths
- **Document as you code** - Comments and docstrings

### 3. Iteration Discipline
- **Analyze before fixing** - Understand root causes
- **Iterate small** - Small changes are easier to validate
- **Document every iteration** - Why changes were made
- **Share learnings** - Update memory and references

## Common Patterns

### 1. Error Handling
**Pattern:**
```python
try:
    # Implementation
except SpecificException as e:
    log_error(e)
    handle_gracefully()
    raise
```

**Learned From:**
- Don't catch all exceptions
- Log error details
- Handle gracefully
- Re-raise if needed

### 2. Testing Strategy
**Pattern:**
```python
# Arrange, Act, Assert
def test_function():
    input = create_input()
    result = function(input)
    assert result == expected
```

**Learned From:**
- Use descriptive test names
- Arrange all dependencies
- Test edge cases
- Keep tests independent

### 3. API Design
**Pattern:**
```json
{
  "data": {},
  "meta": {
    "timestamp": "ISO8601",
    "request_id": "uuid"
  }
}
```

**Learned From:**
- Include timestamps
- Use request IDs for debugging
- Standard response format
- Clear error messages

## Performance Tips

### Database Queries
- Index frequently queried fields
- Use prepared statements
- Limit result sets
- Optimize N+1 queries

### API Responses
- Implement pagination
- Use caching where appropriate
- Compression enabled
- Response size limits

### Memory Usage
- Monitor memory usage
- Clean up resources
- Use connection pools
- Avoid memory leaks

## Security Practices

### Authentication
- Always use secure authentication
- Implement rate limiting
- Validate all inputs
- Use secure defaults

### Data Protection
- Encrypt sensitive data at rest
- Use environment variables for secrets
- Validate permissions
- Log access

## Deployment Best Practices

### Configuration
- Use environment-specific configs
- Validate configs on startup
- Have rollback procedures
- Document changes

### Monitoring
- Log important events
- Track metrics
- Set up alerts
- Monitor performance

## Code Review Insights

### What to Look For
- Readability and clarity
- Error handling
- Test coverage
- Documentation
- Security considerations

### Common Issues
- Too much abstraction
- Missing error handling
- No tests
- Outdated documentation
- Security vulnerabilities
