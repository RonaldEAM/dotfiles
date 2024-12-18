// set keys for hints using dvorak
api.Hints.setCharacters("aoeudhtnsypfgcr");
settings.hintAlign = "left";

// an example to create a new mapping `ctrl-y`
api.mapkey("<ctrl-y>", "Show me the money", function() {
  Front.showPopup(
    "a well-known phrase uttered by characters in the 1996 film Jerry Maguire (Escape to close).",
  );
});

// an example to replace `T` with `gt`, click `Default mappings` to see how `T` works.
api.map("gt", "T");
api.map("<Ctrl-o>", "S");
api.map("<Ctrl-^>", "<Ctrl-6>");
api.map("h", "E");
api.map("l", "R");
api.map("<Ctrl-i>", "D");

// an example to remove mapkey `Ctrl-i`
api.unmap("<ctrl-i>");
api.unmap("S");
api.unmap("E");
api.unmap("R");
api.unmap("<Ctrl-6>");
api.unmap("D");

// set theme
api.Hints.style(
  "border: solid 2px #4C566A; color:#A3BE8C; background: initial; background-color: #3B4252;",
);
api.Hints.style(
  "border: solid 2px #4C566A !important; padding: 1px !important; color: #E5E9F0 !important; background: #3B4252 !important;",
  "text",
);
api.Visual.style("marks", "background-color: #A3BE8C99;");
api.Visual.style("cursor", "background-color: #88C0D0;");

settings.omnibarMaxResults = 5;

settings.theme = `
/* Edit these variables for easy theme making */
:root {
  /* Font */
  --font: 'JetBrainsMono Nerd Font Medium', "Cascadia Code", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-size: 14px;
  --font-weight: bold;
  
  --fg: #E5E9F0;
  --bg: #3B4252;
  --bg-dark: #2E3440;
  --border: #4C566A;
  --main-fg: #88C0D0;
  --accent-fg: #A3BE8C;
  --info-fg: #5E81AC;
  --select: #4C566A;

  /* Unused Alternate Colors */
  /* --orange: #D08770; */
  /* --red: #BF616A; */
  /* --yellow: #EBCB8B; */
}

/* ---------- Generic ---------- */
.sk_theme {
background: var(--bg);
color: var(--fg);
  background-color: var(--bg);
  border-color: var(--border);
  font-family: var(--font);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
}

input {
  font-family: var(--font);
  font-weight: var(--font-weight);
}

.sk_theme tbody {
  color: var(--fg);
}

.sk_theme input {
  color: var(--fg);
}

/* Hints */
#sk_hints .begin {
  color: var(--accent-fg) !important;
}

#sk_tabs .sk_tab {
  background: var(--bg-dark);
  border: 1px solid var(--border);
}

#sk_tabs .sk_tab_title {
  color: var(--fg);
}

#sk_tabs .sk_tab_url {
  color: var(--main-fg);
}

#sk_tabs .sk_tab_hint {
  background: var(--bg);
  border: 1px solid var(--border);
  color: var(--accent-fg);
}

#sk_tabs.vertical div.sk_tab_hint {
    position: static;
}

.sk_theme #sk_frame {
  background: var(--bg);
  opacity: 0.2;
  color: var(--accent-fg);
}

/* ---------- Omnibar ---------- */
/* Uncomment this and use settings.omnibarPosition = 'bottom' for Pentadactyl/Tridactyl style bottom bar */
.sk_theme#sk_omnibar {
  background: #353738;
  border: 1px solid #040404;
  outline: 1px solid #696A6A;
  outline-offset: -2px;
  border-radius: 15px;
  box-shadow: 0px 2px 50px rgba(0, 0, 0, 0.5);
  width: 50%;
  left: calc(100vw - 75%);
  top: calc(100vh - 75%);
}

.sk_theme .title {
  color: var(--accent-fg);
}

.sk_theme .url {
  color: var(--main-fg);
}

.sk_theme .annotation {
  color: var(--accent-fg);
}

.sk_theme .omnibar_highlight {
  color: var(--accent-fg);
}

.sk_theme .omnibar_timestamp {
  color: var(--info-fg);
}

.sk_theme .omnibar_visitcount {
  color: var(--accent-fg);
}

.sk_theme #sk_omnibarSearchResult {
  margin: 0.5rem 0.6rem;
}

.sk_theme #sk_omnibarSearchResult ul li:nth-child(odd),
.sk_theme #sk_omnibarSearchResult ul li {
  border-radius: 5px;
  padding: 0.75rem;
  background: transparent;
}

.sk_theme #sk_omnibarSearchResult ul li.focused {
  background: #337185;
}

#sk_omnibarSearchResult li .icon {
  margin-right: 1rem;
}

#sk_omnibarSearchResult li div.title,
#sk_omnibar span.omnibar_highlight {
  color: #DBDBDB;
}

#sk_omnibarSearchResult li div.url {
  color: #7B7C7C;
}

#sk_omnibarSearchResult li.focused div.url {
  white-space: nowrap;
}

.sk_theme #sk_omnibarSearchArea {
  padding: 1rem;
  margin: 0 0.5rem;
  border: unset;
  border-bottom: 1px solid #4E4E50;
  position: relative;
}

.sk_theme #sk_omnibarSearchArea input {
  font-size: 18px;
  padding: 0 0 0 1rem;
}

.sk_theme #sk_omnibarSearchArea span.prompt {
  width: 20px;
}

.sk_theme #sk_omnibarSearchArea span.prompt::after {
  content: url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23FFFFFF' d='M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z'/%3E%3C/svg%3E");
  width: 14px;
  height: 14px;
  display: block;
  position: absolute;
  top: calc(25% + 4px);
  left: 1rem;
}

.sk_theme .separator {
  display: none;
}

.sk_theme #sk_omnibarSearchArea .resultPage {
  display: none;
}

/* ---------- Popup Notification Banner ---------- */
#sk_banner {
  font-family: var(--font);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  background: var(--bg);
  border-color: var(--border);
  color: var(--fg);
  opacity: 0.9;
}

/* ---------- Popup Keys ---------- */
#sk_keystroke {
  background-color: var(--bg);
}

.sk_theme kbd .candidates {
  color: var(--info-fg);
}

.sk_theme span.annotation {
  color: var(--accent-fg);
}

/* ---------- Popup Translation Bubble ---------- */
#sk_bubble {
  background-color: var(--bg) !important;
  color: var(--fg) !important;
  border-color: var(--border) !important;
}

#sk_bubble * {
  color: var(--fg) !important;
}

#sk_bubble div.sk_arrow div:nth-of-type(1) {
  border-top-color: var(--border) !important;
  border-bottom-color: var(--border) !important;
}

#sk_bubble div.sk_arrow div:nth-of-type(2) {
  border-top-color: var(--bg) !important;
  border-bottom-color: var(--bg) !important;
}

/* ---------- Search ---------- */
#sk_status,
#sk_find {
  font-size: var(--font-size);
  border-color: var(--border);
}

.sk_theme kbd {
  background: var(--bg-dark);
  border-color: var(--border);
  box-shadow: none;
  color: var(--fg);
}

.sk_theme .feature_name span {
  color: var(--main-fg);
}

/* ---------- ACE Editor ---------- */
#sk_editor {
  background: var(--bg-dark) !important;
  height: 50% !important;
  /* Remove this to restore the default editor size */
}

.ace_dialog-bottom {
  border-top: 1px solid var(--bg) !important;
}

.ace-chrome .ace_print-margin,
.ace_gutter,
.ace_gutter-cell,
.ace_dialog {
  background: var(--bg) !important;
}

.ace-chrome {
  color: var(--fg) !important;
}

.ace_gutter,
.ace_dialog {
  color: var(--fg) !important;
}

.ace_cursor {
  color: var(--fg) !important;
}

.normal-mode .ace_cursor {
  background-color: var(--fg) !important;
  border: var(--fg) !important;
  opacity: 0.7 !important;
}

.ace_marker-layer .ace_selection {
  background: var(--select) !important;
}

.ace_editor,
.ace_dialog span,
.ace_dialog input {
  font-family: var(--font);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
}
`;
