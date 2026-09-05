export const SITE = {
  brand: "LQcomparecableinternet",
  brandFull: "LQcomparecableinternet",
  legalName: "Lean and Quality Circle llc",
  domain: "lqcomparecableinternet.com",
  phoneDisplay: "(888) 959-4513",
  phoneTel: "8889594513",
  email: "info@lqcomparecableinternet.com",
  addressLine1: "5902 Newfoundland Ct",
  addressLine2: "Spring, TX 77379",
  get operatedByLabel() {
    return `${this.brandFull} (operated by ${this.legalName})`;
  },
  carrierDisclaimer:
    "We are not owned, operated, or controlled by any internet service provider (ISP) or carrier.",
  /**
   * Google Ads misrepresentation policy: never claim reseller or dealer status, and
   * always state that account support stays with the carrier.
   */
  get referralDisclosure() {
    return `${this.operatedByLabel} is an independent comparison and referral service.`;
  },
  providerStatusDisclaimer(providerName) {
    return `${this.brandFull} is an independent comparison service. ${this.brandFull} does not provide ${providerName} customer service or manage accounts. All service support is handled directly by ${providerName}.`;
  },
  providerPlanDetailsNote(providerName) {
    return `Plan details, pricing, speeds, and features are based on publicly available ${providerName} information and are subject to change. Speeds shown are maximum wired download speeds and are not guaranteed; actual speeds vary by address, equipment, and network conditions. ${providerName} and related marks are trademarks of their respective owners and are used for identification and comparison only.`;
  },
  footerOfferDisclosures: [
    {
      title: "Offer & Pricing Details",
      body: "Promotional pricing may apply for a limited time and is subject to change. After the promotional period, standard rates may apply. Discounts may begin within the first few billing cycles.",
    },
    {
      title: "Eligibility",
      body: "Offers may be available to new residential customers only and may not be available in all areas. Certain multi-dwelling units may not qualify.",
    },
    {
      title: "AutoPay & Paperless Billing",
      body: "Monthly discounts may apply when enrolled in AutoPay and paperless billing. Discount amounts may vary depending on payment method.",
    },
    {
      title: "Fees & Taxes",
      body: "Installation fees, equipment charges, and applicable taxes may apply. Pricing excludes taxes and surcharges unless otherwise stated.",
    },
    {
      title: "Speeds & Performance",
      body: "Internet speeds are based on wired connections. Actual speeds may vary depending on network conditions, equipment, and other factors.",
    },
    {
      title: "General Terms",
      body: "Offers are subject to change or discontinuation without notice. Additional terms and conditions may apply.",
    },
  ],
  get comparePageDisclosure() {
    return `${this.referralDisclosure} We compare internet and TV plans available in your area. We do not sell or manage carrier accounts directly. ${this.carrierDisclaimer} For billing or existing account support, please contact your provider directly.`;
  },
  get connectPageDisclosure() {
    return `${this.referralDisclosure} We do not own or operate any internet network and do not provide carrier account support. For billing, outages, or technical issues with an existing service, contact your provider through their official channels.`;
  },
  legalLinks: [
    { name: "Terms & Conditions", href: "/terms-conditions" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Comparison & Referral Disclosure", href: "/comparison-disclosure" },
    { name: "Cookie Policy", href: "/cookie-policy" },
    { name: "Fees & Disclosures", href: "/fees-disclosures" },
  ],
};
