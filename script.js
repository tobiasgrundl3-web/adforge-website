/* ===================================================================
   AdForge – Interaktivität & Effekte
   =================================================================== */
(function () {
  "use strict";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Sticky header ---- */
  const header = document.querySelector(".header");
  if (header) {
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Mobile nav ---- */
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => links.classList.remove("open"))
    );
  }

  /* ---- Scroll reveal ---- */
  const reveals = document.querySelectorAll(".reveal");
  if (reveals.length && "IntersectionObserver" in window && !reduceMotion) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  /* ---- Animated counters ---- */
  const counters = document.querySelectorAll("[data-count]");
  const animateCount = (el) => {
    const target = parseFloat(el.dataset.count);
    const decimals = (el.dataset.count.split(".")[1] || "").length;
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    const dur = 1600;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = (target * eased).toFixed(decimals);
      el.textContent = prefix + Number(val).toLocaleString("de-DE", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if (counters.length) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      counters.forEach((el) => {
        const p = el.dataset.prefix || "", s = el.dataset.suffix || "";
        el.textContent = p + el.dataset.count + s;
      });
    } else {
      const cio = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              animateCount(e.target);
              cio.unobserve(e.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      counters.forEach((el) => cio.observe(el));
    }
  }

  /* ---- Service card cursor glow ---- */
  document.querySelectorAll(".service").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", e.clientX - r.left + "px");
      card.style.setProperty("--my", e.clientY - r.top + "px");
    });
  });

  /* ---- FAQ accordion ---- */
  document.querySelectorAll(".faq-item").forEach((item) => {
    const q = item.querySelector(".faq-q");
    const a = item.querySelector(".faq-a");
    if (!q || !a) return;
    q.addEventListener("click", () => {
      const open = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach((o) => {
        o.classList.remove("open");
        o.querySelector(".faq-a").style.maxHeight = null;
      });
      if (!open) {
        item.classList.add("open");
        a.style.maxHeight = a.scrollHeight + "px";
      }
    });
  });

  /* ---- Hero sparks (forge theme) ---- */
  const hero = document.querySelector(".hero");
  if (hero && !reduceMotion) {
    for (let i = 0; i < 14; i++) {
      const s = document.createElement("span");
      s.className = "spark";
      s.style.left = Math.random() * 100 + "%";
      s.style.top = 30 + Math.random() * 55 + "%";
      hero.appendChild(s);
      const drift = () => {
        s.animate(
          [
            { opacity: 0, transform: "translateY(0) scale(.6)" },
            { opacity: 1, transform: `translateY(-${30 + Math.random() * 50}px) scale(1)` },
            { opacity: 0, transform: `translateY(-${70 + Math.random() * 70}px) scale(.4)` },
          ],
          { duration: 2600 + Math.random() * 2200, delay: Math.random() * 2600, iterations: Infinity }
        );
      };
      drift();
    }
  }

  /* ---- Contact form → Zapier webhook ---- */
  const form = document.querySelector("form[data-webhook]");
  if (form) {
    const status = form.querySelector(".form-status");
    const btn = form.querySelector('button[type="submit"]');
    const showStatus = (msg, ok) => {
      if (!status) return;
      status.hidden = false;
      status.textContent = msg;
      status.className = "form-status " + (ok ? "ok" : "err");
    };
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;

      // Mehrfach gewählte Kanäle sauber zusammenfassen
      const fd = new FormData(form);
      const kanaele = fd.getAll("Kanal");
      fd.delete("Kanal");
      fd.append("Kanaele", kanaele.join(", "));
      fd.append("Quelle", "adforge-marketing.de · Kontaktformular");
      fd.append("Gesendet am", new Date().toLocaleString("de-DE"));

      const original = btn ? btn.textContent : "";
      if (btn) { btn.disabled = true; btn.textContent = "Wird gesendet …"; }

      try {
        await fetch(form.dataset.webhook, {
          method: "POST",
          mode: "no-cors", // Zapier-Catch-Hook akzeptiert die Daten auch ohne CORS-Antwort
          body: fd,
        });
        // Bei no-cors ist die Antwort "opaque" – wir werten den fehlenden Netzwerkfehler als Erfolg.
        form.reset();
        showStatus("Vielen Dank! Deine Anfrage ist eingegangen – ich melde mich innerhalb von 48 Stunden bei dir.", true);
        if (btn) btn.textContent = "Gesendet ✓";
      } catch (err) {
        showStatus("Es gab ein Problem beim Senden. Bitte schreib mir direkt an info@adforge-marketing.de.", false);
        if (btn) { btn.disabled = false; btn.textContent = original; }
      }
    });
  }

  /* ---- Mobile-Slider Punkte (Leistungen & Bewertungen) ---- */
  function setupSliderDots(slider) {
    if (!slider || slider.dataset.dots) return;
    const cards = Array.from(slider.children);
    if (cards.length < 2) return;
    const dots = document.createElement("div");
    dots.className = "slider-dots";
    cards.forEach((card, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.setAttribute("aria-label", "Karte " + (i + 1));
      b.addEventListener("click", () => {
        const sr = slider.getBoundingClientRect();
        const cr = card.getBoundingClientRect();
        slider.scrollBy({ left: (cr.left + cr.width / 2) - (sr.left + sr.width / 2), behavior: "smooth" });
      });
      dots.appendChild(b);
    });
    slider.parentNode.insertBefore(dots, slider.nextSibling);
    const update = () => {
      const sr = slider.getBoundingClientRect();
      const center = sr.left + sr.width / 2;
      let best = 0, bestD = Infinity;
      cards.forEach((c, i) => {
        const cr = c.getBoundingClientRect();
        const d = Math.abs((cr.left + cr.width / 2) - center);
        if (d < bestD) { bestD = d; best = i; }
      });
      Array.from(dots.children).forEach((d, i) => d.classList.toggle("active", i === best));
    };
    slider.addEventListener("scroll", () => requestAnimationFrame(update), { passive: true });
    update();
    slider.dataset.dots = "1";
  }
  [".services-grid", ".tm-grid"].forEach((sel) => setupSliderDots(document.querySelector(sel)));

  /* ---- Year in footer ---- */
  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
})();
