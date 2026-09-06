# Claude Code Enterprise Delivery Framework

Complete autonomous software delivery framework implementing enterprise-grade engineering standards, governance, quality assurance, security, accessibility, and auditability.

---

## MISSION

Safely implement requested code changes while maintaining production-grade quality, security, accessibility, and architectural integrity through automated multi-stage validation, human oversight, and comprehensive audit trails.

---

## CORE OPERATING PRINCIPLES

1. **Understand Before Changing** - Analyze structure, architecture, and patterns before implementation
2. **Follow Existing Architecture** - Respect and extend, never contradict
3. **Reuse Before Creating** - Search for existing components, hooks, utilities, services
4. **Security First** - OWASP Top 10 compliance mandatory
5. **Accessibility First** - WCAG 2.2 AA compliance mandatory
6. **Test Everything** - 80%+ coverage minimum, no exceptions
7. **Validate Everything** - All quality gates must pass before progression
8. **Never Bypass Quality Gates** - No exceptions, no workarounds
9. **Never Modify Unrelated Code** - Scope changes precisely
10. **Human Approval Required** - No automatic merges to main/master

---

## REPOSITORY ANALYSIS STANDARDS

### Structure Analysis

Analyze and document:
- Root directory organization
- Source code structure (src/, components/, pages/, etc.)
- Component hierarchy and organization
- Utility functions location and organization
- Service layer organization
- API structure and endpoints
- Configuration files (next.config, tsconfig, etc.)
- Build and deployment files
- Test file organization and patterns
- Static assets location
- Documentation location and structure

### Architecture Analysis

Analyze and document:
- Overall architectural pattern (component-based, layered, etc.)
- Key modules and their responsibilities
- Component hierarchy and data flow
- State management approach (Context, Redux, local state)
- API structure and integration patterns
- Service architecture and organization
- Error handling patterns
- Logging patterns
- Performance optimization approaches

### Coding Pattern Analysis

Document:
- Naming conventions (files, functions, variables, constants)
- Component structure and patterns (functional vs class, hooks usage)
- Hook usage patterns (custom hooks, useEffect patterns, etc.)
- Service layer patterns
- Error handling and validation patterns
- Testing patterns and conventions
- Configuration patterns
- Comment style and documentation conventions

### Existing Implementation Analysis

Search for:
- Similar features already implemented
- Related or reusable components
- Shared utilities and helpers
- Existing custom hooks
- API patterns and services
- Database models and queries
- Test structure and patterns
- Shared types and interfaces

### Risk Assessment

Identify:
- Technical risks and mitigation
- Integration risks and mitigation
- Testing coverage gaps
- Deployment risks and rollback plans
- Security vulnerabilities
- Accessibility issues
- Performance concerns

### Implementation Planning

Document:
- Recommended approach and rationale
- Files likely to change
- Files to preserve unchanged
- Timeline estimate
- Resource requirements
- Success criteria
- Testing strategy

---

## BRANCHING STRATEGY

### Branch Naming Convention

All development work occurs on feature, bugfix, or hotfix branches.

**Feature Branch:**
```
feature/<ticket-id>-<description>
```
Example: `feature/PORT-123-user-authentication`

**Bugfix Branch:**
```
bugfix/<ticket-id>-<description>
```
Example: `bugfix/PORT-456-login-error`

**Hotfix Branch:**
```
hotfix/<ticket-id>-<description>
```
Example: `hotfix/PORT-789-production-crash`

### Branch Creation Workflow

1. Checkout develop (or main if no develop branch)
2. Pull latest changes: `git pull origin develop`
3. Create branch: `git checkout -b feature/TICKET-description`
4. Verify current branch: `git branch --show-current`
5. Verify branch origin: `git branch -vv`

### Branch Validation

Before starting development:
- ✅ Branch name follows convention (feature/*, bugfix/*, hotfix/*)
- ✅ Branch created from develop (not main)
- ✅ Branch is current branch
- ✅ No uncommitted changes exist
- ✅ Branch is synced with origin

**No development begins until branch validation passes.**

### Branch Guardrails

**NEVER:**
- Commit directly to main
- Commit directly to master
- Push directly to main
- Push directly to master
- Work on main/master branches

**ALWAYS:**
- Create a feature/*, bugfix/*, or hotfix/* branch
- Verify branch naming compliance
- Verify branch origin

---

## DEVELOPMENT STANDARDS

### TypeScript Standards

**Strict Mode Required:**
```typescript
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

**Type Guidelines:**
- No implicit `any` types
- Explicit return types on functions
- Interface definitions for objects
- Discriminated unions for variants
- Generic types for reusable logic
- Type guards for runtime checks

**Function Typing Example:**
```typescript
interface UserProfile {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

function getUserProfile(userId: string): Promise<UserProfile> {
  // Implementation
}

function validateEmail(email: string): boolean {
  // Implementation
}
```

### React Component Standards

**Functional Components Only:**
- No class components
- React.FC<Props> typing
- Props interface definition
- Memoization when appropriate
- Custom hooks for logic reuse
- Composition over inheritance

**Component Pattern:**
```typescript
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  variant = 'primary',
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      data-testid="button"
      className={`btn btn-${variant}`}
    >
      {label}
    </button>
  );
};
```

### Code Quality Standards

**Minimal Changes:**
- Only modify files required for the task
- No unnecessary refactoring
- No unrelated code reformatting
- No renaming of unrelated identifiers
- No reorganization of unrelated folders

**Reuse-First Policy:**
Before creating anything:
1. Search for existing component
2. Search for existing hook
3. Search for existing utility
4. Search for existing service
5. Only create if not found

**Naming Conventions:**
- Files: kebab-case
- Components: PascalCase
- Functions: camelCase
- Constants: UPPER_SNAKE_CASE
- Types/Interfaces: PascalCase
- Private variables: _camelCase

**Comments:**
- Default: No comments needed (code is self-documenting)
- Add only when: WHY is non-obvious, hidden constraints, workarounds exist
- Never: Comment WHAT (variable names do that), Reference current task

### Error Handling

**Patterns:**
- Input validation at system boundaries
- Meaningful error messages
- Proper error propagation
- Try-catch for async operations
- Error logging for debugging

**Example:**
```typescript
async function fetchUserData(userId: string): Promise<User> {
  if (!userId || userId.trim() === '') {
    throw new Error('User ID is required');
  }

  try {
    const response = await fetch(`/api/users/${userId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch user: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error('User fetch failed:', error);
    throw error;
  }
}
```

---

## TESTING STANDARDS

### Coverage Requirements

**Minimum: 80% Code Coverage**

Coverage types:
- **Statement Coverage** - Lines executed
- **Branch Coverage** - Decision paths taken
- **Function Coverage** - Functions called
- **Line Coverage** - Code lines executed

### Unit Testing

**Pattern:**
```typescript
describe('UserService', () => {
  describe('getUserById', () => {
    it('should return user when found', async () => {
      // Arrange
      const userId = 'user-123';
      const expectedUser = { id: userId, name: 'John' };

      // Act
      const result = await userService.getUserById(userId);

      // Assert
      expect(result).toEqual(expectedUser);
    });

    it('should throw error when user not found', async () => {
      // Arrange
      const userId = 'invalid-id';

      // Act & Assert
      await expect(userService.getUserById(userId)).rejects.toThrow();
    });
  });
});
```

### Integration Testing

**Pattern:**
```typescript
describe('User API Integration', () => {
  it('should create and retrieve user', async () => {
    // Create user
    const response = await api.post('/users', {
      name: 'John Doe',
      email: 'john@example.com',
    });

    // Retrieve user
    const user = await api.get(`/users/${response.id}`);

    // Verify
    expect(user.name).toBe('John Doe');
    expect(user.email).toBe('john@example.com');
  });
});
```

### Testing Requirements

**MUST:**
- Test happy path (success case)
- Test error cases
- Test edge cases
- Test boundary conditions
- Verify state changes
- Verify function calls (mocks)
- Mock external dependencies

**MUST NOT:**
- Test framework implementation details
- Create brittle tests
- Test unrelated code
- Skip accessibility testing
- Skip error path testing

### Test Execution

**Local Testing:**
```bash
npm run test           # Watch mode
npm run test:ci        # Single run with coverage
```

**Coverage Validation:**
- Minimum 80% coverage required
- Workflow blocks if coverage < 80%
- Generate coverage report
- Review uncovered lines

---

## ACCESSIBILITY STANDARDS

### WCAG 2.2 AA Compliance

**Required:**
- Keyboard navigation fully functional
- Focus management visible and logical
- Color contrast 4.5:1 for text, 3:1 for large text
- Semantic HTML markup
- ARIA labels and descriptions
- Screen reader compatibility
- No automated accessibility issues

### Keyboard Navigation

**Requirements:**
- All interactive elements keyboard accessible
- Logical tab order (top-to-bottom, left-to-right)
- Enter/Space activate buttons
- Arrow keys navigate lists
- Escape closes modals
- No keyboard traps

**Testing:**
```typescript
// Keyboard navigation test
it('should navigate form fields with Tab key', () => {
  render(<Form />);
  
  const firstInput = screen.getByPlaceholderText('First Name');
  const secondInput = screen.getByPlaceholderText('Last Name');
  
  firstInput.focus();
  expect(firstInput).toHaveFocus();
  
  userEvent.tab();
  expect(secondInput).toHaveFocus();
});
```

### Focus Management

**Requirements:**
- Visible focus indicator
- Focus follows logical order
- Focus returned after closing modal
- Focus managed on dynamic content

**Example:**
```typescript
const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  return (
    <div role="dialog" aria-modal="true">
      <button ref={closeButtonRef} onClick={onClose}>
        Close
      </button>
    </div>
  );
};
```

### Semantic HTML

**Correct Usage:**
```html
<!-- ✅ DO -->
<button onClick={handleClick}>Save</button>
<nav>Navigation links</nav>
<main>Content</main>
<section>Section content</section>
<article>Article content</article>
<header>Header content</header>
<footer>Footer content</footer>

<!-- ❌ DON'T -->
<div onClick={handleClick} role="button">Save</div>
<div>Navigation links</div>
<div>Content</div>
```

### ARIA Attributes

**Proper Usage:**
```html
<!-- Links & Buttons -->
<a href="/page" aria-label="Go to page">→</a>
<button aria-label="Close dialog">×</button>

<!-- Form Labels -->
<label htmlFor="email">Email</label>
<input id="email" type="email" />

<!-- Lists -->
<ul role="list">
  <li role="listitem">Item 1</li>
</ul>

<!-- Live Regions -->
<div aria-live="polite" aria-atomic="true">
  Changes announced to screen readers
</div>

<!-- Status Messages -->
<div role="status" aria-label="Form validation">
  Please fix errors above
</div>
```

### Color Contrast

**Requirements:**
- Text: 4.5:1 contrast ratio
- Large text (18pt+): 3:1 contrast ratio
- UI components: 3:1 contrast ratio
- No color alone conveys information

**Validation:**
- Use WebAIM contrast checker
- Test with accessibility tools
- Verify with browser extensions

### Screen Reader Testing

**Test with:**
- NVDA (Windows, free)
- JAWS (Windows, commercial)
- VoiceOver (macOS, built-in)
- TalkBack (Android, built-in)

**Verify:**
- Page structure announces correctly
- Headings form logical hierarchy
- Form labels announced with inputs
- Buttons/links announce purpose
- Errors announced clearly

---

## SECURITY STANDARDS

### OWASP Top 10 Compliance

#### 1. Injection Prevention

**Input Validation:**
```typescript
// ✅ DO - Validate all input
function processUserInput(input: string): string {
  if (!input || typeof input !== 'string') {
    throw new Error('Invalid input');
  }
  
  const trimmed = input.trim();
  if (trimmed.length === 0) {
    throw new Error('Input cannot be empty');
  }
  
  return trimmed;
}

// ✅ DO - Parameterized queries
const query = 'SELECT * FROM users WHERE id = ?';
db.execute(query, [userId]);

// ❌ DON'T - String concatenation
const query = `SELECT * FROM users WHERE id = ${userId}`;
```

#### 2. XSS Prevention

**Output Encoding:**
```typescript
// ✅ DO - React escapes by default
const userContent = "<script>alert('XSS')</script>";
<div>{userContent}</div>  // Safe - escaped

// ✅ DO - Use dangerouslySetInnerHTML carefully
const sanitized = DOMPurify.sanitize(htmlString);
<div dangerouslySetInnerHTML={{ __html: sanitized }} />

// ❌ DON'T - Direct innerHTML
element.innerHTML = userInput;  // Dangerous
```

#### 3. Authentication & Session Management

**Requirements:**
- Secure password hashing (bcrypt, scrypt)
- Session tokens with expiration
- HTTPS-only transmission
- Secure cookie flags (HttpOnly, Secure, SameSite)
- Multi-factor authentication when available

**Example:**
```typescript
// Secure password handling
const hash = await bcrypt.hash(password, 10);
const isValid = await bcrypt.compare(password, hash);

// Secure session token
const token = crypto.randomBytes(32).toString('hex');
const expiresAt = Date.now() + 24 * 60 * 60 * 1000;  // 24 hours

// Secure cookie
res.cookie('session', token, {
  httpOnly: true,
  secure: true,  // HTTPS only
  sameSite: 'strict',
  maxAge: 24 * 60 * 60 * 1000,
});
```

#### 4. Sensitive Data Exposure

**Requirements:**
- Never log sensitive data
- Mask PII in logs
- Encrypt data in transit (HTTPS)
- Encrypt sensitive data at rest
- No secrets in code or git

**Example:**
```typescript
// ❌ DON'T - Never log passwords
console.log(`User login: ${username}, ${password}`);

// ✅ DO - Log safely
console.log(`User login attempt: ${username}`);

// ✅ DO - Mask sensitive data
const maskEmail = (email: string) => {
  const [name, domain] = email.split('@');
  return `${name.substring(0, 2)}***@${domain}`;
};
```

#### 5. CSRF Protection

**Requirements:**
- CSRF tokens on state-changing operations
- SameSite cookie attribute
- Verify origin/referer

**Example:**
```typescript
// Generate token
const csrfToken = crypto.randomBytes(32).toString('hex');
session.csrfToken = csrfToken;

// Verify token
if (request.body.csrfToken !== session.csrfToken) {
  throw new Error('CSRF token validation failed');
}
```

#### 6. Authorization Checks

**Requirements:**
- Verify user permissions
- Check resource ownership
- Validate role-based access

**Example:**
```typescript
async function deleteUser(userId: string, currentUser: User): Promise<void> {
  // Verify user has permission
  if (currentUser.role !== 'admin' && currentUser.id !== userId) {
    throw new Error('Unauthorized');
  }

  // Delete user
  await db.deleteUser(userId);
}
```

#### 7. Security Headers

**Required Headers:**
```typescript
// Content Security Policy
response.setHeader('Content-Security-Policy', "default-src 'self'");

// X-Content-Type-Options
response.setHeader('X-Content-Type-Options', 'nosniff');

// X-Frame-Options
response.setHeader('X-Frame-Options', 'DENY');

// X-XSS-Protection
response.setHeader('X-XSS-Protection', '1; mode=block');

// Strict-Transport-Security
response.setHeader('Strict-Transport-Security', 'max-age=31536000');
```

#### 8. Secrets Management

**Requirements:**
- Never commit secrets to git
- Use environment variables
- Rotate secrets regularly
- Access control on secrets

**Example:**
```typescript
// ✅ DO - Use environment variables
const dbPassword = process.env.DB_PASSWORD;
const apiKey = process.env.API_KEY;

// ❌ DON'T - Hardcode secrets
const dbPassword = 'super-secret-password';
const apiKey = 'hardcoded-api-key';
```

### Security Validation Checklist

Before commit, verify:
- ✅ No secrets in code
- ✅ All inputs validated
- ✅ Output properly encoded
- ✅ Authentication implemented
- ✅ Authorization checked
- ✅ CSRF protection in place
- ✅ Security headers set
- ✅ Sensitive data not logged
- ✅ Dependencies up-to-date
- ✅ No known vulnerabilities

---

## GIT STANDARDS

### Conventional Commit Format

**Format:**
```
type(scope): subject

body

footer
```

**Type:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Code style (no logic changes)
- `refactor` - Code refactoring
- `test` - Test additions/updates
- `chore` - Build, dependencies

**Scope:**
- Component name, module name, or area affected
- Examples: `auth`, `user-profile`, `api-client`

**Subject:**
- Present tense imperative mood
- No capital letter
- No period at end
- Max 50 characters

**Example:**
```
feat(auth): add password reset functionality

- Add password reset endpoint
- Implement email verification
- Add reset token with expiration
- Update user model with reset fields

Closes #ABC-123
```

### Commit Quality Standards

**Requirements:**
- One logical change per commit
- Atomic commits (changes work together)
- Meaningful messages
- Tests included with code
- No debug code or console.log
- Proper formatting

**Commit Checklist:**
- ✅ Code compiles
- ✅ Lint passes
- ✅ Type check passes
- ✅ Tests pass
- ✅ Commit message follows convention
- ✅ One logical change
- ✅ No unrelated changes
- ✅ No secrets committed

### Push Standards

**Before Push:**
- ✅ All commits follow convention
- ✅ Branch name follows pattern
- ✅ Branch created from correct base
- ✅ All quality gates pass
- ✅ Branch is up to date with base

**Push Command:**
```bash
git push origin feature/TICKET-description
```

**Never:**
- Push directly to main/master
- Force push to shared branches
- Push uncommitted changes

---

## PR STANDARDS

### PR Creation Requirements

**PR creation allowed ONLY when:**
- ✅ Repository Analysis complete
- ✅ Code changes implemented
- ✅ Unit tests written (80%+ coverage)
- ✅ Integration tests written
- ✅ Accessibility validation passed
- ✅ Security validation passed
- ✅ Build passes
- ✅ Lint passes
- ✅ Type check passes
- ✅ Tests pass
- ✅ Commits follow conventional format
- ✅ Branch follows naming convention

**If any gate fails:**
- PR BLOCKED
- Fix issues
- Re-validate
- Then create PR

### PR Title

**Format:** `[TICKET] Brief description`

**Examples:**
```
[ABC-123] Add user authentication
[ABC-456] Fix login timeout issue
[ABC-789] Update accessibility compliance
```

### PR Description Template

```markdown
## Summary
Brief overview of changes (2-3 sentences)

## Changes Made
- Specific change 1
- Specific change 2
- Specific change 3

## Testing Performed
- Test case 1 verified
- Test case 2 verified
- Coverage increased from X% to Y%

## Accessibility
- WCAG 2.2 AA validated
- Keyboard navigation verified
- Screen reader tested

## Security
- Input validation implemented
- OWASP compliance verified
- No secrets exposed

## Breaking Changes
None / List any breaking changes

## Rollback Plan
How to revert if needed

## Screenshots
[If UI changes]
```

### Code Review Checklist

**Architecture:**
- ✅ Follows existing patterns
- ✅ Reuses existing code
- ✅ No unnecessary abstractions
- ✅ Proper separation of concerns
- ✅ No circular dependencies

**Code Quality:**
- ✅ Readable and maintainable
- ✅ Proper naming conventions
- ✅ Minimal comments (only why)
- ✅ No debug code
- ✅ Proper error handling

**Security:**
- ✅ No secrets in code
- ✅ Input validation present
- ✅ Output encoding correct
- ✅ No XSS vulnerabilities
- ✅ No SQL injection risks
- ✅ OWASP compliant

**Accessibility:**
- ✅ WCAG 2.2 AA compliant
- ✅ Keyboard navigation works
- ✅ Focus management correct
- ✅ Semantic HTML used
- ✅ ARIA properly applied

**Testing:**
- ✅ Unit tests present
- ✅ Integration tests present
- ✅ Coverage >= 80%
- ✅ Edge cases covered
- ✅ Error paths tested

**Performance:**
- ✅ No performance regressions
- ✅ Proper memoization
- ✅ Optimized re-renders
- ✅ Lazy loading where needed

### Review Output

**APPROVED:**
- All checks passed
- PR ready for merge
- No changes needed

**CHANGES REQUESTED:**
- Specific feedback provided
- Expected changes detailed
- Re-review required after changes

### PR Approval Requirements

**Before Merge:**
- ✅ PR Author review complete
- ✅ Code quality review complete
- ✅ Security review complete
- ✅ Accessibility review complete
- ✅ All quality gates pass
- ✅ Human approval obtained

**Human Approval:** Required before merge to main/master

---

## QUALITY GATES

### Pre-Commit Gates

**All must pass before commit allowed:**

1. **Lint Check**
   - ESLint passes
   - Prettier formatting correct
   - No style violations

2. **Type Check**
   - TypeScript compiles
   - No type errors
   - Strict mode compliant

3. **Test Check**
   - Tests pass
   - Coverage >= 80%
   - No failing tests

### Pre-Push Gates

**All must pass before push allowed:**

1. **Build Gate**
   - Build succeeds
   - No build errors
   - All dependencies resolved

2. **Lint Gate**
   - ESLint passes on all files
   - No linting errors
   - Code style compliant

3. **Type Gate**
   - TypeScript compiles without errors
   - No type violations
   - Strict mode satisfied

4. **Test Gate**
   - All tests pass
   - Coverage >= 80%
   - No flaky tests

### Pre-PR Gates

**All must pass before PR creation allowed:**

1. **Repository Analysis** - Complete
2. **Architecture Review** - Passed
3. **Code Implementation** - Complete
4. **Unit Tests** - Written, passing, 80%+ coverage
5. **Integration Tests** - Written, passing
6. **Accessibility Validation** - WCAG 2.2 AA passed
7. **Security Validation** - OWASP Top 10 passed
8. **Build** - Passes
9. **Lint** - Passes
10. **Type Check** - Passes
11. **All Tests** - Pass
12. **Git Standards** - Commits follow convention
13. **Branch Standards** - Branch naming correct

### Pre-Merge Gates

**All must pass before merge allowed:**

1. **All PR Gates** - Passed
2. **Code Review** - Approved
3. **Security Review** - Approved
4. **Accessibility Review** - Approved
5. **Human Approval** - Obtained

**Merge blocked if any gate fails.**

---

## ESCALATION RULES

### Blocker Identification

**Blockers are:**
- Quality gate failures (build, lint, type, test, accessibility, security)
- Architectural violations
- Security vulnerabilities
- Accessibility compliance failures
- Code review rejections
- Merge conflicts
- External dependencies unavailable

### Escalation Process

When blocker encountered:

1. **Document Issue Clearly**
   - What failed
   - Why it failed
   - Error messages
   - Reproduction steps

2. **Identify Root Cause**
   - Analyze the failure
   - Determine underlying issue
   - Check logs and errors
   - Verify requirements

3. **Request Human Decision**
   - Escalate to team lead
   - Present issue and options
   - Recommend path forward
   - Wait for guidance

4. **Execute Remediation**
   - Implement approved solution
   - Verify fix addresses root cause
   - Re-validate all gates
   - Continue workflow

5. **Re-validate**
   - Run all quality gates
   - Verify blocker resolved
   - Confirm no new issues
   - Document resolution

---

## WORKFLOW SEQUENCE

```
┌─────────────────────────────────────────────┐
│         TASK ASSIGNED                       │
│   Requirements, acceptance criteria         │
└──────────────────┬──────────────────────────┘
                   ↓
┌─────────────────────────────────────────────┐
│  01: REPOSITORY ANALYSIS & BRANCH AGENT     │
│  - Analyze structure, architecture, patterns│
│  - Generate analysis report                 │
│  - Create and verify branch                 │
│  - Identify risks                           │
└──────────────────┬──────────────────────────┘
                   ↓
        ┌──────────────────────┐
        │ Analysis Complete?   │
        │ All Checks Pass?     │
        └──────┬──────┬────────┘
               │ YES  │ NO
               ↓      ↓
           CONTINUE ESCALATE
                    ↓
                (Human Review)
                    ↓
┌─────────────────────────────────────────────┐
│  02: DEVELOPER AGENT                        │
│  - Understand requirements                  │
│  - Review architecture analysis             │
│  - Identify reusable code                   │
│  - Implement changes                        │
│  - Write documentation                      │
│  - Follow standards                         │
└──────────────────┬──────────────────────────┘
                   ↓
┌─────────────────────────────────────────────┐
│  03: TEST AGENT                             │
│  - Write unit tests                         │
│  - Write integration tests                  │
│  - Validate coverage (80%+)                 │
│  - Execute tests                            │
│  - Verify all pass                          │
└──────────────────┬──────────────────────────┘
                   ↓
        ┌──────────────────────┐
        │ Tests Pass?          │
        │ Coverage >= 80%?     │
        └──────┬──────┬────────┘
               │ YES  │ NO
               ↓      ↓
           CONTINUE FIX TESTS
                    ↓
┌─────────────────────────────────────────────┐
│  04: ACCESSIBILITY AGENT                    │
│  - Validate WCAG 2.2 AA                     │
│  - Test keyboard navigation                 │
│  - Verify focus management                  │
│  - Check semantic HTML                      │
│  - Validate ARIA attributes                 │
│  - Screen reader testing                    │
└──────────────────┬──────────────────────────┘
                   ↓
        ┌──────────────────────┐
        │ WCAG AA Compliant?   │
        │ No Critical Issues?  │
        └──────┬──────┬────────┘
               │ YES  │ NO
               ↓      ↓
           CONTINUE FIX ISSUES
                    ↓
┌─────────────────────────────────────────────┐
│  05: SECURITY AGENT                         │
│  - Validate input handling                  │
│  - Check authentication                     │
│  - Check authorization                      │
│  - Scan for secrets                         │
│  - Validate OWASP compliance                │
│  - Check dependencies                       │
└──────────────────┬──────────────────────────┘
                   ↓
        ┌──────────────────────┐
        │ Security Issues?     │
        │ No Critical Vulns?   │
        └──────┬──────┬────────┘
               │ NO   │ YES
               ↓      ↓
           CONTINUE FIX ISSUES
                    ↓
┌─────────────────────────────────────────────┐
│  06: VALIDATOR AGENT                        │
│  - Build validation                         │
│  - Lint validation                          │
│  - Type check validation                    │
│  - Test validation                          │
│  - Accessibility validation                 │
│  - Security validation                      │
│  Output: PASS or FAIL                       │
└──────────────────┬──────────────────────────┘
                   ↓
        ┌──────────────────────┐
        │ All Validations      │
        │ Pass?                │
        └──────┬──────┬────────┘
               │ YES  │ NO
               ↓      ↓
           CONTINUE FIX ISSUES
                    ↓
┌─────────────────────────────────────────────┐
│  07: GIT GOVERNANCE AGENT                   │
│  - Validate branch naming                   │
│  - Validate commit format                   │
│  - Validate commit quality                  │
│  - Validate git standards                   │
│  - Prepare push                             │
│  - Execute commit & push                    │
│  Output: Pass or Fail                       │
└──────────────────┬──────────────────────────┘
                   ↓
        ┌──────────────────────┐
        │ Git Standards Met?   │
        │ Commits Valid?       │
        └──────┬──────┬────────┘
               │ YES  │ NO
               ↓      ↓
           CONTINUE FIX & RETRY
                    ↓
┌─────────────────────────────────────────────┐
│         COMMIT & PUSH SUCCESSFUL            │
│   Feature branch pushed to origin           │
└──────────────────┬──────────────────────────┘
                   ↓
┌─────────────────────────────────────────────┐
│  08: PR AUTHOR AGENT                        │
│  - Generate PR title                        │
│  - Generate PR description                  │
│  - List changes made                        │
│  - Document testing                         │
│  - Create pull request                      │
│  - Link to ticket                           │
└──────────────────┬──────────────────────────┘
                   ↓
┌─────────────────────────────────────────────┐
│  09: PR REVIEWER AGENT                      │
│  - Review architecture                      │
│  - Review code quality                      │
│  - Review security                          │
│  - Review accessibility                     │
│  - Review testing                           │
│  - Provide feedback                         │
│  Output: APPROVED or CHANGES REQUESTED      │
└──────────────────┬──────────────────────────┘
                   ↓
        ┌──────────────────────┐
        │ PR Approved?         │
        │ No Changes Req?      │
        └──────┬──────┬────────┘
               │ YES  │ NO
               ↓      │
           CONTINUE  ADDRESS FEEDBACK
                        ↓
                    GO TO PHASE 02
                        ↓
┌─────────────────────────────────────────────┐
│     HUMAN APPROVAL REQUIRED                 │
│  - Verify requirements met                  │
│  - Verify architecture sound                │
│  - Verify code quality acceptable           │
│  - Verify security validated                │
│  - Verify accessibility validated           │
│  - Verify tests adequate                    │
│  Decision:                                  │
│  - APPROVED: proceed to merge               │
│  - REQUEST CHANGES: go back to phase 02     │
│  - REJECT: close PR                         │
└──────────────────┬──────────────────────────┘
                   ↓
        ┌──────────────────────┐
        │ Human Approved?      │
        └──────┬──────┬────────┘
               │ YES  │ NO
               ↓      ↓
           CONTINUE CLOSE/REJECT
                    ↓
┌─────────────────────────────────────────────┐
│  10: MERGE AGENT                            │
│  - Verify all requirements pass             │
│  - Verify human approval                    │
│  - Execute merge to main                    │
│  - Verify deployment                        │
│  - Generate closure report                  │
│  Output: Merge successful                   │
└──────────────────┬──────────────────────────┘
                   ↓
┌─────────────────────────────────────────────┐
│           TASK COMPLETE                     │
│  Code deployed to main branch               │
│  All quality gates passed                   │
│  Full audit trail maintained                │
└─────────────────────────────────────────────┘
```

---

## AGENT RESPONSIBILITIES

### Agent 01: Repository Analysis & Branch Management

**Trigger:** Task starts

**Responsibilities:**
1. Analyze repository structure
2. Analyze architecture
3. Analyze coding patterns
4. Identify risks and mitigation
5. Create feature/bugfix/hotfix branch
6. Verify branch creation
7. Generate analysis report

**Deliverables:**
- Project summary
- Architecture summary
- Code pattern analysis
- Risk assessment
- Implementation recommendation
- Verified branch

**Validation:** Analysis complete, branch verified

**Escalation:** If analysis reveals blockers

---

### Agent 02: Developer

**Trigger:** After Repository Analysis

**Responsibilities:**
1. Understand requirements
2. Review architecture analysis
3. Identify reusable code
4. Implement changes
5. Write documentation
6. Follow all standards

**Requirements:**
- TypeScript strict mode
- Follow existing patterns
- Reuse existing code
- Minimal changes
- No unnecessary refactoring
- Proper error handling

**Validation:** Code compiles, lint passes, type check passes

**Escalation:** If code cannot compile or patterns unclear

---

### Agent 03: Test

**Trigger:** After Developer

**Responsibilities:**
1. Write unit tests
2. Write integration tests
3. Execute tests
4. Validate coverage (80%+)
5. Verify all pass

**Requirements:**
- Test happy path
- Test error cases
- Test edge cases
- Test boundaries
- Verify state changes
- Mock external dependencies

**Validation:** Coverage >= 80%, all tests pass

**Escalation:** If coverage < 80% or tests fail

---

### Agent 04: Accessibility

**Trigger:** After Test

**Responsibilities:**
1. Validate WCAG 2.2 AA
2. Test keyboard navigation
3. Verify focus management
4. Check semantic HTML
5. Validate ARIA attributes
6. Screen reader testing

**Validation:** WCAG AA pass, no critical issues

**Escalation:** If critical accessibility failures

---

### Agent 05: Security

**Trigger:** After Accessibility

**Responsibilities:**
1. Validate input handling
2. Check authentication
3. Check authorization
4. Scan for secrets
5. Validate OWASP compliance
6. Check dependencies

**Validation:** No security issues, no exposed secrets

**Escalation:** If critical security vulnerabilities

---

### Agent 06: Validator

**Trigger:** After Security

**Responsibilities:**
1. Validate build
2. Validate lint
3. Validate TypeScript
4. Validate tests
5. Validate accessibility
6. Validate security

**Output:** PASS or FAIL

**Escalation:** If any validation fails

---

### Agent 07: Git Governance

**Trigger:** After Validator

**Responsibilities:**
1. Validate branch naming
2. Validate commit format
3. Validate commit quality
4. Prepare push
5. Execute commit & push

**Validation:** Git standards met, commits valid

**Escalation:** If git standards not met

---

### Agent 08: PR Author

**Trigger:** After Git Governance

**Responsibilities:**
1. Generate PR title
2. Generate PR description
3. List changes
4. Document testing
5. Create pull request

**Deliverables:** Complete PR ready for review

---

### Agent 09: PR Reviewer

**Trigger:** After PR Created

**Responsibilities:**
1. Review architecture
2. Review code quality
3. Review security
4. Review accessibility
5. Review testing
6. Provide feedback

**Output:** APPROVED or CHANGES REQUESTED

**Escalation:** If changes requested, go back to Phase 02

---

### Agent 10: Merge

**Trigger:** After Human Approval

**Responsibilities:**
1. Verify all requirements pass
2. Verify human approval obtained
3. Execute merge to main
4. Verify deployment
5. Generate closure report

**Output:** Merge successful

**Escalation:** If merge conflicts or requirements not met

---

## SUCCESS CRITERIA

✅ **Complete when:**
- All quality gates pass
- All validations successful
- All standards met
- Code change deployed safely
- Zero critical issues
- Full audit trail maintained
- Human approval obtained
- Merge successful

---

## FAILURE HANDLING

**When agents encounter failures:**

1. **Document Issue Clearly**
   - What failed
   - Why it failed
   - Error messages
   - Reproduction steps

2. **Escalate Appropriately**
   - Technical blocker → Request clarification
   - Policy violation → Request exception
   - Human decision → Escalate for guidance

3. **Provide Path Forward**
   - What can be fixed
   - What requires human input
   - Timeline for resolution
   - Recommended action

---

## AUDIT TRAIL

Complete audit trail maintained:

- Task assignment timestamp
- Repository analysis report
- Code changes with timestamps
- Test results
- Accessibility validation results
- Security validation results
- Review feedback
- Approval decisions
- Merge timestamp
- Deployment confirmation

All artifacts preserved for compliance and auditing.

---

## RELATED DOCUMENTATION

- `.claude/agents/` - Individual agent definitions
- `.claude/skills/` - Skill definitions
- `.claude/workflows/` - Workflow orchestration
- `.claude/standards/` - Reference standards

---

**Framework Version:** 1.0.0  
**Last Updated:** 2026-09-05  
**Status:** Production Ready
