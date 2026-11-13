import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  Check,
  Globe2,
  Instagram,
  MapPin,
  Phone,
  Star,
  UserRoundPlus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import sookthaLogo from "@/assets/sooktha-ayurveda-hospital-logo.jpeg.asset.json";

const details = {
  phone: "+91 73567 48378",
  tel: "+917356748378",
  whatsapp: "https://wa.me/917356748378",
  instagram: "https://www.instagram.com/sookthaayurveda?igsh=Z3B5d2hoOXJmMHNs",
  directions: "https://maps.app.goo.gl/JfQAAcsC1L2P7sP88",
  review: "https://g.page/r/CT6kQEdEOQJ8EBE/review",
  facebook: "https://www.facebook.com/share/1Dq496rhJ8/",
  website: "https://www.sooktha.in/",
};

function downloadContact() {
  const contact = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "FN:Sooktha Ayurveda Hospital",
    "ORG:Sooktha Ayurveda Hospital",
    `TEL;TYPE=WORK,VOICE:${details.tel}`,
    `URL:${details.website}`,
    "END:VCARD",
  ].join("\r\n");
  const file = new Blob([contact], { type: "text/vcard;charset=utf-8" });
  const downloadUrl = URL.createObjectURL(file);
  const anchor = document.createElement("a");
  anchor.href = downloadUrl;
  anchor.download = "sooktha-ayurveda-hospital.vcf";
  anchor.click();
  URL.revokeObjectURL(downloadUrl);
}

function WhatsappMark() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20.3 11.8a8.2 8.2 0 0 1-12.1 7.2L4 20l1.1-4a8.2 8.2 0 1 1 15.2-4.2Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M9 8.1c.2-.4.4-.4.6-.4h.5c.2 0 .3 0 .4.4l.7 1.6c.1.2.1.4-.1.6l-.5.6c-.2.2-.2.3-.1.5.5.9 1.2 1.6 2.1 2.1.2.1.4.1.5-.1l.7-.8c.2-.2.3-.2.6-.1l1.5.7c.3.1.4.2.4.4 0 .3-.2 1.1-.7 1.5-.5.5-1.2.7-2 .5-1-.2-2.3-.9-3.6-2-1-.9-1.8-2.1-2-2.8-.3-.8 0-1.8.4-2.4Z" fill="currentColor" />
    </svg>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a className="social-link" href={href} aria-label={label} title={label} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function Index() {
  return (
    <main className="profile-page">
      <article className="profile-card" aria-label="Sooktha Ayurveda Hospital business profile">
        <header className="profile-brand">
          <h1 className="sr-only">Sooktha Ayurveda Hospital</h1>
          <img className="brand-logo" src={sookthaLogo.url} alt="Sooktha Ayurveda Hospital logo" />
          <p className="brand-tagline">Feel Better Live Whole</p>
          <div className="trust-pill" aria-label="Trusted Ayurvedic Care">
            <span className="trust-stars" aria-hidden="true">
              {Array.from({ length: 5 }, (_, index) => <Star key={index} size={13} fill="currentColor" />)}
            </span>
            <span>Trusted Ayurvedic Care</span>
          </div>
        </header>

        <section className="profile-content" aria-label="Contact and links">
          <div className="primary-actions">
            <Button asChild className="profile-button button-primary">
              <a href={details.whatsapp} target="_blank" rel="noreferrer">
                <WhatsappMark /> WhatsApp
              </a>
            </Button>
            <Button asChild className="profile-button button-outline">
              <a href={`tel:${details.tel}`}>
                <Phone aria-hidden="true" /> Call Now
              </a>
            </Button>
          </div>

          <div className="contact-list">
            <a className="contact-row" href={`tel:${details.tel}`}>
              <span className="contact-icon"><Phone aria-hidden="true" /></span>
              <span className="contact-copy"><span className="eyebrow">PHONE &amp; WHATSAPP</span><strong>{details.phone}</strong></span>
              <ArrowUpRight className="row-arrow" aria-hidden="true" />
            </a>
            <a className="contact-row" href={details.instagram} target="_blank" rel="noreferrer">
              <span className="contact-icon"><Instagram aria-hidden="true" /></span>
              <span className="contact-copy"><span className="eyebrow">INSTAGRAM</span><strong>@sookthaayurveda</strong></span>
              <ArrowUpRight className="row-arrow" aria-hidden="true" />
            </a>
          </div>

          <div className="secondary-actions">
            <Button asChild className="info-button button-soft">
              <a href={details.directions} target="_blank" rel="noreferrer">
                <span className="info-icon"><MapPin aria-hidden="true" /></span>
                <span className="info-copy"><span className="eyebrow">VISIT US</span><strong>Directions</strong></span>
              </a>
            </Button>
            <Button asChild className="info-button button-soft">
              <a href={details.review} target="_blank" rel="noreferrer">
                <span className="google-g">G</span>
                <span className="info-copy"><span className="eyebrow">RATE US ON</span><strong>Google</strong></span>
              </a>
            </Button>
          </div>

          <nav className="social-links" aria-label="Social media and website">
            <SocialLink href={details.whatsapp} label="WhatsApp"><WhatsappMark /></SocialLink>
            <SocialLink href={details.facebook} label="Facebook"><span className="facebook-glyph">f</span></SocialLink>
            <SocialLink href={details.instagram} label="Instagram"><Instagram aria-hidden="true" /></SocialLink>
            <SocialLink href={details.website} label="Sooktha website"><Globe2 aria-hidden="true" /></SocialLink>
            <SocialLink href={details.directions} label="Directions"><MapPin aria-hidden="true" /></SocialLink>
          </nav>

          <Button className="save-button button-primary" onClick={downloadContact}>
            <UserRoundPlus aria-hidden="true" /> Save to Contacts
          </Button>

          <footer className="profile-footer">
            <span className="footer-rule" aria-hidden="true" />
            <span className="footer-leaf" aria-hidden="true">✦</span>
            <span className="footer-rule" aria-hidden="true" />
            <p>© 2026 Sooktha Ayurveda Hospital. All rights reserved.</p>
            <a href={details.website} target="_blank" rel="noreferrer">sooktha.in <Check aria-hidden="true" /></a>
          </footer>
        </section>
      </article>
    </main>
  );
}

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sooktha Ayurveda Hospital | Feel Better Live Whole" },
      { name: "description", content: "Connect with Sooktha Ayurveda Hospital. Call, message on WhatsApp, get directions, or visit our website." },
      { property: "og:title", content: "Sooktha Ayurveda Hospital" },
      { property: "og:description", content: "Feel Better Live Whole. Connect with Sooktha Ayurveda Hospital." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});