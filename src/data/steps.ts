export interface Step {
  num: string
  title: string
  desc: string
}

export const steps: Step[] = [
  {
    num: '01',
    title: 'Choisis',
    desc: "Parcours la flotte et sélectionne la voiture, le quad ou le buggy qu'il te faut.",
  },
  {
    num: '02',
    title: 'Écris-nous',
    desc: 'Un message WhatsApp ou Insta. On confirme dates, tarif et livraison direct.',
  },
  {
    num: '03',
    title: 'Roule',
    desc: "On te livre le véhicule prêt à partir. Y'a plus qu'à profiter de la route.",
  },
]
