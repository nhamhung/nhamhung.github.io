# Domain Entities

## Static educational content

- FocusArea: one of eleven stable IDs: `algorithms`, `ai`, `graphics`, `security`, `databases`, `hci`, `retrieval`, `networks`, `parallel`, `languages`, `software`. Record official English name, Vietnamese title/explanation, application, interest connection, two or more illustrative career roles, accent and source IDs. One ID maps to one demo model.
- Slide: stable ID, kind, Vietnamese heading/body, optional area ID. Ordered narrative: `opening`, `speaker`, `comparison`, `nus`, `map`, `algorithms`, `ai`, `graphics`, `careers`, `closing`. The map lists all eleven; only three have dedicated featured slides.
- CareerExample: English job title and Vietnamese explanation of the work; illustrative, never a guaranteed placement.
- SourceReference: stable ID, title, official URL and verification date. Final NUS claims link to relevant official CS, CE and focus-area sources. Dates describe actual verification, not anticipated checks.
- ComparisonContent: CS and CE emphases, shared competencies and robot-system explanations with text alternatives.
- ClosingChallenge: reflection prompt, a small project action and exploration/reference actions; no collected student answer.

Static validation: all IDs unique; all area/slide/source references resolve; exactly eleven required area IDs; all Vietnamese content required by the entry contract nonempty; at least two career records per area; selected official names match the verified source. An area cannot silently lack a demo.

## Session entities

TalkSession: mode (`presentation` or `exploration`), valid slide ID, valid selected area ID, manual motion-pause flag. Initial state: presentation, opening slide, algorithms area, unpaused manual flag. System reduced-motion preference is an external policy input, not stored as student data.

ReturnDestination: most recent valid local portfolio section/journal hash observed by the route boundary, or `#home` for direct talk entry. Existing layout/template/colour preferences keep their existing storage ownership. Unknown or external return targets are not accepted.

DemoState: local to the mounted field; valid inputs, optional run/step result and progress. No cross-field persistence is required. Leaving/re-entering a demo resets its local state; selected topic and remembered presentation slide remain in TalkSession.

## Relationships and lifetime

A Slide optionally references one FocusArea. A FocusArea references two or more CareerExamples and official SourceReferences. The session references one Slide and one selected FocusArea. DemoHost resolves exactly one active DemoState. All demo datasets are local and finite. No database, runtime API, account or student response storage exists.

## Invalid states

Unknown slide/area actions preserve the last valid state rather than render missing content. Invalid static content is a development/build verification failure, not an accepted shipped fallback. Bounded UI inputs prevent malformed numerical data; calculations still validate values before computing.

## Extension compliance

Security Baseline and PBT: N/A; explicitly disabled in state. Full extension rules skipped. No enabled blocking findings.
