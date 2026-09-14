<h1 align="center">👁️‍🗨️ whatsapp-hide-contacts 👁️‍🗨️</h1>
<h2 align="center">Blur your WhatsApp Web contacts for privacy — hover to reveal.</h2>

<p align="center">
    <img alt="screenshot" src="https://github.com/user-attachments/assets/949d86e0-6462-496b-ae45-3ce7845065aa" />
</p>

> [!NOTE]
>
> **whatsapp-hide-contacts** is a lightweight, cross-browser extension that blurs every contact card
> (avatar, name and last message) in your WhatsApp Web chat list. Cards stay hidden until you hover
> over them — so prying eyes only ever see blurred boxes. It is built with pure CSS and a tiny
> content script, meaning it never touches WhatsApp's own logic and runs with zero overhead when
> WhatsApp Web is closed.

## 🌟 Features

- **Hover-to-reveal blur** – Each contact card (image, name, last message) stays blurred until you hover over it.
- **Contacts only** – Blurs just the sidebar contact list and never touches message search results.
- **Adjustable intensity** – A 0–24px blur slider that applies live, without reloading the page.
- **Instant re-blur** – Reveals smoothly on hover, but hides instantly on mouse-out for maximum privacy.
- **On/off toggle** – One-click disable from the popup; settings persist locally.
- **Zero background footprint** – No background worker; fully inactive unless `web.whatsapp.com` is open.
- **100% local & private** – No data collection, no network requests, no telemetry.
- **Cross-browser** – Chrome, Edge, Brave and Firefox via Manifest V3.

## 🛠️ Tech Stack

- **Vanilla JavaScript** (ES2020+) — no frameworks, no build step, no dependencies.
- **CSS3** — `filter: blur()`, CSS custom properties, `:has()` selectors, `prefers-reduced-motion`.
- **Manifest V3 (WebExtension API)** — `chrome.storage` / `browser.storage`, content scripts.

## 💻 Installation

### Chrome / Edge / Brave

1. Open `chrome://extensions` (or `brave://extensions`, `edge://extensions`).
2. Enable **Developer mode** (top-right).
3. Click **Load unpacked** and select this repository folder.
4. Pin the extension from the puzzle icon and open [web.whatsapp.com](https://web.whatsapp.com).

### Firefox

1. Open `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on…** and select the `manifest.json` file.
3. Open [web.whatsapp.com](https://web.whatsapp.com).

> No build step required — the extension runs directly from source.

---

## 💻 Contributing

> [!TIP]
> We welcome contributions to improve **whatsapp-hide-contacts**! If you have suggestions, bug fixes, or new feature ideas, follow these steps:

1. **Fork the Repository**
   Click the **Fork** button at the top-right of the repo page.

2. **Clone Your Fork**
   Clone the repo locally:

   ```bash
   git clone https://github.com/ArnavK-09/whatsapp-hide-contacts-browser-extension.git
   ```

3. **Create a Branch**
   Create a new branch for your changes:

   ```bash
   git checkout -b your-feature-branch
   ```

4. **Make Changes**
   Implement your changes (bug fixes, features, etc.).

5. **Commit and Push**
   Commit your changes and push the branch:

   ```bash
   git commit -m "feat(scope): description"
   git push origin your-feature-branch
   ```

6. **Open a Pull Request**
   Open a PR with a detailed description of your changes.

7. **Collaborate and Merge**
   The maintainers will review your PR, request changes if needed, and merge it once approved.

## 🙋‍♂️ Issues

Found a bug or need help? Please create an issue on the [GitHub repository](https://github.com/ArnavK-09/whatsapp-hide-contacts-browser-extension/issues) with a detailed description.

## 👤 Author

<table>
  <tbody>
    <tr>
        <td align="center" valign="top" width="14.28%"><a href="https://github.com/ArnavK-09"><img src="https://github.com/ArnavK-09.png?s=100" width="130px;" alt="Arnav K"/></a><br /><a href="https://github.com/ArnavK-09"<h4><b>Arnav K</b></h3></a></td>
    </tr>
  </tbody>
</table>

---

<h2 align="center">📄 License</h2>

<p align="center">
<strong>whatsapp-hide-contacts</strong> is licensed under the <code>Unlicense</code> License. See the <a href="https://github.com/ArnavK-09/whatsapp-hide-contacts-browser-extension/blob/main/LICENSE">LICENSE</a> file for more details.
</p>

---

<p align="center">
    <strong>🌟 If you find this project helpful, please give it a star on GitHub! 🌟</strong>
</p>
