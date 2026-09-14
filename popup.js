(() => {
  "use strict";

  const api = globalThis.browser ?? globalThis.chrome;

  const DEFAULTS = { enabled: true, blur: 6 };
  const MIN_BLUR = 0;
  const MAX_BLUR = 24;

  const enabledInput = document.getElementById("enabled");
  const blurInput = document.getElementById("blur");
  const blurOutput = document.getElementById("blurValue");

  function clampBlur(value) {
    const n = Number(value);
    if (!Number.isFinite(n)) return DEFAULTS.blur;
    return Math.min(MAX_BLUR, Math.max(MIN_BLUR, Math.round(n)));
  }

  function save() {
    api.storage.local.set({
      enabled: enabledInput.checked,
      blur: clampBlur(blurInput.value),
    });
  }

  function render(settings) {
    const enabled = settings.enabled !== false;
    const blur = clampBlur(settings.blur);

    enabledInput.checked = enabled;
    blurInput.value = String(blur);
    blurOutput.textContent = `${blur}px`;
    document.body.classList.toggle("is-disabled", !enabled);
  }

  enabledInput.addEventListener("change", save);
  blurInput.addEventListener("input", () => {
    blurOutput.textContent = `${clampBlur(blurInput.value)}px`;
  });
  blurInput.addEventListener("change", save);

  api.storage.local
    .get(["enabled", "blur"])
    .then(render)
    .catch(() => render(DEFAULTS));
})();
