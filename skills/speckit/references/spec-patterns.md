# Specification Patterns

Common patterns for creating effective specifications in Speckit workflow.

## Patterns

### 1. TDD Specification
```markdown
## Specification: User Authentication

### Requirements
- User can login with email/password
- Session token valid for 24 hours
- Invalid credentials return error

### Tests
- Valid login returns token
- Invalid password returns 401
- Token expires after 24h
```

### 2. Incremental Feature Spec
```markdown
## Specification: Email Notifications

### Phase 1: Basic Setup
- Configure SMTP server
- Send test email
- Error handling

### Phase 2: User Integration
- Send on user signup
- Send on critical events
- User preferences toggle

### Phase 3: Advanced
- HTML templates
- Scheduling
- Analytics
```

### 3. API Specification
```markdown
## Specification: REST API

### Endpoints
- GET /users/:id
- POST /users
- PUT /users/:id
- DELETE /users/:id

### Response Format
- Success: JSON with data
- Error: JSON with error code and message
- Pagination: Link headers

### Rate Limits
- 1000 requests/hour
- Standard headers
```

### 4. Migration Specification
```markdown
## Specification: Database Migration

### Before
- Current schema
- Data transformation needed

### After
- New schema
- Migration scripts
- Rollback plan

### Tests
- Migration succeeds
- Data integrity maintained
- Performance acceptable
```

## Best Practices

1. **Atomic Specifications** - Each spec should be testable independently
2. **Clear Boundaries** - Define inputs and expected outputs
3. **Edge Cases** - Document boundary conditions
4. **Test Coverage** - Specify test cases for each scenario
5. **Documentation** - Keep specs up-to-date as implementation evolves

## Examples

See `../examples/` for complete specification examples.
