# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Types of changes
- `Added` for new features.
- `Changed` for changes in existing functionality.
- `Deprecated` for soon-to-be removed features.
- `Removed` for now removed features.
- `Fixed` for any bug fixes.
- `Security` in case of vulnerabilities.


## [0.7.0] - Unreleased
### Added
- Not web console will print out docit version

### Fixed
- sidebar anchors now have hover and active style
- using `div` instead of `p`

## [0.6.6] - 2022-03-31

### Fix
- fix `types` is missing in `package.json`
- fix react-frame-component does not provide an export named `default`

### Added
- add `exports` in `package.json`

### Changed
- `start` api will start server

## [0.6.5] - 2022-03-30

### Added
- add `defineConfig`, to help write config file.
- add `ESM` info in `ReadMe` and `docs`
- now support `socials` in `docit.config.js` file.
- export more types
- more docs


## [0.6.4] - 2022-03-29

### Added
- use `yarn release` to publish packages

## [0.6.2] - 2022-03-29

### Fixed
- Republish & fix scripts


## [0.6.1] - 2022-03-29

### Added

- Now respect docit.config.js#title field, update document.title
- More docs on Syntax

### Changed
- Using English as first language, fix api table doc
- Document style tuning
- rewrite sidebar style
- rewrite mobile view style

### Fixed
- Fix wrong doc paths




## [0.6.0] - 2022-03-28

### Added

- using iframe to provide a css sandbox for imported components
- make code block content to a virtual file import as a raw js sandbox
- total rewrite layouts, using calc instead of fixed layout, and prepare for `element.scrollIntoView` feature
- add a `live mobile` view to support responsive component view
- add `CHANGELOG.md`

### Fixed

- Styling for docs

## [0.5.0-beta1] - 2022-03-24

### Added
- First Time release beta version