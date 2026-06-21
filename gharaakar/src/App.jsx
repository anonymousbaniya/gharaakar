import { useState, useEffect } from "react";
import { content } from "./content";

/* ── Theme hook ── */
function useTheme() {
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem("ga-theme") === "dark"; } catch { return false; }
  });
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    try { localStorage.setItem("ga-theme", dark ? "dark" : "light"); } catch {}
  }, [dark]);
  return [dark, () => setDark(d => !d)];
}

/* ── Brand Logo Image ── */
const BrandLogo = ({ size = 42 }) => (
  <img
    src="/gharaakharlogo.jpg"
    alt="Ghar Aakar Logo"
    style={{ width: size, height: size, borderRadius: "50%", objectFit: "cover", display: "block", flexShrink: 0 }}
  />
);

/* ── Vastu compass icon ── */
const VastuIcon = ({ color = "currentColor", size = 36 }) => (
  <svg viewBox="0 0 48 48" width={size} height={size} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {/* Outer circle */}
    <circle cx="24" cy="24" r="20" strokeOpacity="0.35"/>
    {/* Inner circle */}
    <circle cx="24" cy="24" r="10" strokeOpacity="0.6"/>
    {/* Cardinal spokes */}
    <line x1="24" y1="4" x2="24" y2="14"/>
    <line x1="24" y1="34" x2="24" y2="44"/>
    <line x1="4" y1="24" x2="14" y2="24"/>
    <line x1="34" y1="24" x2="44" y2="24"/>
    {/* Compass needle - north (filled) */}
    <polygon points="24,10 26.5,24 24,22 21.5,24" fill={color} stroke="none"/>
    {/* Compass needle - south (outline) */}
    <polygon points="24,38 26.5,24 24,26 21.5,24" fill="none" stroke={color} strokeWidth="1.5"/>
    {/* Diagonal tick marks */}
    <line x1="10.1" y1="10.1" x2="14.2" y2="14.2" strokeOpacity="0.5"/>
    <line x1="37.9" y1="10.1" x2="33.8" y2="14.2" strokeOpacity="0.5"/>
    <line x1="10.1" y1="37.9" x2="14.2" y2="33.8" strokeOpacity="0.5"/>
    <line x1="37.9" y1="37.9" x2="33.8" y2="33.8" strokeOpacity="0.5"/>
    {/* Center dot */}
    <circle cx="24" cy="24" r="2" fill={color} stroke="none"/>
  </svg>
);

/* ── Functionality / usable space icon ── */
const FunctionalityIcon = ({ color = "currentColor", size = 36 }) => (
  <svg viewBox="0 0 48 48" width={size} height={size} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {/* Outer house-like frame */}
    <rect x="6" y="6" width="36" height="36" rx="3" strokeOpacity="0.35"/>
    {/* Floor plan grid */}
    {/* Vertical divider */}
    <line x1="22" y1="6" x2="22" y2="42" strokeOpacity="0.5"/>
    {/* Horizontal divider */}
    <line x1="6" y1="28" x2="42" y2="28" strokeOpacity="0.5"/>
    {/* Kitchen symbol - top-left */}
    <rect x="10" y="10" width="8" height="5" rx="1" fill={color} fillOpacity="0.15" stroke={color} strokeOpacity="0.8"/>
    {/* Bedroom symbol - top-right */}
    <rect x="26" y="10" width="12" height="7" rx="1" fill={color} fillOpacity="0.1" stroke={color} strokeOpacity="0.8"/>
    <line x1="26" y1="13.5" x2="38" y2="13.5" strokeOpacity="0.5"/>
    {/* Bathroom - bottom-left */}
    <circle cx="14" cy="35" r="4" strokeOpacity="0.7"/>
    <line x1="10" y1="35" x2="18" y2="35" strokeOpacity="0.5"/>
    {/* Arrows indicating optimization */}
    <polyline points="28,33 32,29 36,33" strokeOpacity="0.9"/>
    <line x1="32" y1="29" x2="32" y2="38" strokeOpacity="0.9"/>
  </svg>
);

/* ── Budget transparency / no-hidden-costs icon ── */
const BudgetIcon = ({ color = "currentColor", size = 36 }) => (
  <svg viewBox="0 0 48 48" width={size} height={size} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {/* Shield */}
    <path d="M24 4 L40 10 L40 26 C40 34 32 42 24 44 C16 42 8 34 8 26 L8 10 Z" strokeOpacity="0.4"/>
    {/* Inner shield fill */}
    <path d="M24 8 L36 13 L36 26 C36 32 30 38 24 40 C18 38 12 32 12 26 L12 13 Z" fill={color} fillOpacity="0.07" stroke={color} strokeOpacity="0.65"/>
    {/* Rupee symbol - ₹ */}
    <line x1="19" y1="18" x2="29" y2="18" strokeWidth="2"/>
    <line x1="19" y1="22" x2="29" y2="22" strokeWidth="2"/>
    <path d="M19 18 L19 28" strokeWidth="2"/>
    <path d="M19 22 Q29 22 26 32" strokeWidth="2"/>
    {/* Checkmark overlay */}
    <path d="M17 32 L22 37 L31 25" stroke={color} strokeWidth="2.2" strokeOpacity="0" fill="none"
      style={{ strokeDasharray: 20, strokeDashoffset: 0 }}/>
  </svg>
);

/* ── Stat: Saved icon ── */
const SavedIcon = ({ color = "currentColor", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

/* ── Stat: Projects icon ── */
const ProjectsIcon = ({ color = "currentColor", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 3v18M15 3v18M3 9h18M3 15h18" strokeDasharray="2 2" strokeWidth="1" />
    <path d="M5 6l4 4 6-6" strokeWidth="2.5" />
  </svg>
);

/* ── Stat: Families icon ── */
const FamiliesIcon = ({ color = "currentColor", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

/* ── Arrow right ── */
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

/* ── X close ── */
const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

/* ── Language toggle: EN | NE pill ── */
function LangToggle({ lang, setLang }) {
  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      <button id="lang-en" className={`lang-opt${lang === "en" ? " active" : ""}`} onClick={() => setLang("en")}>EN</button>
      <div className="lang-sep" />
      <button id="lang-ne" className={`lang-opt${lang === "np" ? " active" : ""}`} onClick={() => setLang("np")}>NE</button>
    </div>
  );
}

/* ── Theme toggle: sliding visual switch ── */
function ThemeToggle({ dark, toggle }) {
  return (
    <button id="theme-toggle" className="theme-switch" onClick={toggle} aria-label="Toggle theme">
      <div className={`theme-thumb ${dark ? "dark" : "light"}`}>
        {dark ? (
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        )}
      </div>
    </button>
  );
}

/* ── Consultation modal ── */
function Modal({ t, open, close }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const en = t.brand === "Ghar Aakar";

  useEffect(() => {
    if (open) {
      setName("");
      setPhone("");
      setAddress("");
      setSent(false);
      setBusy(false);
    }
  }, [open]);

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setBusy(true);

    fetch("/api/book-consultation/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.trim(),
        phone: phone.trim(),
        address: address.trim(),
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to submit request");
        }
        return res.json();
      })
      .then((data) => {
        setBusy(false);
        setSent(true);
      })
      .catch((err) => {
        setBusy(false);
        alert(en ? "Failed to send consultation request. Please try again." : "परामर्श अनुरोध पठाउन असफल भयो। कृपया फेरि प्रयास गर्नुहोस्।");
        console.error("Error submitting lead:", err);
      });
  };

  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={close}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        {/* Orange header */}
        <div className="modal-header">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <BrandLogo size={34} />
              <span style={{ fontSize: "17px", fontWeight: 800, fontFamily: "var(--font-serif)" }}>{t.brand}</span>
            </div>
            <button id="close-modal" onClick={close} style={{
              background: "rgba(255,255,255,0.2)", border: "none", borderRadius: "50%",
              width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: "#fff", flexShrink: 0,
            }}>
              <XIcon />
            </button>
          </div>
          <div style={{ fontSize: "11px", opacity: 0.85, letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>{t.ctaHeading}</div>
          <div style={{ fontSize: "21px", fontWeight: 800, fontFamily: "var(--font-serif)", marginTop: "4px", lineHeight: 1.15 }}>{t.ctaSubheading}</div>
        </div>

        {/* Form body */}
        <div className="modal-body">
          {sent ? (
            <div style={{ textAlign: "center", padding: "24px 0" }}>
              <svg viewBox="0 0 48 48" style={{ width: 48, height: 48, margin: "0 auto 12px" }}>
                <circle cx="24" cy="24" r="22" fill="none" stroke="var(--orange)" strokeWidth="2" opacity="0.25"/>
                <circle cx="24" cy="24" r="22" fill="none" stroke="var(--orange)" strokeWidth="2"/>
                <path d="M13 24l8 8 14-14" fill="none" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  style={{ strokeDasharray: 30, strokeDashoffset: 30, animation: "drawCheck 0.5s 0.2s forwards" }}/>
              </svg>
              <div style={{ fontSize: "18px", fontWeight: 700, color: "var(--orange)" }}>
                {en ? "Confirmed!" : "सुनिश्चित!"}
              </div>
              <div style={{ fontSize: "14px", color: "var(--text-muted)", marginTop: "6px" }}>
                {en ? "We'll contact you within 24 hours." : "२४ घण्टाभित्र सम्पर्क गर्नेछौँ।"}
              </div>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div>
                <label style={{ display: "block", fontSize: "10px", fontWeight: 700, color: "var(--text-muted)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "6px" }}>{t.formName}</label>
                <input id="lead-name" type="text" value={name} onChange={e => setName(e.target.value)} placeholder={t.formName} required className="field" />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "10px", fontWeight: 700, color: "var(--text-muted)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "6px" }}>{t.formPhone}</label>
                <input id="lead-phone" type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder={t.formPhone} required className="field" />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "10px", fontWeight: 700, color: "var(--text-muted)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "6px" }}>{t.formAddress}</label>
                <input id="lead-address" type="text" value={address} onChange={e => setAddress(e.target.value)} placeholder={t.formAddress} required className="field" />
              </div>
              <button id="submit-lead" type="submit" disabled={busy} className="submit-btn">
                {busy ? (
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", justifyContent: "center" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ animation: "spin 1s linear infinite" }}>
                      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="3" opacity="0.3"/>
                      <path d="M12 2a10 10 0 019.95 9" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                    {en ? "Sending..." : "पठाउँदै..."}
                  </span>
                ) : t.formSubmit}
              </button>

              {/* Benefits grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px 10px" }}>
                {[t.bullet1, t.bullet2, t.bullet3, t.bullet4].map((b, i) => (
                  <div key={i} style={{ fontSize: "11px", color: "var(--text-muted)", lineHeight: 1.5 }}>{b}</div>
                ))}
              </div>
              <div style={{ borderTop: "1px solid var(--card-border)", paddingTop: "12px", fontSize: "10px", color: "var(--text-faint)", textAlign: "center", letterSpacing: "0.05em" }}>
                {t.socialProof}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

/* ══════════ MAIN APP ══════════ */
export default function App() {
  const [lang, setLang] = useState("en");
  const [modal, setModal] = useState(false);
  const [dark, toggleTheme] = useTheme();
  const t = content[lang];
  const en = t.brand === "Ghar Aakar";

  const principleIcons = [VastuIcon, FunctionalityIcon, BudgetIcon];
  const principleAccents = [
    { bg: "rgba(232,101,26,0.10)", border: "rgba(232,101,26,0.22)", label: en ? "VASTU" : "वास्तु" },
    { bg: "rgba(59,130,246,0.08)", border: "rgba(59,130,246,0.20)", label: en ? "DESIGN" : "डिजाइन" },
    { bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.20)", label: en ? "BUDGET" : "बजेट" },
  ];
  const principleIconColors = ["var(--orange)", "#3b82f6", "#10b981"];

  const principles = [
    { title: t.p1Title, desc: t.p1Desc },
    { title: t.p2Title, desc: t.p2Desc },
    { title: t.p3Title, desc: t.p3Desc },
  ];

  const stats = [
    { val: en ? "Rs.12L" : "१२ लाख", lbl: en ? "SAVED" : "बचत" },
    { val: en ? "100+"   : "१००+",       lbl: en ? "PROJECTS" : "प्रोजेक्ट" },
    { val: en ? "120+"  : "१२०+",      lbl: en ? "FAMILIES" : "परिवार" },
  ];
  const statIcons = [SavedIcon, ProjectsIcon, FamiliesIcon];

  return (
    <div className="app-root">

      {/* ════ HEADER ════ */}
      <header className="header">
        <div style={{ display: "flex", alignItems: "center", gap: "12px", minWidth: 0 }}>
          <BrandLogo size={42} />
          <div style={{ minWidth: 0 }}>
            <div style={{
              fontSize: "clamp(15px, 2vw, 18px)", fontWeight: 800,
              color: "var(--text-head)", lineHeight: 1,
              fontFamily: "var(--font-serif)", letterSpacing: "-0.01em",
              transition: "color 0.3s", whiteSpace: "nowrap",
            }}>{t.brand}</div>
            <div className="brand-tagline">{t.tagline}</div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
          <LangToggle lang={lang} setLang={setLang} />
          <ThemeToggle dark={dark} toggle={toggleTheme} />
          {/* Desktop CTA — hidden on mobile via CSS */}
          <button id="open-booking-header" className="cta-btn header-cta-btn" onClick={() => setModal(true)}>
            {t.btnText}
            <ArrowRight />
          </button>
        </div>
      </header>

      {/* ════ CONTENT ════ */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>

        {/* ── TOP: 2-col layout ── */}
        <div className="top-grid" style={{ flex: 1 }}>

          {/* COL A — All text content */}
          <div className="top-col-a">
            {/* Editorial strip */}
            <div style={{
              display: "flex", alignItems: "flex-start", justifyContent: "space-between",
              borderTop: "3px solid var(--orange)",
              borderBottom: "1px solid var(--card-border)",
              paddingTop: "6px", paddingBottom: "6px",
            }}>
              <div>
                <div style={{ fontSize: "9px", fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-muted)", transition: "color 0.3s" }}>
                  {en ? "CASE STUDY · POKHARA, NEPAL" : "केस स्टडी · पोखरा, नेपाल"}
                </div>
                <div style={{ fontSize: "clamp(11px, 1vw, 13px)", fontWeight: 700, color: "var(--text-head)", transition: "color 0.3s", marginTop: "2px" }}>
                  {t.tag}
                </div>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0, paddingLeft: "12px" }}>
                <div style={{ fontSize: "22px", fontWeight: 900, color: "var(--orange)", lineHeight: 1, fontFamily: "var(--font-serif)" }}>01</div>
                <div style={{ fontSize: "8px", fontWeight: 700, color: "var(--text-faint)", letterSpacing: "0.12em", textTransform: "uppercase" }}>ISSUE</div>
              </div>
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(22px, 3vw, 44px)",
              fontWeight: 900,
              color: "var(--text-head)",
              lineHeight: 1.06,
              letterSpacing: "-0.03em",
              transition: "color 0.3s",
            }}>{t.headline}</h1>

            {/* Story intro */}
            <p style={{ fontSize: "clamp(11px, 0.9vw, 12.5px)", lineHeight: 1.7, color: "var(--text-body)", transition: "color 0.3s" }}>
              {t.storyIntro}
            </p>

            {/* Alert block */}
            <div className="alert-block">
              <p style={{ fontSize: "clamp(11px, 0.95vw, 13px)", fontWeight: 700, lineHeight: 1.6, color: "var(--alert-text)", transition: "color 0.3s" }}>
                {t.alertText}
              </p>
            </div>

            {/* Engineer insight italic */}
            <div style={{
              fontSize: "clamp(10px, 0.82vw, 11px)",
              color: "var(--text-muted)", lineHeight: 1.6,
              fontStyle: "italic", transition: "color 0.3s",
            }}>
              {t.engineerInsight}
            </div>

            {/* Pull quote */}
            <blockquote style={{
              fontSize: "clamp(12px, 1.05vw, 14px)",
              fontWeight: 700, color: "var(--text-head)",
              lineHeight: 1.5, transition: "color 0.3s",
            }}>{t.quoteText}</blockquote>

            {/* Author */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img
                src="/sagar-adhikari.jpg"
                alt="Sagar Adhikari"
                style={{
                  width: "32px", height: "32px", borderRadius: "50%",
                  objectFit: "cover", objectPosition: "center top", flexShrink: 0,
                  border: "2px solid var(--orange)", boxShadow: "0 0 0 2px var(--bg)",
                }}
              />
              <div>
                <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--text-head)", lineHeight: 1.2, transition: "color 0.3s" }}>{t.author}</div>
                <div style={{ fontSize: "10px", color: "var(--text-muted)", transition: "color 0.3s" }}>{t.authorTitle}</div>
              </div>
            </div>
          </div>

          {/* COL B — House photo */}
          <div className="top-col-img">
            {/* Top fade — very soft, just blends the very top edge */}
            <div style={{
              position: "absolute", inset: 0, zIndex: 4,
              background: dark
                ? "linear-gradient(to bottom, rgba(17,16,16,0.5) 0%, transparent 20%)"
                : "linear-gradient(to bottom, rgba(255,255,255,0.55) 0%, transparent 18%)",
              transition: "background 0.3s",
              pointerEvents: "none",
            }} />
            {/* Left edge fade — dissolves border between columns */}
            <div style={{
              position: "absolute", inset: 0, zIndex: 3,
              background: dark
                ? "linear-gradient(to right, rgba(17,16,16,0.92) 0%, rgba(17,16,16,0.5) 18%, transparent 42%)"
                : "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 12%, rgba(255,255,255,0.3) 30%, transparent 50%)",
              transition: "background 0.3s",
              pointerEvents: "none",
            }} />
            {/* SVG wave sweep — right-to-left organic wave like reference design */}
            <svg
              viewBox="0 0 400 600"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: "absolute", inset: 0, width: "100%", height: "100%",
                zIndex: 2, pointerEvents: "none",
              }}
            >
              <defs>
                <linearGradient id="waveGrad" x1="1" y1="0" x2="0" y2="0">
                  <stop offset="0%" stopColor={dark ? "rgba(17,16,16,0)" : "rgba(255,255,255,0)"} />
                  <stop offset="55%" stopColor={dark ? "rgba(17,16,16,0.08)" : "rgba(255,255,255,0.10)"} />
                  <stop offset="80%" stopColor={dark ? "rgba(17,16,16,0.22)" : "rgba(255,252,248,0.28)"} />
                  <stop offset="100%" stopColor={dark ? "rgba(17,16,16,0.38)" : "rgba(255,252,248,0.42)"} />
                </linearGradient>
              </defs>
              {/* Wave path sweeping from right, curving left — organic S-curve */}
              <path
                d="M400,0 C340,80 280,120 310,220 C340,320 400,350 380,450 C360,540 300,570 400,600 L400,0 Z"
                fill="url(#waveGrad)"
                opacity={dark ? "0.7" : "0.85"}
              />
            </svg>
            {/* Warm orange tint overlay — ties image to brand color */}
            <div style={{
              position: "absolute", inset: 0, zIndex: 1,
              background: dark
                ? "rgba(232,101,26,0.06)"
                : "rgba(232,101,26,0.08)",
              mixBlendMode: "multiply",
              transition: "background 0.3s",
              pointerEvents: "none",
            }} />
            <img
              src="/gharaakar-house.jpg"
              alt="Ghar Aakar project — Pokhara, Nepal"
              style={{
                width: "100%", height: "100%",
                objectFit: "cover", objectPosition: "center 70%",
                filter: dark
                  ? "brightness(0.7) saturate(0.75) sepia(0.1)"
                  : "brightness(1.0) saturate(0.9) sepia(0.12) contrast(1.05)",
                transition: "filter 0.3s",
              }}
            />
            {/* Badge */}
            <div style={{
              position: "absolute", bottom: "12px", right: "12px", zIndex: 5,
              background: "rgba(232,101,26,0.92)", backdropFilter: "blur(6px)",
              color: "#fff", fontSize: "9px", fontWeight: 800,
              letterSpacing: "0.12em", textTransform: "uppercase",
              padding: "5px 10px", borderRadius: "6px",
            }}>
              {en ? "Our Work · Pokhara Bagar" : "हाम्रो काम · पोखरा बगर "}
            </div>
          </div>
        </div>

        {/* ════ BOTTOM BAR: Principles + Stats + CTA ════ */}
        <div className="bottom-bar">

          {/* 3 principles */}
          {principles.map((p, i) => {
            const Icon = principleIcons[i];
            const accent = principleAccents[i];
            const iconColor = principleIconColors[i];
            return (
              <div key={i} className="principle-cell">
                {/* Icon badge row */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                  <div style={{
                    width: "72px", height: "72px",
                    borderRadius: "18px",
                    background: accent.bg,
                    border: `2px solid ${accent.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: `0 4px 16px ${accent.border}`,
                  }}>
                    <Icon color={iconColor} size={42} />
                  </div>
                  <span style={{
                    fontSize: "10px", fontWeight: 800,
                    letterSpacing: "0.18em", textTransform: "uppercase",
                    color: iconColor,
                    padding: "5px 12px",
                    borderRadius: "999px",
                    background: accent.bg,
                    border: `1.5px solid ${accent.border}`,
                    lineHeight: 1,
                    whiteSpace: "nowrap",
                  }}>{accent.label}</span>
                </div>
                <div style={{
                  fontSize: "clamp(14px, 1.3vw, 18px)",
                  fontWeight: 800,
                  fontFamily: "var(--font-serif)",
                  color: "var(--text-head)",
                  lineHeight: 1.2,
                  transition: "color 0.3s",
                  marginBottom: "10px",
                  letterSpacing: "-0.01em",
                }}>{p.title}</div>
                <p style={{
                  fontSize: "clamp(12px, 1vw, 13.5px)",
                  lineHeight: 1.75,
                  color: "var(--text-muted)",
                  transition: "color 0.3s",
                  margin: 0,
                }}>{p.desc}</p>
              </div>
            );
          })}

          {/* Vertical divider (hidden on mobile via grid-column count) */}
          <div style={{ background: "var(--card-border)", transition: "background 0.3s" }} />

          {/* Stats Section */}
          <div className="stats-cta-cell">
            <div className="stats-list">
              {stats.map((s, i) => {
                const Icon = statIcons[i];
                const colors = ["var(--orange)", "#3b82f6", "#10b981"];
                const bgs = ["rgba(232,101,26,0.08)", "rgba(59,130,246,0.08)", "rgba(16,185,129,0.08)"];
                const borders = ["rgba(232,101,26,0.18)", "rgba(59,130,246,0.18)", "rgba(16,185,129,0.18)"];
                return (
                  <div key={i} className="stat-card">
                    <div className="stat-icon-wrapper" style={{
                      background: bgs[i],
                      border: `1.5px solid ${borders[i]}`,
                      color: colors[i]
                    }}>
                      <Icon size={24} />
                    </div>
                    <div className="stat-text-wrapper">
                      <div className="stat-value" style={{ color: colors[i] }}>
                        {s.val}
                      </div>
                      <div className="stat-label">
                        {s.lbl}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ════ FOOTER ════ */}
        <div className="footer">
          <div>{t.contactInfo}</div>
          <div style={{ marginTop: "8px", opacity: 0.8, fontSize: "0.9em" }}>
            &copy; {new Date().getFullYear()} {t.brand}. All rights reserved.
          </div>
        </div>
      </main>

      {/* ════ MODAL ════ */}
      <Modal t={t} open={modal} close={() => setModal(false)} />

      {/* ════ MOBILE STICKY CTA (hidden on desktop) ════ */}
      <div className="mobile-cta-bar">
        <button id="open-booking-mobile" className="cta-btn" onClick={() => setModal(true)}>
          {t.btnText}
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
