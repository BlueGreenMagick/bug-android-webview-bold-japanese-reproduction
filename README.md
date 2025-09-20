

# Android WebView Bold Japanese Font Bug

## Bug Description
Android System WebView version 140+ has a bug where **bold and italic formatting does not render correctly for Japanese/Chinese characters**. The text appears as regular weight instead of bold, while Latin characters continue to display bold formatting correctly.

## Affected Versions
- Android System WebView 140.0.7339.51 and later
- Issue does not occur in version 139.0.7258.158 and earlier

## Workarounds
1. **Downgrade WebView**: Downgrade Android System WebView to version 139
2. **Add `lang` attribute**: Set `<html lang="ja">` or add `lang="ja"` to the container element containing Japanese text

## Test Cases
This repository contains test files demonstrating the issue and the fix:
- `docs/one.html` - Shows the bug (bold Japanese text renders as regular)
- `docs/two.html` - Shows the workaround using `lang="ja"` attribute

## Links
Originally reported on Ankidroid: https://github.com/ankidroid/Anki-Android/issues/19248
Google issue tracker: https://issuetracker.google.com/u/2/issues/446078849