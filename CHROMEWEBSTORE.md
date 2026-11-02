# Chrome Web Store Listing — Gråtone

> Last Updated: 2026-11-02

## Store Listing

**Extension Name:** Gråtone

**Short Description:** Gjør sosiale medier gråtonet, så de blir mindre distraherende. Klikk på ikonet for å slå av og på.

**Detailed Description:**

```text
Gråtone fjerner fargene fra sosiale medier, så feeden blir mindre distraherende og kjedeligere å se på.

Bilder, videoer og knapper vises i gråtoner, også i fullskjerm og i dialogvinduer. Gråtone virker på 15 store sosiale medier, blant annet YouTube, Instagram, TikTok, Facebook, Reddit og X. Andre nettsteder blir ikke påvirket.

SLIK BRUKER DU DEN
1. Installer Gråtone. Den er på med en gang.
2. Klikk på ikonet i verktøylinjen for å slå den av eller på.
3. Endringen gjelder med en gang i alle åpne faner. Ikonet viser AV når fargene er tilbake, og valget huskes til neste gang du åpner Chrome.

PERSONVERN
Gråtone samler ikke inn noe og sender ingenting noe sted. Det eneste den lagrer, er om den er på eller av, og det ligger lokalt i nettleseren din.

TILLATELSER
Chrome viser at Gråtone kan lese og endre data på disse nettstedene. Det trengs for å vise sidene i gråtoner. Gråtone leser ikke innholdet på sidene.

STØTTE
Feil eller forslag? Opprett en sak på https://github.com/bjorkepoc/grayscale-social/issues

Gråtone er en uavhengig utvidelse og er ikke tilknyttet nettstedene den virker på.
```

**Category:** Well-being if offered, otherwise Productivity

**Single Purpose:** Displays social media sites in grayscale, with a one-click on/off toggle, to make them less distracting.

**Primary Language:** Norwegian

## Graphics & Assets

| Asset | Dimensions | Status | Filename |
|-------|-----------|--------|----------|
| Store Icon | 128×128 PNG | ✅ Ready | `icons/icon-128.png` |
| Screenshot 1 | 1280×800 JPEG | ✅ Ready | `store-assets/screenshot-1280x800.jpg` |

The screenshot shows a made-up feed, so it contains no third-party brands.

## Permissions Justification

| Permission | Type | Justification |
|------------|------|---------------|
| `storage` | permissions | Remembers whether grayscale is switched on or off, so the choice applies in all tabs and survives a browser restart. This single on/off value is the only thing stored, and it stays on the device. |
| Listed social media sites | content script matches | The stylesheet and a small script run only on the listed social media sites, to display those pages in grayscale and to follow the on/off choice. They do not read page content, and the extension does not run on any other site. |

**Remote code:** No. All code is in the package.

## Privacy & Data Use

**Does the extension collect user data?** No. No data type is collected, and the code makes no network requests.

- [x] Data is NOT sold to third parties
- [x] Data is NOT used for purposes unrelated to the extension's core functionality
- [x] Data is NOT used for creditworthiness or lending purposes

**Privacy Policy URL:** https://github.com/bjorkepoc/grayscale-social#personvern

## Distribution

**Visibility:** Public
**Regions:** All regions

## Developer Info

**Publisher Name and Contact Email:** Taken from the developer account
**Support URL:** https://github.com/bjorkepoc/grayscale-social/issues
**Homepage URL:** https://github.com/bjorkepoc/grayscale-social

## Version History

| Version | Date | Changes | Status |
|---------|------|---------|--------|
| 1.0.0 | 2026-11-02 | First version | Draft |

## Review Notes

### Known Issues / Limitations

The extension covers mastodon.social only, not other Mastodon servers.

### Rejection History

None.
