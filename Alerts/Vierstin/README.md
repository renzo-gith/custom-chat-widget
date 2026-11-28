# Vierstin — YouTube New Membership Alert

Cat alert from the Figma "Prototype" frame (Figma Motion keyframes, 8.3 s). Shown only for **new members** (no milestones, no gifts).

Assets (served from GitHub Pages): `cat.png`, `tail.png`, `box.png`.

## Streamlabs (main version) — `streamlabs/`

1. Streamlabs dashboard → **Alert Box** → open the YouTube **Members / Membership** alert.
2. Turn on **Custom HTML/CSS**, then paste:
   - HTML tab → `streamlabs/alert.html`
   - CSS tab → `streamlabs/alert.css`
   - JS tab → `streamlabs/alert.js` (shrinks long names to fit)
3. Alert duration: **8 seconds** or more. Set the built-in alert animation to the plainest option and leave image empty (the animation is in the CSS). Sound is optional.
4. Use the Alert Box widget URL as a Browser Source in OBS, size **1224 × 723**.
5. Test with the dashboard's test button.

Preview without Streamlabs: `streamlabs/preview.html` (`?bg=1` grey background, `?auto=1` repeat every 10 s, `?name=Name`).

## Backup: YouTube chat Custom CSS — `youtube-chat-css/`

For OBS without Streamlabs: Browser Source with the YouTube pop-out chat URL, size 1224 × 723, Custom CSS = `youtube-chat-css/membership.css`. Limits: chat URL changes every stream, no queue, recent alerts may replay when the source reloads. Needs OBS 31+.
