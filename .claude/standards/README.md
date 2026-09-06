# Claude Code Standards Reference

Enterprise-grade standards and best practices referenced throughout the delivery framework.

## Technical Standards

### TypeScript Standards (Next.js 16)
- Strict mode enabled
- No implicit any
- Explicit return types on functions
- Interface-based architecture
- Discriminated unions for variant types

### React Component Standards
- Functional components only (no class components)
- React.FC<Props> type signatures
- Props interface definition
- Memoization when appropriate
- Custom hooks for logic reuse

### Testing Standards (Jest + React Testing Library)
- Minimum 80% code coverage
- Unit tests for components and functions
- Integration tests for features
- Accessibility testing included
- Descriptive test names

## Process Standards

### Git & Commit Standards
- Branch naming: feature/*, bugfix/*, hotfix/*
- Conventional commits: feat:, fix:, refactor:, test:, docs:, style:
- Descriptive commit messages
- Atomic commits (one logical change per commit)
- No force pushes to shared branches

### Code Review Standards
- Two-approver rule for main branch
- Checklist-based review process
- Architecture compliance check
- Security review required
- Accessibility validation

## Quality Standards

### Accessibility (WCAG 2.2 AA)
- Keyboard navigation fully functional
- Focus management visible and logical
- Color contrast 4.5:1 for text
- Semantic HTML markup
- ARIA labels where needed
- Screen reader testing

### Security (OWASP Top 10)
- Input validation on all user inputs
- Output encoding to prevent XSS
- SQL injection protection (parametrized queries)
- CSRF protection on state-changing operations
- No hardcoded secrets or credentials
- HTTPS enforcement

### Performance Standards
- First Contentful Paint < 1.5s
- Largest Contentful Paint < 2.5s
- Cumulative Layout Shift < 0.1
- Code splitting and lazy loading
- Image optimization
- Bundle size monitoring

## Related Documentation

- `../AGENT.md` - Main governance document
- `../agents/` - Agent definitions
- `../skills/` - Skill definitions
- `../workflows/` - Workflow orchestration
