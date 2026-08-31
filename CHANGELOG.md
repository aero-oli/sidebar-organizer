## [4.8.0](https://github.com/aero-oli/sidebar-organizer/compare/v4.7.0...v4.8.0) (2026-08-31)

### Features

* simplify settings workspace ([7b96d2c](https://github.com/aero-oli/sidebar-organizer/commit/7b96d2c7b1efa18216b4da4b87b7573067f735ed))

## [4.7.0](https://github.com/aero-oli/sidebar-organizer/compare/v4.6.3...v4.7.0) (2026-08-17)

### Features

* redesign settings workspace ([458aace](https://github.com/aero-oli/sidebar-organizer/commit/458aace1fc760728b4361354d72d1c4fdc32df00))

## [4.6.3](https://github.com/aero-oli/sidebar-organizer/compare/v4.6.2...v4.6.3) (2026-08-17)

### Bug Fixes

* accept custom sidebar link identities ([86a2d8e](https://github.com/aero-oli/sidebar-organizer/commit/86a2d8e46ecac1c9226d23e5a089f66905694ae7))

## [4.6.2](https://github.com/aero-oli/sidebar-organizer/compare/v4.6.1...v4.6.2) (2026-08-17)

### Bug Fixes

* stop repeated panel change reload prompts ([4e658b3](https://github.com/aero-oli/sidebar-organizer/commit/4e658b391d201a9a0aec777f5857f3f603420bf5))

## [4.6.1](https://github.com/aero-oli/sidebar-organizer/compare/v4.6.0...v4.6.1) (2026-08-15)

### Bug Fixes

* keep workbench actions visible ([fcb5889](https://github.com/aero-oli/sidebar-organizer/commit/fcb588965665e48ac6b43a76470ab22093b73823))

## [4.6.0](https://github.com/aero-oli/sidebar-organizer/compare/v4.5.0...v4.6.0) (2026-08-09)

### Features

* redesign settings as guided workbench ([b2af6a5](https://github.com/aero-oli/sidebar-organizer/commit/b2af6a569a6dc063289297f58bf351f2d4f6a55c))

## [4.5.0](https://github.com/aero-oli/sidebar-organizer/compare/v4.4.1...v4.5.0) (2026-08-09)

### Features

* harden configuration management and recovery ([ae3ff44](https://github.com/aero-oli/sidebar-organizer/commit/ae3ff44d2ac5f0eea127566e19a4999661a5a0cb))

### Bug Fixes

* pin Ruff for stable release checks ([aee8243](https://github.com/aero-oli/sidebar-organizer/commit/aee824337f3e0d61f7fee94c26122d53b151b41c))

### Documentation

* update README for fork and v4 integration ([760bd0b](https://github.com/aero-oli/sidebar-organizer/commit/760bd0b73d442c74bd3406934a6fae25a83b46f4))

## [4.4.1](https://github.com/aero-oli/sidebar-organizer/compare/v4.4.0...v4.4.1) (2026-07-31)

### Bug Fixes

* synchronize integration release versions ([5e39747](https://github.com/aero-oli/sidebar-organizer/commit/5e39747ab42c15411874e2c021708a3288a02490))

<a id="v2.1.2"></a>
# [v2.1.2](https://github.com/ngocjohn/sidebar-organizer/releases/tag/v2.1.2) - 2025-08-12

<!-- Release notes generated using configuration in .github/release.yml at v2.1.2 -->

## What's Changed
### New Features 🎉
* Add animation configuration options by [@ngocjohn](https://github.com/ngocjohn) [#43](https://github.com/ngocjohn/sidebar-organizer/issues/43) 
  Introduce options to enable or disable animations and set animation delays for group toggling in the sidebar.
### Fixes 🐛
* Update ha-button component styles by [@ngocjohn](https://github.com/ngocjohn) [#42](https://github.com/ngocjohn/sidebar-organizer/issues/42) 
* Fix hidden items  by [@ngocjohn](https://github.com/ngocjohn) [#44](https://github.com/ngocjohn/sidebar-organizer/issues/44) 
### Other Changes
* Refactor sidebar initialization by removing temporary items handling by [@ngocjohn](https://github.com/ngocjohn) [#35](https://github.com/ngocjohn/sidebar-organizer/issues/35) 


**Full Changelog**: [v2.1.1...v2.1.2](https://github.com/ngocjohn/sidebar-organizer/compare/v2.1.1...v2.1.2)

[Changes][v2.1.2]


<a id="v2.1.1"></a>
# [v2.1.1](https://github.com/ngocjohn/sidebar-organizer/releases/tag/v2.1.1) - 2025-06-30

<!-- Release notes generated using configuration in .github/release.yml at v2.1.1 -->

## What's Changed
### Other Changes
* Enhance sidebar configuration and validation logic by [@ngocjohn](https://github.com/ngocjohn) in [#32](https://github.com/ngocjohn/sidebar-organizer/pull/32)


**Full Changelog**: https://github.com/ngocjohn/sidebar-organizer/compare/v2.1.0...v2.1.1

[Changes][v2.1.1]


<a id="v2.1.0"></a>
# [v2.1.0](https://github.com/ngocjohn/sidebar-organizer/releases/tag/v2.1.0) - 2025-06-28

<!-- Release notes generated using configuration in .github/release.yml at v2.1.0 -->

## What's Changed
### Fixes 🐛
- **Compatibility with Home Assistant 2025.6**
The plugin now supports the new Home Assistant 2025.6 release, which no longer stores panel order in browser local storage. Sidebar Organizer has been updated to handle this change seamlessly while maintaining backward compatibility with earlier versions.
- **New Items with Actions Support**
Introduced support for dynamically adding new sidebar items with associated actions. This allows custom items to be injected into the sidebar with enhanced interactivity and control.

### Other Changes
- **Auto-Correction for Invalid Configurations**
A new safeguard mechanism has been implemented to automatically correct uploaded configurations if they are detected to be invalid. This ensures better stability and fewer crashes due to malformed or outdated sidebar setups.

**Full Changelog**: https://github.com/ngocjohn/sidebar-organizer/compare/v2.0.0...v2.1.0

[Changes][v2.1.0]


<a id="v2.0.0"></a>
# [v2.0.0](https://github.com/ngocjohn/sidebar-organizer/releases/tag/v2.0.0) - 2025-05-07

<!-- Release notes generated using configuration in .github/release.yml at v2.0.0 -->

# 🔄 Sidebar Organizer v2.0.0 – Major Compatibility Update
## 🚀 What's New
- **Home Assistant 2025.5.0+ Compatibility**  
  This version has been reworked to support the major sidebar changes introduced in Home Assistant **2025.5.0** and later.
  
## ⚠️ Migration Notes

- If you're running **Home Assistant 2025.5.0 or newer**, you **must use Sidebar Organizer v2.0.0+**.
- For **older Home Assistant versions**, stick with **v1.4.0 or earlier**.
- This version is **not backward compatible** with Home Assistant versions before 2025.5.0.

**Full Changelog**: https://github.com/ngocjohn/sidebar-organizer/compare/v1.4.0...v2.0.0

[Changes][v2.0.0]


<a id="v1.4.0"></a>
# [v1.4.0](https://github.com/ngocjohn/sidebar-organizer/releases/tag/v1.4.0) - 2025-05-04

<!-- Release notes generated using configuration in .github/release.yml at v1.4.0 -->
### ⚠️ Important Notice

This is the **final functional release** of Sidebar Organizer compatible with **Home Assistant versions prior to 2025.5.x**.

The upcoming Home Assistant **2025.5.x release introduces significant changes** to the sidebar system, which will require major refactoring of Sidebar Organizer.

> 🔒 If you depend on Sidebar Organizer, **you must remain on Home Assistant versions earlier than 2025.5.x** until an updated version of the integration is released.

---
## What's Changed
### New Features 🎉
- **Notification Badge** 
  Introduced support for **notification badge templates**, enabling dynamic badge content using template logic.  
  The badge can now render either **text or an icon**, giving you more flexibility in customization.  
  [#13](https://github.com/ngocjohn/sidebar-organizer/pull/13), [#15](https://github.com/ngocjohn/sidebar-organizer/pull/15) 

  ![CleanShot 2025-05-04 at 16 37 32@2x](https://github.com/user-attachments/assets/943ac215-c66b-4334-9db6-34e67640278f)



**Full Changelog**: https://github.com/ngocjohn/sidebar-organizer/compare/v1.3.0...v1.4.0

[Changes][v1.4.0]


<a id="v1.3.0"></a>
# [v1.3.0](https://github.com/ngocjohn/sidebar-organizer/releases/tag/v1.3.0) - 2025-04-19

<!-- Release notes generated using configuration in .github/release.yml at v1.3.0 -->

## What's Changed
### New Features 🎉
* Add drag and drop sorting for sidebar items by [@ngocjohn](https://github.com/ngocjohn) in [#11](https://github.com/ngocjohn/sidebar-organizer/pull/11)
* Add custom theme support by [@ngocjohn](https://github.com/ngocjohn) in [#12](https://github.com/ngocjohn/sidebar-organizer/pull/12)
  Introduce support for custom themes and improve the handling of theme modes in the sidebar, allowing for better user customization and experience.

![2025-04-20 00 32 59](https://github.com/user-attachments/assets/1784f4b3-8306-4a1f-83a4-cd6b8bfc9444)

**Full Changelog**: https://github.com/ngocjohn/sidebar-organizer/compare/v1.2.0...v1.3.0

[Changes][v1.3.0]


<a id="v1.2.0"></a>
# [v1.2.0](https://github.com/ngocjohn/sidebar-organizer/releases/tag/v1.2.0) - 2025-04-11

<!-- Release notes generated using configuration in .github/release.yml at v1.2.0 -->

## What's Changed

Improved handling of plugin configuration changes to prevent unintended loops and ensure smoother updates. Includes minor bug fixes and internal improvements.

### Fixes 🐛
* Fix: Loop when changing configuration by [@ngocjohn](https://github.com/ngocjohn) in [#8](https://github.com/ngocjohn/sidebar-organizer/pull/8)


**Full Changelog**: https://github.com/ngocjohn/sidebar-organizer/compare/v1.1.0...v1.2.0

[Changes][v1.2.0]


<a id="v1.1.0"></a>
# [v1.1.0](https://github.com/ngocjohn/sidebar-organizer/releases/tag/v1.1.0) - 2025-03-15

<!-- Release notes generated using configuration in .github/release.yml at v1.1.0 -->

## What's Changed
### New Features 🎉
* Add hidden panels support by [@ngocjohn](https://github.com/ngocjohn) in [#1](https://github.com/ngocjohn/sidebar-organizer/pull/1)
* Add custom styles support by [@ngocjohn](https://github.com/ngocjohn) in [#5](https://github.com/ngocjohn/sidebar-organizer/pull/5)

![custom-styles](https://github.com/user-attachments/assets/08d8342d-0522-427b-b8e7-2baa3afa9f77)


### Fixes 🐛
* Fix: Add button visibility by [@ngocjohn](https://github.com/ngocjohn) in [#3](https://github.com/ngocjohn/sidebar-organizer/pull/3)

## New Contributors
* [@ngocjohn](https://github.com/ngocjohn) made their first contribution in [#1](https://github.com/ngocjohn/sidebar-organizer/pull/1)

**Full Changelog**: https://github.com/ngocjohn/sidebar-organizer/compare/v1.0.2...v1.1.0

[Changes][v1.1.0]


<a id="v1.0.2"></a>
# [v1.0.2](https://github.com/ngocjohn/sidebar-organizer/releases/tag/v1.0.2) - 2025-03-07

<!-- Release notes generated using configuration in .github/release.yml at v1.0.2 -->



**Full Changelog**: https://github.com/ngocjohn/sidebar-organizer/compare/v1.0.0...v1.0.2

[Changes][v1.0.2]


<a id="v1.0.0"></a>
# [v1.0.0](https://github.com/ngocjohn/sidebar-organizer/releases/tag/v1.0.0) - 2025-03-03

<!-- Release notes generated using configuration in .github/release.yml at v1.0.0 -->

## Introduction

**Sidebar Organizer** is a custom Home Assistant plugin designed to give you full control over the layout and organization of the sidebar. It allows you to customize the appearance, group items, and reorder or collapse items for a cleaner, more intuitive navigation experience.

With Sidebar Organizer, managing the sidebar in Home Assistant becomes easy and flexible. Whether you want to declutter your sidebar or create a more streamlined view, Sidebar Organizer is here to help.

## Features

- **Customize Sidebar Appearance**: Personalize the look of your sidebar with custom styles, colors, and layouts.
- **Group Menu Items**: Organize sidebar items into specific groups for better clarity and separation of content.
- **Reorder Items**: Drag and drop to reorder items within groups or across the sidebar.
- **Expand/Collapse Groups**: Expand or collapse groups of items to save space and minimize clutter.
- **Manage Bottom Items**: Move specific items to the bottom of the sidebar for quick access.
- **Default Collapse Settings**: Choose which groups of items should be collapsed by default for a cleaner view.

**Full Changelog**: https://github.com/ngocjohn/sidebar-organizer/commits/v1.0.0

[Changes][v1.0.0]


[v2.1.2]: https://github.com/ngocjohn/sidebar-organizer/compare/v2.1.1...v2.1.2
[v2.1.1]: https://github.com/ngocjohn/sidebar-organizer/compare/v2.1.0...v2.1.1
[v2.1.0]: https://github.com/ngocjohn/sidebar-organizer/compare/v2.0.0...v2.1.0
[v2.0.0]: https://github.com/ngocjohn/sidebar-organizer/compare/v1.4.0...v2.0.0
[v1.4.0]: https://github.com/ngocjohn/sidebar-organizer/compare/v1.3.0...v1.4.0
[v1.3.0]: https://github.com/ngocjohn/sidebar-organizer/compare/v1.2.0...v1.3.0
[v1.2.0]: https://github.com/ngocjohn/sidebar-organizer/compare/v1.1.0...v1.2.0
[v1.1.0]: https://github.com/ngocjohn/sidebar-organizer/compare/v1.0.2...v1.1.0
[v1.0.2]: https://github.com/ngocjohn/sidebar-organizer/compare/v1.0.0...v1.0.2
[v1.0.0]: https://github.com/ngocjohn/sidebar-organizer/tree/v1.0.0

<!-- Generated by https://github.com/rhysd/changelog-from-release v3.9.0 -->
