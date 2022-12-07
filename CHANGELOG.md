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

## [0.11.0] - 2022-12-07

### Changed

- lock some deps from dependencies list
- change mdast related lib to remark ecosystem
- enforce some styles in case third party style conflicts
- prefix all css variables
- optimizeDeps @mdx-js/react
- sidebar highlight now support zhCN

### Fixed

- Fix chokidar still watching in build command

## [0.10.2] - 2022-08-02

### Changed

- min-height 400px set for Pc Liveblock and overflow: auto

## [0.10.1] - 2022-07-07

### Fixed

- Support Chinese as Route path with `encodeURI`
- exclude @mdx-js/react from vite pre-bundling

## [0.10.0] - 2022-07-06

### Changed

- Change StyledComponents naming
- Change enum styling from color red to font-weight bold
- Update react-router to v6

## [0.9.1] - 2022-07-06

### Changed

- Lock MDX version.
- Lock Vite vesion.

## [0.9.0] - 2022-06-27

### Changed

- Now use iframe for pc sandboxes.

## [0.8.4] - 2022-05-11

### Fixes

- Fix `package.json#exports` path
- Remove useless LOG_LEVEL design, need add more cli options

### Added

- Add error logging in config reading

## [0.8.3] - 2022-05-10

### Added

- add LOG_LEVEL=VERBOSE to node env will print more info

### Changed

- extract `SharedConfig` to share type between `UserConfig` `UserFileConfig` `ResolvedUserConfig`

### Fixes

- fix iframe tools cannot be click through issue

## [0.8.2] - 2022-04-21

### Added

- console more info for unmatched sandbox
- `docit.config.js` now supports `vite` options
- Iframe now has a tool bar which can view qrcode and open in new tab

### Fixes

- remove outer div of sandbox

### Changed

- changed toc and sidebar style
- adjust mobile view sandbox code height to 640px
- hide toc when no toc at all

## [0.8.1] - 2022-04-18

### Fixed

- Decode moduleId to get the correct module

## [0.8.0] - 2022-04-18

### Changed

- Bump vite version to 2.9.5
- live block now render mobile view in an isolated iframe

## [0.7.1] - 2022-04-06

### Fixed

- js error when parsing toc

## [0.7.0] - 2022-04-06

### Added

- Not web console will print out docit version
- Add `TOC` section

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
