import { cleanUrl } from "./cleanUrl";

document.addEventListener(
  "copy",
  (e) => {
    const el = document.activeElement as HTMLInputElement | HTMLTextAreaElement | null;
    const selected =
      el && typeof el.selectionStart === "number"
        ? el.value.slice(el.selectionStart!, el.selectionEnd!)
        : window.getSelection()?.toString() ?? "";
    const cleaned = cleanUrl(selected);
    if (selected && cleaned !== selected) {
      e.clipboardData?.setData("text/plain", cleaned);
      e.preventDefault();
    }
  },
  true
);