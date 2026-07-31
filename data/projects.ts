export interface ProjectItem {
  id: string;
  title: string;
  category: "Construction" | "Roofing" | "Exterior" | "Painting" | "Tiling" | "Carpentry" | "In Progress";
  categoryLabel: string;
  image: string;
  featured?: boolean;
  aspectRatio?: "vertical" | "horizontal" | "square";
  allGalleryImages?: string[];
}

// All 105 real project images present in /public/Archive
export const allProjectImages = [
  "/Archive/20250210_114031.jpg",
  "/Archive/20250210_114042.jpg",
  "/Archive/20250210_114045.jpg",
  "/Archive/20250210_114107.jpg",
  "/Archive/20250210_114117.jpg",
  "/Archive/20250210_114120.jpg",
  "/Archive/20250213_081733.jpg",
  "/Archive/20250213_081753.jpg",
  "/Archive/20250220_110517.jpg",
  "/Archive/20250220_110524.jpg",
  "/Archive/20250220_110533.jpg",
  "/Archive/20250227_103514.jpg",
  "/Archive/20250227_103522.jpg",
  "/Archive/20250227_103527.jpg",
  "/Archive/20250228_163524.jpg",
  "/Archive/20250228_165549.jpg",
  "/Archive/20250301_142614.jpg",
  "/Archive/20250306_090641.jpg",
  "/Archive/20250312_142127.jpg",
  "/Archive/20250316_130814.jpg",
  "/Archive/20250320_115918.jpg",
  "/Archive/20250403_103543.jpg",
  "/Archive/20250403_103547.jpg",
  "/Archive/20250403_103612.jpg",
  "/Archive/20250403_103649.jpg",
  "/Archive/20250403_103704.jpg",
  "/Archive/20250403_103719.jpg",
  "/Archive/20250403_103735.jpg",
  "/Archive/20250423_124515.jpg",
  "/Archive/20250423_124521.jpg",
  "/Archive/20250423_124538.jpg",
  "/Archive/20250426_123022.jpg",
  "/Archive/20250426_123026.jpg",
  "/Archive/20250426_123030.jpg",
  "/Archive/20250428_083505.jpg",
  "/Archive/20250428_083512.jpg",
  "/Archive/20250428_083516.jpg",
  "/Archive/20250428_102724.jpg",
  "/Archive/20250428_102741.jpg",
  "/Archive/20250428_102750.jpg",
  "/Archive/20250428_102758.jpg",
  "/Archive/20250428_102809.jpg",
  "/Archive/20250428_102820.jpg",
  "/Archive/20250428_102840.jpg",
  "/Archive/20250429_111025.jpg",
  "/Archive/20250429_135202.jpg",
  "/Archive/20250502_160618.jpg",
  "/Archive/20250521_145923.jpg",
  "/Archive/20250521_150034.jpg",
  "/Archive/20250528_144417.jpg",
  "/Archive/20250528_144422.jpg",
  "/Archive/20250528_151146.jpg",
  "/Archive/20250528_151150.jpg",
  "/Archive/20250604_101757.jpg",
  "/Archive/20250604_101807.jpg",
  "/Archive/20250606_142233.jpg",
  "/Archive/20250606_142241.jpg",
  "/Archive/20250606_142245.jpg",
  "/Archive/20250609_151306.jpg",
  "/Archive/20250610_094406.jpg",
  "/Archive/20250610_094743.jpg",
  "/Archive/20250613_133721.jpg",
  "/Archive/20250613_153821.jpg",
  "/Archive/20250613_153823.jpg",
  "/Archive/20250613_153902.jpg",
  "/Archive/20250617_083609.jpg",
  "/Archive/20250617_095224.jpg",
  "/Archive/20250617_095330.jpg",
  "/Archive/20250617_100744.jpg",
  "/Archive/20250714_180153.jpg",
  "/Archive/20250714_180158.jpg",
  "/Archive/20250714_180314.jpg",
  "/Archive/20250714_180344.jpg",
  "/Archive/IMG-20260116-WA0071.jpg",
  "/Archive/IMG-20260116-WA0072.jpg",
  "/Archive/IMG-20260116-WA0073.jpg",
  "/Archive/IMG-20260116-WA0074.jpg",
  "/Archive/IMG-20260116-WA0075.jpg",
  "/Archive/IMG-20260116-WA0076.jpg",
  "/Archive/IMG-20260116-WA0077.jpg",
  "/Archive/IMG-20260116-WA0078.jpg",
  "/Archive/IMG20230925151603.jpg",
  "/Archive/IMG20231117161331.jpg",
  "/Archive/IMG20231117161339.jpg",
  "/Archive/IMG20231117161352.jpg",
  "/Archive/IMG20231117161357.jpg",
  "/Archive/IMG20231124104841.jpg",
  "/Archive/IMG20231124104845.jpg",
  "/Archive/IMG20231206151830.jpg",
  "/Archive/IMG20231206151844.jpg",
  "/Archive/IMG20231206151848.jpg",
  "/Archive/IMG20231206165314.jpg",
  "/Archive/IMG20240202155128.jpg",
  "/Archive/IMG20240202155136.jpg",
  "/Archive/IMG20240202155140.jpg",
  "/Archive/IMG20240220113422.jpg",
  "/Archive/IMG20240223104722.jpg",
  "/Archive/IMG20240223110221.jpg",
  "/Archive/IMG20240223162433.jpg",
  "/Archive/IMG20240223162509.jpg",
  "/Archive/IMG20240326151338.jpg",
  "/Archive/IMG20240326151348.jpg",
  "/Archive/IMG20240702124901.jpg",
  "/Archive/WhatsApp%20Image%202026-07-31%20at%2016.28.49%20(1).jpeg",
  "/Archive/WhatsApp%20Image%202026-07-31%20at%2016.28.49.jpeg"
];

export const projectsData: ProjectItem[] = [
  {
    "id": "proj-001",
    "title": "Project 1",
    "category": "Exterior",
    "categoryLabel": "Exterior",
    "image": "/Archive/20250210_114031.jpg",
    "featured": true,
    "aspectRatio": "horizontal"
  },
  {
    "id": "proj-002",
    "title": "Project 2",
    "category": "Roofing",
    "categoryLabel": "Roofing",
    "image": "/Archive/20250210_114042.jpg",
    "featured": true,
    "aspectRatio": "square"
  },
  {
    "id": "proj-003",
    "title": "Project 3",
    "category": "Construction",
    "categoryLabel": "Construction",
    "image": "/Archive/20250210_114045.jpg",
    "featured": true,
    "aspectRatio": "vertical"
  },
  {
    "id": "proj-004",
    "title": "Project 4",
    "category": "Painting",
    "categoryLabel": "Painting",
    "image": "/Archive/20250210_114107.jpg",
    "featured": true,
    "aspectRatio": "horizontal"
  },
  {
    "id": "proj-005",
    "title": "Project 5",
    "category": "Tiling",
    "categoryLabel": "Tiling",
    "image": "/Archive/20250210_114117.jpg",
    "featured": true,
    "aspectRatio": "square"
  },
  {
    "id": "proj-006",
    "title": "Project 6",
    "category": "Carpentry",
    "categoryLabel": "Carpentry",
    "image": "/Archive/20250210_114120.jpg",
    "featured": true,
    "aspectRatio": "vertical"
  },
  {
    "id": "proj-007",
    "title": "Project 7",
    "category": "In Progress",
    "categoryLabel": "In Progress",
    "image": "/Archive/20250213_081733.jpg",
    "featured": false,
    "aspectRatio": "horizontal"
  },
  {
    "id": "proj-008",
    "title": "Project 8",
    "category": "Exterior",
    "categoryLabel": "Exterior",
    "image": "/Archive/20250213_081753.jpg",
    "featured": false,
    "aspectRatio": "square"
  },
  {
    "id": "proj-009",
    "title": "Project 9",
    "category": "Roofing",
    "categoryLabel": "Roofing",
    "image": "/Archive/20250220_110517.jpg",
    "featured": false,
    "aspectRatio": "vertical"
  },
  {
    "id": "proj-010",
    "title": "Project 10",
    "category": "Construction",
    "categoryLabel": "Construction",
    "image": "/Archive/20250220_110524.jpg",
    "featured": false,
    "aspectRatio": "horizontal"
  },
  {
    "id": "proj-011",
    "title": "Project 11",
    "category": "Painting",
    "categoryLabel": "Painting",
    "image": "/Archive/20250220_110533.jpg",
    "featured": false,
    "aspectRatio": "square"
  },
  {
    "id": "proj-012",
    "title": "Project 12",
    "category": "Tiling",
    "categoryLabel": "Tiling",
    "image": "/Archive/20250227_103514.jpg",
    "featured": false,
    "aspectRatio": "vertical"
  },
  {
    "id": "proj-013",
    "title": "Project 13",
    "category": "Carpentry",
    "categoryLabel": "Carpentry",
    "image": "/Archive/20250227_103522.jpg",
    "featured": false,
    "aspectRatio": "horizontal"
  },
  {
    "id": "proj-014",
    "title": "Project 14",
    "category": "In Progress",
    "categoryLabel": "In Progress",
    "image": "/Archive/20250227_103527.jpg",
    "featured": false,
    "aspectRatio": "square"
  },
  {
    "id": "proj-015",
    "title": "Project 15",
    "category": "Exterior",
    "categoryLabel": "Exterior",
    "image": "/Archive/20250228_163524.jpg",
    "featured": false,
    "aspectRatio": "vertical"
  },
  {
    "id": "proj-016",
    "title": "Project 16",
    "category": "Roofing",
    "categoryLabel": "Roofing",
    "image": "/Archive/20250228_165549.jpg",
    "featured": false,
    "aspectRatio": "horizontal"
  },
  {
    "id": "proj-017",
    "title": "Project 17",
    "category": "Construction",
    "categoryLabel": "Construction",
    "image": "/Archive/20250301_142614.jpg",
    "featured": false,
    "aspectRatio": "square"
  },
  {
    "id": "proj-018",
    "title": "Project 18",
    "category": "Painting",
    "categoryLabel": "Painting",
    "image": "/Archive/20250306_090641.jpg",
    "featured": false,
    "aspectRatio": "vertical"
  },
  {
    "id": "proj-019",
    "title": "Project 19",
    "category": "Tiling",
    "categoryLabel": "Tiling",
    "image": "/Archive/20250312_142127.jpg",
    "featured": false,
    "aspectRatio": "horizontal"
  },
  {
    "id": "proj-020",
    "title": "Project 20",
    "category": "Carpentry",
    "categoryLabel": "Carpentry",
    "image": "/Archive/20250316_130814.jpg",
    "featured": false,
    "aspectRatio": "square"
  },
  {
    "id": "proj-021",
    "title": "Project 21",
    "category": "In Progress",
    "categoryLabel": "In Progress",
    "image": "/Archive/20250320_115918.jpg",
    "featured": false,
    "aspectRatio": "vertical"
  },
  {
    "id": "proj-022",
    "title": "Project 22",
    "category": "Exterior",
    "categoryLabel": "Exterior",
    "image": "/Archive/20250403_103543.jpg",
    "featured": false,
    "aspectRatio": "horizontal"
  },
  {
    "id": "proj-023",
    "title": "Project 23",
    "category": "Roofing",
    "categoryLabel": "Roofing",
    "image": "/Archive/20250403_103547.jpg",
    "featured": false,
    "aspectRatio": "square"
  },
  {
    "id": "proj-024",
    "title": "Project 24",
    "category": "Construction",
    "categoryLabel": "Construction",
    "image": "/Archive/20250403_103612.jpg",
    "featured": false,
    "aspectRatio": "vertical"
  },
  {
    "id": "proj-025",
    "title": "Project 25",
    "category": "Painting",
    "categoryLabel": "Painting",
    "image": "/Archive/20250403_103649.jpg",
    "featured": false,
    "aspectRatio": "horizontal"
  },
  {
    "id": "proj-026",
    "title": "Project 26",
    "category": "Tiling",
    "categoryLabel": "Tiling",
    "image": "/Archive/20250403_103704.jpg",
    "featured": false,
    "aspectRatio": "square"
  },
  {
    "id": "proj-027",
    "title": "Project 27",
    "category": "Carpentry",
    "categoryLabel": "Carpentry",
    "image": "/Archive/20250403_103719.jpg",
    "featured": false,
    "aspectRatio": "vertical"
  },
  {
    "id": "proj-028",
    "title": "Project 28",
    "category": "In Progress",
    "categoryLabel": "In Progress",
    "image": "/Archive/20250403_103735.jpg",
    "featured": false,
    "aspectRatio": "horizontal"
  },
  {
    "id": "proj-029",
    "title": "Project 29",
    "category": "Exterior",
    "categoryLabel": "Exterior",
    "image": "/Archive/20250423_124515.jpg",
    "featured": false,
    "aspectRatio": "square"
  },
  {
    "id": "proj-030",
    "title": "Project 30",
    "category": "Roofing",
    "categoryLabel": "Roofing",
    "image": "/Archive/20250423_124521.jpg",
    "featured": false,
    "aspectRatio": "vertical"
  },
  {
    "id": "proj-031",
    "title": "Project 31",
    "category": "Construction",
    "categoryLabel": "Construction",
    "image": "/Archive/20250423_124538.jpg",
    "featured": false,
    "aspectRatio": "horizontal"
  },
  {
    "id": "proj-032",
    "title": "Project 32",
    "category": "Painting",
    "categoryLabel": "Painting",
    "image": "/Archive/20250426_123022.jpg",
    "featured": false,
    "aspectRatio": "square"
  },
  {
    "id": "proj-033",
    "title": "Project 33",
    "category": "Tiling",
    "categoryLabel": "Tiling",
    "image": "/Archive/20250426_123026.jpg",
    "featured": false,
    "aspectRatio": "vertical"
  },
  {
    "id": "proj-034",
    "title": "Project 34",
    "category": "Carpentry",
    "categoryLabel": "Carpentry",
    "image": "/Archive/20250426_123030.jpg",
    "featured": false,
    "aspectRatio": "horizontal"
  },
  {
    "id": "proj-035",
    "title": "Project 35",
    "category": "In Progress",
    "categoryLabel": "In Progress",
    "image": "/Archive/20250428_083505.jpg",
    "featured": false,
    "aspectRatio": "square"
  },
  {
    "id": "proj-036",
    "title": "Project 36",
    "category": "Exterior",
    "categoryLabel": "Exterior",
    "image": "/Archive/20250428_083512.jpg",
    "featured": false,
    "aspectRatio": "vertical"
  },
  {
    "id": "proj-037",
    "title": "Project 37",
    "category": "Roofing",
    "categoryLabel": "Roofing",
    "image": "/Archive/20250428_083516.jpg",
    "featured": false,
    "aspectRatio": "horizontal"
  },
  {
    "id": "proj-038",
    "title": "Project 38",
    "category": "Construction",
    "categoryLabel": "Construction",
    "image": "/Archive/20250428_102724.jpg",
    "featured": false,
    "aspectRatio": "square"
  },
  {
    "id": "proj-039",
    "title": "Project 39",
    "category": "Painting",
    "categoryLabel": "Painting",
    "image": "/Archive/20250428_102741.jpg",
    "featured": false,
    "aspectRatio": "vertical"
  },
  {
    "id": "proj-040",
    "title": "Project 40",
    "category": "Tiling",
    "categoryLabel": "Tiling",
    "image": "/Archive/20250428_102750.jpg",
    "featured": false,
    "aspectRatio": "horizontal"
  },
  {
    "id": "proj-041",
    "title": "Project 41",
    "category": "Carpentry",
    "categoryLabel": "Carpentry",
    "image": "/Archive/20250428_102758.jpg",
    "featured": false,
    "aspectRatio": "square"
  },
  {
    "id": "proj-042",
    "title": "Project 42",
    "category": "In Progress",
    "categoryLabel": "In Progress",
    "image": "/Archive/20250428_102809.jpg",
    "featured": false,
    "aspectRatio": "vertical"
  },
  {
    "id": "proj-043",
    "title": "Project 43",
    "category": "Exterior",
    "categoryLabel": "Exterior",
    "image": "/Archive/20250428_102820.jpg",
    "featured": false,
    "aspectRatio": "horizontal"
  },
  {
    "id": "proj-044",
    "title": "Project 44",
    "category": "Roofing",
    "categoryLabel": "Roofing",
    "image": "/Archive/20250428_102840.jpg",
    "featured": false,
    "aspectRatio": "square"
  },
  {
    "id": "proj-045",
    "title": "Project 45",
    "category": "Construction",
    "categoryLabel": "Construction",
    "image": "/Archive/20250429_111025.jpg",
    "featured": false,
    "aspectRatio": "vertical"
  },
  {
    "id": "proj-046",
    "title": "Project 46",
    "category": "Painting",
    "categoryLabel": "Painting",
    "image": "/Archive/20250429_135202.jpg",
    "featured": false,
    "aspectRatio": "horizontal"
  },
  {
    "id": "proj-047",
    "title": "Project 47",
    "category": "Tiling",
    "categoryLabel": "Tiling",
    "image": "/Archive/20250502_160618.jpg",
    "featured": false,
    "aspectRatio": "square"
  },
  {
    "id": "proj-048",
    "title": "Project 48",
    "category": "Carpentry",
    "categoryLabel": "Carpentry",
    "image": "/Archive/20250521_145923.jpg",
    "featured": false,
    "aspectRatio": "vertical"
  },
  {
    "id": "proj-049",
    "title": "Project 49",
    "category": "In Progress",
    "categoryLabel": "In Progress",
    "image": "/Archive/20250521_150034.jpg",
    "featured": false,
    "aspectRatio": "horizontal"
  },
  {
    "id": "proj-050",
    "title": "Project 50",
    "category": "Exterior",
    "categoryLabel": "Exterior",
    "image": "/Archive/20250528_144417.jpg",
    "featured": false,
    "aspectRatio": "square"
  },
  {
    "id": "proj-051",
    "title": "Project 51",
    "category": "Roofing",
    "categoryLabel": "Roofing",
    "image": "/Archive/20250528_144422.jpg",
    "featured": false,
    "aspectRatio": "vertical"
  },
  {
    "id": "proj-052",
    "title": "Project 52",
    "category": "Construction",
    "categoryLabel": "Construction",
    "image": "/Archive/20250528_151146.jpg",
    "featured": false,
    "aspectRatio": "horizontal"
  },
  {
    "id": "proj-053",
    "title": "Project 53",
    "category": "Painting",
    "categoryLabel": "Painting",
    "image": "/Archive/20250528_151150.jpg",
    "featured": false,
    "aspectRatio": "square"
  },
  {
    "id": "proj-054",
    "title": "Project 54",
    "category": "Tiling",
    "categoryLabel": "Tiling",
    "image": "/Archive/20250604_101757.jpg",
    "featured": false,
    "aspectRatio": "vertical"
  },
  {
    "id": "proj-055",
    "title": "Project 55",
    "category": "Carpentry",
    "categoryLabel": "Carpentry",
    "image": "/Archive/20250604_101807.jpg",
    "featured": false,
    "aspectRatio": "horizontal"
  },
  {
    "id": "proj-056",
    "title": "Project 56",
    "category": "In Progress",
    "categoryLabel": "In Progress",
    "image": "/Archive/20250606_142233.jpg",
    "featured": false,
    "aspectRatio": "square"
  },
  {
    "id": "proj-057",
    "title": "Project 57",
    "category": "Exterior",
    "categoryLabel": "Exterior",
    "image": "/Archive/20250606_142241.jpg",
    "featured": false,
    "aspectRatio": "vertical"
  },
  {
    "id": "proj-058",
    "title": "Project 58",
    "category": "Roofing",
    "categoryLabel": "Roofing",
    "image": "/Archive/20250606_142245.jpg",
    "featured": false,
    "aspectRatio": "horizontal"
  },
  {
    "id": "proj-059",
    "title": "Project 59",
    "category": "Construction",
    "categoryLabel": "Construction",
    "image": "/Archive/20250609_151306.jpg",
    "featured": false,
    "aspectRatio": "square"
  },
  {
    "id": "proj-060",
    "title": "Project 60",
    "category": "Painting",
    "categoryLabel": "Painting",
    "image": "/Archive/20250610_094406.jpg",
    "featured": false,
    "aspectRatio": "vertical"
  },
  {
    "id": "proj-061",
    "title": "Project 61",
    "category": "Tiling",
    "categoryLabel": "Tiling",
    "image": "/Archive/20250610_094743.jpg",
    "featured": false,
    "aspectRatio": "horizontal"
  },
  {
    "id": "proj-062",
    "title": "Project 62",
    "category": "Carpentry",
    "categoryLabel": "Carpentry",
    "image": "/Archive/20250613_133721.jpg",
    "featured": false,
    "aspectRatio": "square"
  },
  {
    "id": "proj-063",
    "title": "Project 63",
    "category": "In Progress",
    "categoryLabel": "In Progress",
    "image": "/Archive/20250613_153821.jpg",
    "featured": false,
    "aspectRatio": "vertical"
  },
  {
    "id": "proj-064",
    "title": "Project 64",
    "category": "Exterior",
    "categoryLabel": "Exterior",
    "image": "/Archive/20250613_153823.jpg",
    "featured": false,
    "aspectRatio": "horizontal"
  },
  {
    "id": "proj-065",
    "title": "Project 65",
    "category": "Roofing",
    "categoryLabel": "Roofing",
    "image": "/Archive/20250613_153902.jpg",
    "featured": false,
    "aspectRatio": "square"
  },
  {
    "id": "proj-066",
    "title": "Project 66",
    "category": "Construction",
    "categoryLabel": "Construction",
    "image": "/Archive/20250617_083609.jpg",
    "featured": false,
    "aspectRatio": "vertical"
  },
  {
    "id": "proj-067",
    "title": "Project 67",
    "category": "Painting",
    "categoryLabel": "Painting",
    "image": "/Archive/20250617_095224.jpg",
    "featured": false,
    "aspectRatio": "horizontal"
  },
  {
    "id": "proj-068",
    "title": "Project 68",
    "category": "Tiling",
    "categoryLabel": "Tiling",
    "image": "/Archive/20250617_095330.jpg",
    "featured": false,
    "aspectRatio": "square"
  },
  {
    "id": "proj-069",
    "title": "Project 69",
    "category": "Carpentry",
    "categoryLabel": "Carpentry",
    "image": "/Archive/20250617_100744.jpg",
    "featured": false,
    "aspectRatio": "vertical"
  },
  {
    "id": "proj-070",
    "title": "Project 70",
    "category": "In Progress",
    "categoryLabel": "In Progress",
    "image": "/Archive/20250714_180153.jpg",
    "featured": false,
    "aspectRatio": "horizontal"
  },
  {
    "id": "proj-071",
    "title": "Project 71",
    "category": "Exterior",
    "categoryLabel": "Exterior",
    "image": "/Archive/20250714_180158.jpg",
    "featured": false,
    "aspectRatio": "square"
  },
  {
    "id": "proj-072",
    "title": "Project 72",
    "category": "Roofing",
    "categoryLabel": "Roofing",
    "image": "/Archive/20250714_180314.jpg",
    "featured": false,
    "aspectRatio": "vertical"
  },
  {
    "id": "proj-073",
    "title": "Project 73",
    "category": "Construction",
    "categoryLabel": "Construction",
    "image": "/Archive/20250714_180344.jpg",
    "featured": false,
    "aspectRatio": "horizontal"
  },
  {
    "id": "proj-074",
    "title": "Project 74",
    "category": "Painting",
    "categoryLabel": "Painting",
    "image": "/Archive/IMG-20260116-WA0071.jpg",
    "featured": false,
    "aspectRatio": "square"
  },
  {
    "id": "proj-075",
    "title": "Project 75",
    "category": "Tiling",
    "categoryLabel": "Tiling",
    "image": "/Archive/IMG-20260116-WA0072.jpg",
    "featured": false,
    "aspectRatio": "vertical"
  },
  {
    "id": "proj-076",
    "title": "Project 76",
    "category": "Carpentry",
    "categoryLabel": "Carpentry",
    "image": "/Archive/IMG-20260116-WA0073.jpg",
    "featured": false,
    "aspectRatio": "horizontal"
  },
  {
    "id": "proj-077",
    "title": "Project 77",
    "category": "In Progress",
    "categoryLabel": "In Progress",
    "image": "/Archive/IMG-20260116-WA0074.jpg",
    "featured": false,
    "aspectRatio": "square"
  },
  {
    "id": "proj-078",
    "title": "Project 78",
    "category": "Exterior",
    "categoryLabel": "Exterior",
    "image": "/Archive/IMG-20260116-WA0075.jpg",
    "featured": false,
    "aspectRatio": "vertical"
  },
  {
    "id": "proj-079",
    "title": "Project 79",
    "category": "Roofing",
    "categoryLabel": "Roofing",
    "image": "/Archive/IMG-20260116-WA0076.jpg",
    "featured": false,
    "aspectRatio": "horizontal"
  },
  {
    "id": "proj-080",
    "title": "Project 80",
    "category": "Construction",
    "categoryLabel": "Construction",
    "image": "/Archive/IMG-20260116-WA0077.jpg",
    "featured": false,
    "aspectRatio": "square"
  },
  {
    "id": "proj-081",
    "title": "Project 81",
    "category": "Painting",
    "categoryLabel": "Painting",
    "image": "/Archive/IMG-20260116-WA0078.jpg",
    "featured": false,
    "aspectRatio": "vertical"
  },
  {
    "id": "proj-082",
    "title": "Project 82",
    "category": "Tiling",
    "categoryLabel": "Tiling",
    "image": "/Archive/IMG20230925151603.jpg",
    "featured": false,
    "aspectRatio": "horizontal"
  },
  {
    "id": "proj-083",
    "title": "Project 83",
    "category": "Carpentry",
    "categoryLabel": "Carpentry",
    "image": "/Archive/IMG20231117161331.jpg",
    "featured": false,
    "aspectRatio": "square"
  },
  {
    "id": "proj-084",
    "title": "Project 84",
    "category": "In Progress",
    "categoryLabel": "In Progress",
    "image": "/Archive/IMG20231117161339.jpg",
    "featured": false,
    "aspectRatio": "vertical"
  },
  {
    "id": "proj-085",
    "title": "Project 85",
    "category": "Exterior",
    "categoryLabel": "Exterior",
    "image": "/Archive/IMG20231117161352.jpg",
    "featured": false,
    "aspectRatio": "horizontal"
  },
  {
    "id": "proj-086",
    "title": "Project 86",
    "category": "Roofing",
    "categoryLabel": "Roofing",
    "image": "/Archive/IMG20231117161357.jpg",
    "featured": false,
    "aspectRatio": "square"
  },
  {
    "id": "proj-087",
    "title": "Project 87",
    "category": "Construction",
    "categoryLabel": "Construction",
    "image": "/Archive/IMG20231124104841.jpg",
    "featured": false,
    "aspectRatio": "vertical"
  },
  {
    "id": "proj-088",
    "title": "Project 88",
    "category": "Painting",
    "categoryLabel": "Painting",
    "image": "/Archive/IMG20231124104845.jpg",
    "featured": false,
    "aspectRatio": "horizontal"
  },
  {
    "id": "proj-089",
    "title": "Project 89",
    "category": "Tiling",
    "categoryLabel": "Tiling",
    "image": "/Archive/IMG20231206151830.jpg",
    "featured": false,
    "aspectRatio": "square"
  },
  {
    "id": "proj-090",
    "title": "Project 90",
    "category": "Carpentry",
    "categoryLabel": "Carpentry",
    "image": "/Archive/IMG20231206151844.jpg",
    "featured": false,
    "aspectRatio": "vertical"
  },
  {
    "id": "proj-091",
    "title": "Project 91",
    "category": "In Progress",
    "categoryLabel": "In Progress",
    "image": "/Archive/IMG20231206151848.jpg",
    "featured": false,
    "aspectRatio": "horizontal"
  },
  {
    "id": "proj-092",
    "title": "Project 92",
    "category": "Exterior",
    "categoryLabel": "Exterior",
    "image": "/Archive/IMG20231206165314.jpg",
    "featured": false,
    "aspectRatio": "square"
  },
  {
    "id": "proj-093",
    "title": "Project 93",
    "category": "Roofing",
    "categoryLabel": "Roofing",
    "image": "/Archive/IMG20240202155128.jpg",
    "featured": false,
    "aspectRatio": "vertical"
  },
  {
    "id": "proj-094",
    "title": "Project 94",
    "category": "Construction",
    "categoryLabel": "Construction",
    "image": "/Archive/IMG20240202155136.jpg",
    "featured": false,
    "aspectRatio": "horizontal"
  },
  {
    "id": "proj-095",
    "title": "Project 95",
    "category": "Painting",
    "categoryLabel": "Painting",
    "image": "/Archive/IMG20240202155140.jpg",
    "featured": false,
    "aspectRatio": "square"
  },
  {
    "id": "proj-096",
    "title": "Project 96",
    "category": "Tiling",
    "categoryLabel": "Tiling",
    "image": "/Archive/IMG20240220113422.jpg",
    "featured": false,
    "aspectRatio": "vertical"
  },
  {
    "id": "proj-097",
    "title": "Project 97",
    "category": "Carpentry",
    "categoryLabel": "Carpentry",
    "image": "/Archive/IMG20240223104722.jpg",
    "featured": false,
    "aspectRatio": "horizontal"
  },
  {
    "id": "proj-098",
    "title": "Project 98",
    "category": "In Progress",
    "categoryLabel": "In Progress",
    "image": "/Archive/IMG20240223110221.jpg",
    "featured": false,
    "aspectRatio": "square"
  },
  {
    "id": "proj-099",
    "title": "Project 99",
    "category": "Exterior",
    "categoryLabel": "Exterior",
    "image": "/Archive/IMG20240223162433.jpg",
    "featured": false,
    "aspectRatio": "vertical"
  },
  {
    "id": "proj-100",
    "title": "Project 100",
    "category": "Roofing",
    "categoryLabel": "Roofing",
    "image": "/Archive/IMG20240223162509.jpg",
    "featured": false,
    "aspectRatio": "horizontal"
  },
  {
    "id": "proj-101",
    "title": "Project 101",
    "category": "Construction",
    "categoryLabel": "Construction",
    "image": "/Archive/IMG20240326151338.jpg",
    "featured": false,
    "aspectRatio": "square"
  },
  {
    "id": "proj-102",
    "title": "Project 102",
    "category": "Painting",
    "categoryLabel": "Painting",
    "image": "/Archive/IMG20240326151348.jpg",
    "featured": false,
    "aspectRatio": "vertical"
  },
  {
    "id": "proj-103",
    "title": "Project 103",
    "category": "Tiling",
    "categoryLabel": "Tiling",
    "image": "/Archive/IMG20240702124901.jpg",
    "featured": false,
    "aspectRatio": "horizontal"
  },
  {
    "id": "proj-104",
    "title": "Project 104",
    "category": "Carpentry",
    "categoryLabel": "Carpentry",
    "image": "/Archive/WhatsApp%20Image%202026-07-31%20at%2016.28.49%20(1).jpeg",
    "featured": false,
    "aspectRatio": "square"
  },
  {
    "id": "proj-105",
    "title": "Project 105",
    "category": "In Progress",
    "categoryLabel": "In Progress",
    "image": "/Archive/WhatsApp%20Image%202026-07-31%20at%2016.28.49.jpeg",
    "featured": false,
    "aspectRatio": "vertical"
  }
];

export const projectCategories = [
  "All Projects",
  "Construction",
  "Roofing",
  "Exterior",
  "Painting",
  "Tiling",
  "Carpentry",
  "In Progress"
] as const;
