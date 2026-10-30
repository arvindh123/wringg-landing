# Native-app privacy and deletion notice rollout

Draft prepared 30 October 2026 against landing main 0407a91. Do not merge/deploy before backend and app verification.

## What changes

The existing privacy notice describes only a May 2026 pilot. The proposed privacy copy adds actual account/order, foreground location, verification/Didit, private proof, payout, token, referral and optional analytics flows. The deletion page reuses the existing LegalPage component and contact details verified from /contact. It removes the unsupported seven-business-day promise and the promise that all order history is erased.

## Required evidence before publication

- Integrate and deploy the washmate account-request-deletion/account-delete-worker lifecycle; verify pending, deferred, processing and completed states on actual disposable Auth users. Completion requires core cleanup and confirmed Auth closure.
- Test in-app initiation and status in both exact store candidates; retain the public support route for older versions and inaccessible accounts.
- Decide appropriate limits and deletion/review handling for proof photos, verification documents, fraud/business/audit records and provider-held data. Current backend draft preserves them with no automatic expiry; the notice says so and does not invent a legal mandate. This remains a store/privacy release gate.
- Resolve the product document that locks partner documents to permanent retention; any change requires an explicit product decision and implementation, not a copy-only promise.
- Verify configured 90-day raw-event cleanup and actual production optional-analytics flags. Root reports collection/export currently disabled. Do not enable analytics without checking app consent, provider payloads, exports and updated disclosures.
- Confirm support handles deletion/provider review and identity verification, without collecting unnecessary documents or OTPs by email. No processing SLA is invented.
- Review current Apple/Play disclosures against the exact native SDK and runtime setup. These pages do not fill the questionnaires or establish compliance.

## Validation actually performed

- Read current repository AGENTS/README and existing legal content/rendering. Preserved existing LegalPage API, static Next Metadata pattern and website palette.
- Retrieved live /privacy, /terms, /delete-account and /contact. /contact lists hello@wringg.in and +91 84385 08211.
- Coordinated deletion semantics with the backend agent; no backend deployment or completed real-account deletion is claimed.
- Executor became unavailable before local lint/typecheck/build/render could run. Those checks remain required. No screenshot, store submission, merge or live website deployment occurred.

## Sources

- washmate docs/product/defaults-locking.md; docs/engineering/launch-growth-runbook.md; proposed 20261030040000_account_deletion.sql and accountDeletion.ts (agent design, pending direct final-code verification).
- https://developer.apple.com/help/app-review/guideline-reference/5-1-1-account-deletion
- https://developer.apple.com/app-store/app-privacy-details/
- https://nextjs.org/docs/app/api-reference/functions/generate-metadata
