# Custom Chat Widget

A website and chat widgets for streamers & VTubers, compatible with [Social Stream Ninja](https://socialstream.ninja/).

Site: https://renzo-gith.github.io/custom-chat-widget/

The site follows the browser language (Indonesian or English). Force one with `?lang=id` or `?lang=en`.

## Structure

- `index.html`, `site/assets/`: the website (template gallery, OBS URL builder, custom design service).
- `Core/renzo-chat-core.js`: shared chat logic for all new widgets.
- `Core/SSN-Template.html`: starting point for a new widget.
- `Alerts/`: donation alert overlays (e.g. Trakteer).
- Older widgets (past client work, NekoCat, Pastel Chat) stay in the [SocialStreamNinja](https://github.com/renzo-gith/SocialStreamNinja) repo so existing client OBS links keep working.

## Making a new widget

1. Copy `Core/SSN-Template.html` to `WidgetName/SSN-WidgetName.html`, with image assets in `WidgetName/Asset/`.
2. Change the CSS to match the design. The chat logic doesn't need to be touched.
3. Add it to the `TEMPLATES` list in `index.html` with `path:"WidgetName/SSN-WidgetName.html"`.

OBS link: `https://renzo-gith.github.io/custom-chat-widget/WidgetName/SSN-WidgetName.html?session=SESSION_CODE`

Demo without a session (for positioning in OBS or sending to a client): `...SSN-WidgetName.html?demo=1`

Optional parameters: `&limit=8` `&autohide=30` `&scale=1` `&owner=StreamerName` `&onlytype=youtube,twitch` `&hidetype=tiktok` `&showevents=raid` `&mindono=1`
