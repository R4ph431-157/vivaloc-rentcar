export type VehicleType = 'car' | 'quad' | 'buggy'

export interface FleetItem {
  num: string
  category: string
  catClass: 'c1' | 'c2' | 'c3'
  title: [string, string]
  description: string
  glowClass: 'glow-1' | 'glow-2' | 'glow-3'
  edgeClass: 'e1' | 'e2' | 'e3'
  vehicle: VehicleType
  image?: string
  imagePos?: string
  imageHeight?: string
  video?: string
}

export const fleet: FleetItem[] = [
  {
    num: '01',
    category: 'Voiture · SUV de luxe',
    catClass: 'c1',
    title: ['Berlines', '& SUV'],
    description: 'Mercedes, 4x4 et berlines climatisées. Pour la ville, le business ou la grande route.',
    glowClass: 'glow-1',
    edgeClass: 'e1',
    vehicle: 'car',
    image: '/assets/suv.jpg',
    imagePos: 'center 38%',
  },
  {
    num: '02',
    category: 'Quad · ATV',
    catClass: 'c2',
    title: ['Quads tout-', 'terrain'],
    description: 'Adrénaline sur sable et pistes. Le combo parfait plage + week-end entre potes.',
    glowClass: 'glow-2',
    edgeClass: 'e2',
    vehicle: 'quad',
    image: '/assets/quad1.jpg',
    imagePos: 'center 22%',
  },
  {
    num: '03',
    category: 'Buggy · Side-by-side',
    catClass: 'c3',
    title: ['Buggys', '4 places'],
    description: "L'expérience hors-piste ultime. En groupe, pour dévorer la côte et les dunes.",
    glowClass: 'glow-3',
    edgeClass: 'e3',
    vehicle: 'buggy',
    video: '/assets/buggy.MP4',
  },
]
