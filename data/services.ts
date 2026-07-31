export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  details?: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "full-construction",
    number: "01",
    title: "Full Construction",
    description: "Complete construction support from initial groundwork to final architectural finishes across residential projects.",
    icon: "bi-buildings",
    details: [
      "Groundwork and site preparation",
      "Structural framework and blockwork",
      "Full project execution to final completion"
    ]
  },
  {
    id: "foundations",
    number: "02",
    title: "Foundations",
    description: "Solid foundations prepared with precision and structural care to support safe and durable building construction.",
    icon: "bi-bricks",
    details: [
      "Excavation and ground levelling",
      "Concrete footings and sub-structures",
      "Durable moisture and load support"
    ]
  },
  {
    id: "plastering-rendering",
    number: "03",
    title: "Plastering & Rendering",
    description: "Smooth and durable interior wall plastering and weather-resistant exterior rendering finishes.",
    icon: "bi-layers",
    details: [
      "Internal skim coats and bonding plaster",
      "External weather-shield rendering",
      "Surface repair and leveling"
    ]
  },
  {
    id: "paving-walkways",
    number: "04",
    title: "Paving & Walkways",
    description: "Practical, durable and professionally finished outdoor block paving, walkways and driveway surfaces.",
    icon: "bi-grid-3x3",
    details: [
      "Block paving and slab installation",
      "Driveways and garden pathways",
      "Sub-base preparation and drainage"
    ]
  },
  {
    id: "painting",
    number: "05",
    title: "Interior & Exterior Painting",
    description: "Careful surface preparation and high-quality painting applications for interior and exterior spaces.",
    icon: "bi-brush",
    details: [
      "Interior wall and ceiling finishing",
      "Weather-resistant exterior masonry painting",
      "Woodwork and metalwork coatings"
    ]
  },
  {
    id: "patios",
    number: "06",
    title: "Patios",
    description: "Functional and attractive outdoor patio areas designed and built for everyday residential use.",
    icon: "bi-house-door",
    details: [
      "Natural stone and porcelain patio installation",
      "Custom layout and step integration",
      "Long-lasting outdoor living surfaces"
    ]
  },
  {
    id: "tiling-ceramics",
    number: "07",
    title: "Tiling & Ceramics",
    description: "Precise installation of wall and floor tiles for kitchens, bathrooms, wet rooms and main living areas.",
    icon: "bi-grid",
    details: [
      "Ceramic, porcelain and stone wall & floor tiling",
      "Bathroom and kitchen splashbacks",
      "Waterproofing and precision grouting"
    ]
  },
  {
    id: "roofing",
    number: "08",
    title: "Roofing",
    description: "Roof construction, slate and tile repairs, and weatherproofing focused on structural protection and durability.",
    icon: "bi-house-up",
    details: [
      "Slate, tile and timber roof structures",
      "Roof leak repairs and leadwork",
      "Fascia, soffit and gutter installation"
    ]
  },
  {
    id: "carpentry",
    number: "09",
    title: "Carpentry",
    description: "Practical structural carpentry solutions and detailed timber finishing for residential interiors and exteriors.",
    icon: "bi-hammer",
    details: [
      "First and second-fix timber framing",
      "Door framing, skirting and architraves",
      "Custom timber installations and repairs"
    ]
  },
  {
    id: "property-maintenance",
    number: "10",
    title: "Property Maintenance",
    description: "General structural repairs, ongoing maintenance and upgrades to protect and enhance residential properties.",
    icon: "bi-tools",
    details: [
      "General structural and cosmetic repairs",
      "Property renovation and improvement work",
      "Scheduled maintenance for homeowners"
    ]
  }
];
