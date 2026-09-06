# Claude Code Agents

Enterprise-grade software delivery agents that implement the workflow defined in `AGENT.md`.

## Agent Registry

| # | Agent | Responsibility | Trigger | Success Criteria |
|---|-------|-----------------|---------|------------------|
| 01 | Repository Analysis | Analyze repo structure, architecture, patterns; create/verify branch | Task starts | Analysis complete, branch verified |
| 02 | Developer | Implement code changes following standards | After analysis | Code compiles, follows patterns, minimal changes |
| 03 | Test | Write unit/integration tests; validate coverage | After implementation | 80%+ coverage, all tests pass |
| 04 | Accessibility | Validate WCAG 2.2 AA compliance | After tests | WCAG AA pass, no critical issues |
| 05 | Security | Validate security standards, scan secrets | After accessibility | No security issues, secrets protected |
| 06 | Validator | Build, lint, typecheck, test, accessibility, security | After security | All checks pass |
| 07 | Git Governance | Validate branch/commit standards, prepare push | After validator | Branch named correctly, commits validated |
| 08 | PR Author | Generate PR title, description, document changes | After push | PR ready for review |
| 09 | PR Reviewer | Review code quality, architecture, security | After PR created | Approved or changes requested |
| 10 | Merge | Verify approvals and requirements; execute merge | After reviewer approves | Merge successful, deployed |

## Workflow Sequence

Task → 01-Analysis → 02-Developer → 03-Test → 04-Accessibility → 05-Security → 06-Validator → 07-Git → Commit & Push → 08-PR Author → 09-Reviewer → Human Approval → 10-Merge → Deploy

## Quality Gates

Each agent has built-in quality gates that STOP the workflow if not met:

- **Agent 02**: Compilation
- **Agent 03**: Coverage > 80%
- **Agent 04**: WCAG AA compliance
- **Agent 05**: No critical security issues
- **Agent 06**: All validations pass
- **Agent 07**: Git standards met
- **Agent 09**: Code review approval
- **Agent 10**: Human approval + all requirements

## Success Metrics

- ✅ All quality gates passed
- ✅ All validations successful
- ✅ All standards met
- ✅ Code change deployed safely
- ✅ Zero critical issues
- ✅ Full audit trail maintained

## Related Documentation

- `../AGENT.md` - Main governance document
- `../skills/` - Reusable skill definitions
- `../workflows/` - Workflow orchestration
- `../standards/` - Reference standards
