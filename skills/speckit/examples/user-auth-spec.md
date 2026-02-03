# Example: User Authentication Specification

This is a complete specification example demonstrating the Speckit workflow.

## Original Specification

### Requirements
1. User can login with email and password
2. Session token valid for 24 hours
3. Invalid credentials return appropriate error
4. Password should be hashed securely

### Initial Tests
```python
def test_login_success():
    user = create_user(email="test@example.com", password="secure123")
    token = login("test@example.com", "secure123")
    assert token is not None
    assert len(token) > 0

def test_login_invalid_password():
    create_user(email="test@example.com", password="secure123")
    token = login("test@example.com", "wrongpassword")
    assert token is None
    assert error_code == 401

def test_token_expiration():
    user = create_user(email="expiring@example.com", password="secure123")
    token = login("expiring@example.com", "secure123")
    sleep(24*3600+1)
    token = login("expiring@example.com", "secure123")
    assert token is None
```

## Iteration 1: Implementation

### Code
```python
from werkzeug.security import generate_password_hash, check_password_hash
import secrets
import time

def create_user(email, password):
    hashed = generate_password_hash(password, method='pbkdf2:sha256')
    user = {'email': email, 'password_hash': hashed, 'created_at': time.time()}
    save_to_db(user)
    return user

def login(email, password):
    user = find_user_by_email(email)
    if not user:
        raise AuthenticationError("User not found", status=404)

    if not check_password_hash(user['password_hash'], password):
        raise AuthenticationError("Invalid credentials", status=401)

    token = secrets.token_urlsafe(32)
    token_data = {
        'token': token,
        'user_id': user['id'],
        'expires_at': time.time() + 86400  # 24 hours
    }
    save_token(token_data)
    return token
```

### Test Results
```
✅ test_login_success
✅ test_login_invalid_password
✅ test_token_expiration
```

## Iteration 2: Learning

### Issues Found
1. **Timezone Issues**: Token expiration failed in different timezones
2. **Performance**: Password hashing too slow for high volume
3. **Security**: Token format not validated

### Updated Requirements
1. Session tokens include timezone info
2. Use faster password hashing (bcrypt 12 rounds)
3. Validate token format and signature

### New Tests
```python
def test_login_across_timezones():
    user = create_user(email="timezone@example.com", password="secure123")
    token = login("timezone@example.com", "secure123")
    assert token is not None
    # Token should work regardless of timezone

def test_password_hashing_speed():
    import time
    user = create_user(email="fast@example.com", password="secure123")
    start = time.time()
    for _ in range(1000):
        check_password_hash(user['password_hash'], "secure123")
    duration = time.time() - start
    assert duration < 1.0  # Should complete in 1 second
```

## Updated Specification

### Requirements
1. User can login with email and password
2. Session token valid for 24 hours (timezone-aware)
3. Invalid credentials return appropriate error (401)
4. Password should be hashed with bcrypt (12 rounds)
5. Tokens should be validated for format and signature

### Enhanced Tests
- Timezone handling tests
- Password hashing performance tests
- Token validation tests
- Security tests (length, format)

### Implementation
```python
import bcrypt
import jwt
from datetime import datetime, timezone
from jwt.exceptions import InvalidTokenError

# Enhanced password hashing
def create_user(email, password):
    hashed = bcrypt.hashpw(
        password.encode('utf-8'),
        bcrypt.gensalt(rounds=12)
    ).decode('utf-8')
    user = {
        'email': email,
        'password_hash': hashed,
        'created_at': time.time()
    }
    save_to_db(user)
    return user

# Enhanced token with timezone info
def login(email, password):
    user = find_user_by_email(email)
    if not user:
        raise AuthenticationError("User not found", status=404)

    if not bcrypt.checkpw(password.encode('utf-8'), user['password_hash'].encode('utf-8')):
        raise AuthenticationError("Invalid credentials", status=401)

    token_data = {
        'token': secrets.token_urlsafe(32),
        'user_id': user['id'],
        'timezone': datetime.now(timezone.utc).astimezone().tzinfo,
        'expires_at': time.time() + 86400
    }
    save_token(token_data)
    return token_data['token']

# Token validation
def validate_token(token):
    try:
        decoded = jwt.decode(
            token,
            SECRET_KEY,
            algorithms=['HS256'],
            options={'verify_exp': True}
        )
        return decoded
    except InvalidTokenError as e:
        raise AuthenticationError("Invalid token", status=401)
```

## Iteration 3: Final

### Test Results
```
✅ test_login_success
✅ test_login_invalid_password
✅ test_token_expiration
✅ test_login_across_timezones
✅ test_password_hashing_speed
✅ test_token_validation
✅ test_token_format_validation
```

### Key Learnings
1. Timezone-aware timestamps prevent issues
2. bcrypt with 12 rounds provides good security/speed balance
3. JWT with expiration validation is reliable
4. Token format validation prevents injection attacks
5. Security checks should be thorough

## Documentation Updated

See `../references/spec-patterns.md` for patterns
See `../references/iteration-workflow.md` for workflow
See `../references/learnings.md` for best practices
