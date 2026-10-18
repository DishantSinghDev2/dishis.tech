// Single source of truth for the company's public legal & contact details.
export const company = {
  legalName: "DishIs Technologies LLC",
  brandName: "DishIs Technologies",
  entityType: "Wyoming Limited Liability Company",
  shortEntityType: "Wyoming LLC",
  status: "Good Standing",
  filingId: "2026-002068312",
  formationDate: "August 28, 2026",
  foundedYear: 2022,
  founder: "Dishant Singh",
  email: "support@dishis.tech",
  phone: "+91 83689 89758",
  phoneHref: "tel:+918368989758",
  principalAddress: {
    label: "Principal Office (USA)",
    lines: ["1309 Coffeen Avenue, STE 1200", "Sheridan, Wyoming 82801", "United States"],
  },
  mailingAddress: {
    label: "Mailing Address (India)",
    lines: ["Parnala Line Par, Nijampur Road", "Bahadurgarh, Haryana 124507", "India"],
  },
  logo: "https://avatars.githubusercontent.com/u/120817762?s=200&v=4",
  social: {
    github: "https://github.com/DishIs",
    linkedin: "https://www.linkedin.com/company/dishistech",
    crunchbase: "https://www.crunchbase.com/organization/dishis-technologies",
    f6s: "https://www.f6s.com/company/dishis-technologies",
    rapidapi: "https://rapidapi.com/organization/dishis-technologies",
  },
} as const
