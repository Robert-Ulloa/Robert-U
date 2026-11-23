// Blog posts. Each post body is a list of simple blocks so no Markdown parser is needed:
//   { p: 'paragraph' } | { h2: 'heading' } | { ul: ['item', ...] } | { code: 'snippet' }

export const posts = [
  {
    slug: 'square-as-source-of-truth',
    title: 'Square as the source of truth: lessons from a live ordering app',
    excerpt:
      'Why we never copied the menu into our own database, and the edge-case rules that kept a café’s app honest about what was actually in stock.',
    date: '2026-11-10',
    readTime: '5 min read',
    tags: ['Square API', 'Architecture'],
    body: [
      { p: 'When I built Nimble Chicago’s ordering app, the most important decision wasn’t a framework. It was deciding where the truth lives. The café already ran on Square POS for its menu, stock and payments, so the app would never own that data. It would read it.' },
      { h2: 'Don’t build a second menu' },
      { p: 'It’s tempting to copy the catalog into your own database so you can shape it however you like. The problem is drift: the moment staff change a price on the till, your copy is wrong. We kept no parallel menu table. The API reads from Square’s Catalog API and the app caches the response.' },
      { h2: 'Visibility belongs in code' },
      { p: 'Some Square categories only make sense on the till: staff items, internal SKUs, things customers should never see. Rather than ask staff to maintain a second list somewhere, the API filters a small, explicit list of hidden category names. It’s versioned, reviewed in pull requests, and easy to change.' },
      { h2: 'Missing inventory means zero' },
      { p: 'One edge case surfaced in testing. An item can have inventory tracking switched on but no inventory record yet. Is it in stock? We decided that tracked with no record means sold out. It’s the safer failure: a customer seeing “sold out” for a few minutes is better than paying for something that isn’t there.' },
      { h2: 'Verify every webhook' },
      { p: 'Square pushes catalog and inventory changes by webhook. Every request is checked against the webhook signature key before we act on it, because an unauthenticated endpoint that changes what customers can buy is an open door.' },
      { h2: 'What I’d tell someone starting out' },
      { ul: [
        'Pick one source of truth and refuse to duplicate it.',
        'Write your edge-case rules down (like “no record = sold out”) and test them deliberately.',
        'When numbers disagree, trace them through the API response, then the app logic, then the database, before guessing.',
      ] },
    ],
  },
  {
    slug: 'ota-updates-fallback-timeout',
    title: 'One OTA setting, a race condition, and why our app now opens instantly',
    excerpt:
      'Expo’s over-the-air updates are brilliant until a five-second timeout meets patchy mobile data. What went wrong and the one-line fix.',
    date: '2026-10-27',
    readTime: '4 min read',
    tags: ['React Native', 'Expo', 'QA'],
    body: [
      { p: 'Expo’s over-the-air (OTA) updates let you ship JavaScript fixes without waiting for app-store review. On Nimble that has been invaluable. But one setting, fallbackToCacheTimeout, caused us real trouble.' },
      { h2: 'What the setting does' },
      { p: 'When the app starts, it can check for a new bundle and wait up to a set number of milliseconds for it before falling back to the cached one. We had it at 5000, so the app would wait up to five seconds for the newest code.' },
      { h2: 'The problem on mobile data' },
      { p: 'On Wi-Fi it was fine. On patchy mobile data, launches stalled, and the update download and the cached bundle could race each other, producing inconsistent behaviour that was hard to reproduce. A classic “works on my desk” bug.' },
      { h2: 'The fix' },
      { code: '// app.json\n"updates": {\n  "fallbackToCacheTimeout": 0\n}' },
      { p: 'With 0, the app always launches instantly from the bundle it already has, and downloads any update in the background for the next open. Customers get a fast start every time, and fixes still land one launch later.' },
      { h2: 'The catch' },
      { p: 'That value lives in app.json, which is native configuration. OTA can’t deliver a change to it: it needs a new EAS build and a store submission. Worth knowing before you promise anyone a quick fix.' },
      { h2: 'Takeaway' },
      { p: 'Test your release mechanics on the networks your users actually have, not just the office Wi-Fi. A QA mindset applies to the delivery pipeline too.' },
    ],
  },
  {
    slug: 'once-a-day-cron',
    title: 'Scheduled notifications with a once-a-day cron',
    excerpt:
      'Our hosting plan only allowed one cron run per day, but staff wanted to schedule push notifications by the hour. A small design choice closed most of the gap.',
    date: '2026-10-12',
    readTime: '3 min read',
    tags: ['Next.js', 'Backend'],
    body: [
      { p: 'Nimble’s backend runs on Vercel’s Hobby plan. It’s great value, with one constraint that mattered to us: scheduled cron jobs can run at most once a day.' },
      { p: 'That’s a problem when the admin dashboard lets staff schedule push notifications. “2-for-1 lattes at 3pm” isn’t much use at 9am the next morning.' },
      { h2: 'Catch up whenever the system is touched' },
      { p: 'Instead of upgrading straight away, we made the system catch up whenever it’s used. Every time an admin sends a notification, the same request first looks for scheduled notifications that are overdue and sends them inline. The daily cron stays as a safety net.' },
      { h2: 'Trade-offs' },
      { ul: [
        'Cheap and simple: no extra infrastructure to run or pay for.',
        'Not exact: an overdue message goes out at the next admin action or the daily run, not on the minute.',
        'Each notification is marked as sent with a timestamp, so the inline flush and the cron don’t send the same message twice.',
      ] },
      { h2: 'When to upgrade' },
      { p: 'If precise timing becomes a product promise, the right answer is a proper scheduler. Until then, a small design choice bought most of the benefit for none of the cost.' },
    ],
  },
];

export const formatDate = (iso) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
