/**
 * Footer Component
 * Site footer with links and copyright
 */

import { Link } from "@tanstack/react-router";
import { useUIStore } from "../store";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export function Footer() {
  const { locale } = useUIStore();
  const isNepali = locale === "ne";

  return (
    <footer className="text-white bg-[radial-gradient(circle_at_15%_20%,#1f3e66_0%,#112641_45%,#0a1520_100%)] border-t border-mountain-700/60">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mb-8">
          <h3 className="font-bold text-lg mb-3">
            {isNepali ? "श्रम सेवा" : "Shram Sewa"}
          </h3>
          <p className="text-sm text-terrain-100/90 leading-relaxed mb-4">
            {isNepali
              ? "नेपालको स्थानीय सरकार-समन्वित जनशक्ति प्लेटफर्म। ७५३ स्थानीय तहसम्म पहुँच, सुरक्षित खोज र जिम्मेवार भाडा प्रक्रियासहित।"
              : "Nepal's local government-aligned manpower platform with coverage across all 753 local units, safer discovery, and accountable hiring workflows."}
          </p>
          <div className="flex gap-3">
            <a
              href="/contact"
              className="w-8 h-8 rounded-full bg-crimson-700 flex items-center justify-center hover:bg-crimson-600 transition-colors"
              aria-label={isNepali ? "वेबसाइट" : "Website"}
            >
              <Globe className="w-4 h-4" />
            </a>
            <a
              href="mailto:info@shramsewa.gov.np"
              className="w-8 h-8 rounded-full bg-crimson-700 flex items-center justify-center hover:bg-crimson-600 transition-colors"
              aria-label={isNepali ? "इमेल" : "Email"}
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              {isNepali ? "द्रुत लिंकहरू" : "Quick Links"}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/search"
                  className="text-terrain-100 hover:text-gold-300 transition-colors"
                >
                  {isNepali ? "कामदार खोज्नुहोस्" : "Find Workers"}
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-terrain-100 hover:text-gold-300 transition-colors"
                >
                  {isNepali ? "कामदार दर्ता" : "Register as Worker"}
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="text-terrain-100 hover:text-gold-300 transition-colors"
                >
                  {isNepali ? "कसरी काम गर्छ?" : "How It Works"}
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-terrain-100 hover:text-gold-300 transition-colors"
                >
                  {isNepali ? "सामान्य प्रश्नहरू" : "FAQ"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              {isNepali ? "कानुनी" : "Legal"}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/privacy"
                  className="text-terrain-100 hover:text-gold-300 transition-colors"
                >
                  {isNepali ? "गोपनीयता नीति" : "Privacy Policy"}
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-terrain-100 hover:text-gold-300 transition-colors"
                >
                  {isNepali ? "सेवा सर्तहरू" : "Terms of Service"}
                </Link>
              </li>
              <li>
                <Link
                  to="/guidelines"
                  className="text-terrain-100 hover:text-gold-300 transition-colors"
                >
                  {isNepali ? "मार्गदर्शन" : "Guidelines"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              {isNepali ? "सम्पर्क" : "Contact"}
            </h3>
            <ul className="space-y-3 text-sm text-terrain-100">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{isNepali ? "काठमाडौं, नेपाल" : "Kathmandu, Nepal"}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+9771XXXXXXX">+977 1-XXXXXXX</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@shramsewa.gov.np">info@shramsewa.gov.np</a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-terrain-100 hover:text-gold-300 transition-colors"
                >
                  {isNepali ? "विस्तृत सम्पर्क" : "Full Contact Page"}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-mountain-700 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-terrain-300">
            {isNepali
              ? "© २०२६ श्रम सेवा। सर्वाधिकार सुरक्षित।"
              : "© 2026 Shram Sewa. All rights reserved."}
          </p>
          <p className="text-sm text-terrain-300">
            {isNepali
              ? "नेपाल सरकार स्थानीय तह मान्यता प्राप्त"
              : "Nepal Government Local Level Recognized"}
          </p>
        </div>
      </div>
    </footer>
  );
}
