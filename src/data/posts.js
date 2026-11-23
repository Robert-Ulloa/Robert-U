// Blog posts. Each post body is a list of simple blocks so no Markdown parser is needed:
//   { p: 'paragraph' } | { h2: 'heading' } | { ul: ['item', ...] } | { code: 'snippet' }
//
// Keep posts general: no credentials, internal URLs, project IDs, hosting plans or
// business figures beyond what is already public on the site.

export const posts = [
  {
    slug: 'square-as-source-of-truth',
    title: 'Square as the source of truth: lessons from a live ordering app',
    excerpt:
      'Why the app reads its menu from Square instead of keeping its own copy, and the rules that keep it honest about what is actually in stock.',
    date: '2026-11-23',
    readTime: '4 min read',
    tags: ['Square API', 'Architecture'],
    body: [
      { p: 'When I built Nimble Chicago’s ordering app, one of the most important decisions wasn’t a framework. It was deciding where the truth lives. The café already ran on Square POS for its menu, stock and payments, so the app reads that data from Square rather than owning it.' },
      { h2: 'Don’t build a second menu' },
      { p: 'It’s tempting to copy the catalog into your own database so you can shape it however you like. The problem is drift: the moment someone changes a price on the till, your copy is wrong. So there is no parallel menu table. The backend reads from Square’s Catalog API, and the mobile app caches the result in layers (memory, then on-device storage, then the API) so it stays fast without going stale.' },
      { h2: 'Keep app-only decisions in the app' },
      { p: 'Not everything in a POS should appear in a customer app. Rather than reshaping the Square catalog to suit the app, which would affect the till, the app controls which categories customers see, with a sensible default in code. Square stays the record of what exists; the app decides what to show.' },
      { h2: 'No inventory record means sold out' },
      { p: 'An item can have stock tracking switched on in Square but no inventory count recorded yet. Is it available? For tracked items, the app treats a missing record as zero. It’s the safer failure: briefly showing “sold out” is better than taking payment for something that isn’t there. Made-to-order items, which don’t have stock counts, are handled separately.' },
      { h2: 'Verify every webhook' },
      { p: 'Square notifies the backend of changes by webhook. Each request’s signature is checked, using a constant-time comparison, before anything acts on it, because an unauthenticated endpoint that changes what customers can buy is an open door.' },
      { h2: 'What I’d tell someone starting out' },
      { ul: [
        'Pick one source of truth and avoid duplicating it.',
        'Write your edge-case rules down (like “no record = sold out”) and cover them with tests.',
        'When numbers disagree, trace them through the API response, then the app logic, then the database, before guessing.',
      ] },
    ],
  },
  {
    slug: 'ota-updates-fallback-timeout',
    title: 'Why our app stopped waiting for updates on launch',
    excerpt:
      'A five-second update timeout looked reasonable until it met real mobile data. What went wrong with Expo over-the-air updates, and the trade-off we chose instead.',
    date: '2026-11-23',
    readTime: '3 min read',
    tags: ['React Native', 'Expo', 'QA'],
    body: [
      { p: 'Expo’s over-the-air (OTA) updates let you ship JavaScript fixes without waiting for app-store review. They have been really useful on Nimble, but one setting, fallbackToCacheTimeout, didn’t behave the way we expected on real networks.' },
      { h2: 'What the setting does' },
      { p: 'When the app starts, it checks for a newer JavaScript bundle. The timeout is how long it waits for that download before giving up and launching the version it already has. We originally set it to 5000 milliseconds.' },
      { h2: 'What went wrong' },
      { p: 'On mobile data, the update often didn’t finish downloading within five seconds. So users waited on launch and still got the old version, even though an update was available. The wait bought nothing.' },
      { h2: 'The change' },
      { code: '// app.json → expo.updates\n"fallbackToCacheTimeout": 0' },
      { p: 'With 0, the app launches immediately from the bundle it already has and downloads any update in the background, ready for the next launch.' },
      { h2: 'The trade-off' },
      { ul: [
        'Launches are always fast, whatever the connection.',
        'A new update takes effect on the second open, not the first. That’s worth knowing when you tell someone a fix is live.',
        'The setting lives in app.json, which is native configuration, so changing it needs a new build and store submission. An OTA update can’t change it.',
      ] },
      { h2: 'Takeaway' },
      { p: 'Test release mechanics on the networks your users actually have, not just office Wi-Fi. A QA mindset applies to the delivery pipeline too.' },
    ],
  },
  {
    slug: 'once-a-day-cron',
    title: 'Scheduled notifications with a once-a-day cron',
    excerpt:
      'The backend’s scheduled job only runs once a day, but notifications can be scheduled for any time. A small design choice closed most of the gap.',
    date: '2026-11-23',
    readTime: '3 min read',
    tags: ['Next.js', 'Backend'],
    body: [
      { p: 'Nimble’s admin dashboard lets staff schedule push notifications for later. The backend’s scheduled job, though, only runs once a day. On its own, that would mean a notification scheduled for the afternoon might not go out until the next morning.' },
      { h2: 'Catch up whenever the system is used' },
      { p: 'Rather than adding more infrastructure, the send endpoint does some catching up. Whenever an admin sends a notification, the same request first looks for scheduled notifications that are overdue and sends them. The daily job stays as a safety net.' },
      { h2: 'Trade-offs' },
      { ul: [
        'Simple: no extra services to run.',
        'Not exact: an overdue notification goes out at the next admin send or the daily run, not on the minute.',
        'Each notification is marked as sent with a timestamp once it goes out, so it isn’t picked up again by later runs.',
      ] },
      { h2: 'When to change approach' },
      { p: 'If precise timing becomes a product promise, the right answer is a proper scheduler. Until then, this keeps things simple and gets most of the benefit.' },
    ],
  },
];

export const formatDate = (iso) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
