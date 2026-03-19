const contact = {
  phone: "(11) 90000-0000",
  whatsapp: "5511900000000",
  email: "contato@auroragold.com",
  address: {
    city: "São Paulo",
    state: "SP",
    full: "São Paulo - SP"
  },

  socialLinks: [
    {
      id: "instagram",
      label: "Instagram",
      url: "https://www.instagram.com/"
    },
    {
      id: "facebook",
      label: "Facebook",
      url: "https://www.facebook.com/"
    }
  ],

  businessHours: [
    "Segunda a sexta: 09h às 18h",
    "Sábado: 09h às 13h"
  ],

  page: {
    hero: {
      eyebrow: "Contato",
      title: "Filhotes de Golden Retriever com criação responsável em São Paulo",
      description:
        "Tire dúvidas, consulte disponibilidade e fale direto com o canil de forma rápida e simples.",
      primaryButtonLabel: "Ver disponibilidade no WhatsApp",
      secondaryButtonLabel: "Ligar agora"
    },
    channels: [
      {
        id: "whatsapp",
        label: "WhatsApp",
        valueSource: "phone",
        description:
          "Fale direto com o canil e receba informações sobre disponibilidade, valores e visitas.",
        action: "Ver no WhatsApp",
        hrefSource: "whatsapp",
        featured: true
      },
      {
        id: "phone",
        label: "Telefone",
        valueSource: "phone",
        description: "Atendimento rápido para dúvidas imediatas e orientações gerais.",
        action: "Ligar agora",
        hrefSource: "phone"
      },
      {
        id: "email",
        label: "E-mail",
        valueSource: "email",
        description: "Canal ideal para informações mais detalhadas e contato formal.",
        action: "Enviar e-mail",
        hrefSource: "email"
      },
      {
        id: "address",
        label: "Endereço",
        valueSource: "address",
        description: "Atendimento em São Paulo com visita combinada previamente.",
        action: "Ver no mapa",
        hrefSource: "address"
      }
    ],
    visitNote: {
      eyebrow: "Antes da visita",
      title: "Agende seu atendimento com antecedência",
      description:
        "Recomendamos combinar seu atendimento antes da visita. Assim conseguimos orientar você com mais atenção e organizar o melhor momento para receber seu contato."
    },
    socials: {
      eyebrow: "Redes sociais",
      title: "Acompanhe nossa rotina",
      description:
        "Veja mais do nosso trabalho, rotina e atualizações pelos nossos canais sociais."
    },
    map: {
      eyebrow: "Mapa",
      title: "Veja nossa localização",
      description:
        "Atendemos em São Paulo com visita agendada. Use o mapa como referência para entender a região.",
      action: "Abrir no Google Maps"
    },
    process: {
      eyebrow: "Como funciona",
      title: "Um contato simples e direto",
      steps: [
        "Fale com a gente pelo WhatsApp ou telefone.",
        "Receba informações sobre disponibilidade, atendimento e visita.",
        "Se fizer sentido, alinhamos os próximos passos com você."
      ]
    },
    cta: {
      eyebrow: "Próximo passo",
      title: "Quer saber se temos filhotes disponíveis?",
      description:
        "Fale agora com o canil e receba as orientações iniciais de forma rápida.",
      primaryButtonLabel: "Ver disponibilidade no WhatsApp",
      secondaryButton: {
        label: "Conhecer o canil",
        path: "/sobre"
      }
    }
  }
}

export default contact
