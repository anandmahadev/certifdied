# Changelog

All notable changes to CertifyPro will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
+
+## [1.1.0] - 2026-04-16
+### Added
+- Comprehensive SEO metadata and social sharing tags in the frontend.
+- Memory usage diagnostics to the /health API endpoint.
+- ANSI color-coded logging for better server observability.
+- JSDoc documentation for User model and schema protection.
+- Added `.dockerignore` for optimized container builds.
+
+### Optimized
+- Re-engineered certificate generation loop to fetch template assets once per batch.
+- Enhanced `.gitignore` patterns for Next.js and Turbo.
+
+### Changed
+- Rebranded README with premium styling and consistent naming.

## [1.0.0] - 2026-04-03
### Added
- Initial release of CertifyPro platform.
- Bulk certificate generation from CSV imports.
- Automated email delivery via SMTP.
- Template management system with dynamic field mapping.
- Modern dashboard UI with Next.js 15.
- Core authentication system with JWT.
- Integrated .editorconfig for cross-platform editor consistency.
- Expanded CONTRIBUTING.md with conventional commit standards.
- Added JSDoc documentation for all primary API controllers.
- Enhanced server logging for improved development experience.

### Fixed
- TypeScript issues in server controllers.
- Root route type safety in app.ts.
- Prettier configuration for consistent code styling.
