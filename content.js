(() => {
  "use strict";

  const api = globalThis.browser ?? globalThis.chrome;

  const STORAGE_KEYS = ["enabled", "blur"];
  const DEFAULTS = Object.freeze({ enabled: true, blur: 6 });
  const MIN_BLUR = 0;
  const MAX_BLUR = 24;

  function clampBlur(value) {
    const n = Number(value);
    if (!Number.isFinite(n)) return DEFAULTS.blur;
    return Math.min(MAX_BLUR, Math.max(MIN_BLUR, Math.round(n)));
  }

  function apply(settings) {
    const enabled = settings.enabled !== false;
    const blur = clampBlur(settings.blur);
    const root = document.documentElement;
    root.classList.toggle("whc-disabled", !enabled);
    root.style.setProperty("--whc-blur", `${blur}px`);
  }

  function load() {
    api.storage.local
      .get(STORAGE_KEYS)
      .then(apply)
      .catch(() => apply(DEFAULTS));
  }

  api.storage.onChanged.addListener((changes, area) => {
    if (area !== "local") return;
    if (
      !STORAGE_KEYS.some((key) =>
        Object.prototype.hasOwnProperty.call(changes, key),
      )
    )
      return;
    load();
  });

  load();
})();
