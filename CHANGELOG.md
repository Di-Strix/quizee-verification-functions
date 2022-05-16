# Changelog

## [2.1.0] - 16.05.2022

### Added

- Add VerificationError and VerificationErrors types which are exported as well

## [2.0.0] - 13.05.2022

### Fixed

- Wait for validation completion before returning

## [2.0.0] - 13.05.2022

### Changed

- Verification functions return only an array of errors
- Verification function's promises don't reject anymore

## [1.3.1] - 13.05.2022

### Fixed

- Types path

## [1.3.0] - 13.05.2022

### Added

- Now both cjs and esm versions are available

## [1.2.0] - 12.05.2022

### Added

- Allow providing custom validation settings

### Changed

- Get all validations error by default

### Fixed

- Allow quiz id to be empty

## [1.1.1] - 12.05.2022

### Fixed

- Allow img uri to be empty

## [1.1.0] - 12.05.2022

### Added

- id field for quizee info

### Changed

- img field is not required now

## [1.0.3] - 12.05.2022

### Fixed

- Switch to ESNext module setting instead of commonjs

## [1.0.2] - 12.05.2022

### Fixed

- Get rid of default import of Joi to suppress ts compile errors
- Remove alpha-numeric rule from quizee caption to allow spaces

## [1.0.1] - 12.05.2022

### Fixed

- Fix package.json

## [1.0.0] - 12.05.2022

Initial
