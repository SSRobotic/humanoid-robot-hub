# Contributing a resource

Help make this hub useful, accurate and easy to navigate.

1. Open a resource suggestion issue with the original GitHub URL, what the project does, supported robots / software and license.
2. Explain whether it is a humanoid-specific resource or a supporting tool.
3. Keep authorship and source attribution clear. Link upstream rather than uploading an unverified copy.
4. To edit the directory, change `catalog.json` and run `python scripts/build_catalog.py` to regenerate `docs/catalog.js`. Include both files in the pull request.
5. Check search, category / source filters, Thai / English switching, empty results and a narrow browser layout after UI changes.

Collection updates must record their source commit in `provenance.json` and retain existing notices. Report broken links or incorrect descriptions through an issue.
