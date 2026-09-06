# Claude Code Workflows

Orchestrated delivery workflows that coordinate agents to achieve enterprise-grade software delivery.

## Primary Workflow: Complete Delivery

**Phase 1: Analysis** → **Phase 2: Implementation** → **Phase 3: Testing** → **Phase 4: Accessibility** → **Phase 5: Security** → **Phase 6: Validation** → **Phase 7: Git** → **Phase 8: PR** → **Phase 9: Review** → **Phase 10: Approval** → **Phase 11: Merge**

## Quality Gates (Non-Negotiable)

- ✅ Build must pass
- ✅ Lint must pass
- ✅ TypeScript must pass
- ✅ Tests must pass (80%+ coverage)
- ✅ Accessibility must pass (WCAG AA)
- ✅ Security must pass (no critical issues)
- ✅ Git standards must pass
- ✅ Code review must approve
- ✅ Human must approve
- ✅ All validations must pass

## Workflow Rules

### Sequential Phases
1→2→3→4→5→6→7→8→9→10→11

Each phase waits for the previous to complete. No parallel phases.

### Escalation Points

When quality gates fail:
1. Document issue clearly
2. Identify root cause
3. Request human decision
4. Execute remediation
5. Re-validate
6. Continue workflow

## Related Documentation

- `../AGENT.md` - Main governance document
- `../agents/` - Agent definitions
- `../skills/` - Skill definitions
- `../standards/` - Reference standards
