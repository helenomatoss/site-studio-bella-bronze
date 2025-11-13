export const siteConfig = {
  name: "Studio Bella Bronze",
  links: {
    whatsapp: "https://wa.me/5511911418161",
    developer: "https://webgestsolutions.com/",
  },
  contact: {
    phoneDisplay: "(11) 91141-8161",
    address: {
      street: "Av. Augusto de Castro, 263",
      neighborhood: "Jardim Domitila, São Paulo - SP",
      postalCode: "04466-090",
    },
    schedule: {
      days: "Segunda a Sábado",
      hours: "9h às 18h",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
