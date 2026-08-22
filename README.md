# Grand Tour of Scotland

Website for the Grand Tour of Scotland — a 2000km [Audax](https://www.audax.uk/event-details?id=14142) event around Scotland,
starting in Dumfries on Monday 31 July 2028.

The site provides event information, and is static HTML with one stylesheet and one small javascript snippet. There is no build step:
what is in this repository is served as-is.

## Pages

| File | Section |
| --- | --- |
| `index.html` | Home — hero, key facts, links to each section |
| `about.html` | What the event is |
| `route.html` | Start details, ferries, road conditions, route map |
| `controls.html` | Control list with times and facilities, full control info as PDF download |
| `gpx.html` | Route files / link to [RwGPS](https://ridewithgps.com/routes/54428229) |
| `tracking.html` | Live tracking / trackers info |
| `faq.html` | Frequently Asked Questions |
| `enter.html` | How to enter |
| `contact.html` | Email contact |
| `404.html` | Not found |

## Structure

```
assets/css/site.css      All styles (design tokens at the top)
assets/js/site.js        Mobile nav toggle — the only JavaScript on the site
assets/fonts/            Montserrat, subset to Latin and served as woff2
assets/img/              Photography, route map, Scotland outline (SVG)
assets/downloads/        Full control information sheet (PDF)
favicon.svg, apple-touch-icon.png, robots.txt, sitemap.xml
```

## Local preview

Any static web server will do, for example:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Design notes

- **Mobile first.** Phones get the full-width white sheet and no background photograph, because the
  photograph would not be visible behind the content. From tablet width up, the sheet narrows and the
  photography frames the page; the wide crops only load from 64rem up.
- **Colours and type** are defined as custom properties in `:root` at the top of `assets/css/site.css`:
  navy `#2a3e6f`, accent red `#c63835`, paper `#fbfcfb`, Montserrat throughout.
- **Page background photos** are set with a body class (`bg-hero`, `bg-riders`, `bg-coast`, `bg-loch`,
  `bg-harbour`), each defined near the bottom of the stylesheet.
- **The Scotland outline** in the logo, header, footer and favicon is a single SVG
  (`assets/img/scotland-outline.svg`) applied as a CSS mask, so it takes the current text colour.
- **No JavaScript is required** to read any page. Without it the navigation renders as an open list.
- **Images** are WebP, sized for how they are actually displayed: background photos at 1600px and 900px
  wide, circular feature photos at 760px (2× their largest display size). `social-share.jpg` stays a JPEG
  because some social media scrapers still prefer it.
- **Fonts** are subset to Latin and preloaded, so the wordmark and body text render in one pass.

## Updating the controls

`controls.html` holds the condensed web version: control name, venue, distance, opening and closing times,
and facility badges. Rows are plain `<table>` markup that becomes a card list on narrow screens, so a
control can be edited by hand — copy an existing `<tr>` and change the values. Facility badges are
`<li class="facility">` items referencing the icons in the SVG sprite at the top of the page
(`#i-food`, `#i-bed`, `#i-shower`, `#i-bag`).

Ferry crossings are rows with `class="is-ferry"`.

The full control information sheet — addresses, dates and times, control sizes, facilities — is offered as a PDF download at
`assets/downloads/grand-tour-of-scotland-audax-controls-2028.pdf`. Replace this file when control info changes, and keep
the condensed table in sync with those changes.
