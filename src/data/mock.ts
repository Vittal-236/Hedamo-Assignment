export type ProductStatus = 'Draft' | 'Submitted' | 'Published';

export interface HistoryEvent {
    date: string;
    action: string;
    user: string;
}

export interface Product {
    id: string;
    name: string;
    category: string;
    producer: string;
    status: ProductStatus;
    evidenceCount: number;
    lastUpdated: string;
    declaredDate: string;
    description: string;
    origin: string;
    history: HistoryEvent[];
}

export const products: Product[] = [
    {
        id: "PROD-001",
        name: "Organic Cotton Bale - Grade A",
        category: "Raw Material",
        producer: "GreenField Co-op",
        status: "Published",
        evidenceCount: 12,
        lastUpdated: "2023-10-15",
        declaredDate: "2023-09-01",
        description: "Raw organic cotton bale, harvested from Sector 4. Certified organic seeds used. No synthetic pesticides.",
        origin: "Gujarat, India",
        history: [
            { date: "2023-09-01", action: "Declared by Producer", user: "R. Patel" },
            { date: "2023-09-05", action: "Evidence Uploaded (12 docs)", user: "R. Patel" },
            { date: "2023-10-15", action: "Published", user: "System" }
        ]
    },
    {
        id: "PROD-002",
        name: "Recycled Polyester Chips (rPET)",
        category: "Synthetic",
        producer: "EcoSynth Industries",
        status: "Submitted",
        evidenceCount: 8,
        lastUpdated: "2023-11-02",
        declaredDate: "2023-10-20",
        description: "Post-consumer recycled PET chips suitable for filament extrusion. Batches tracked via internal systems.",
        origin: "Rayong, Thailand",
        history: [
            { date: "2023-10-20", action: "Declared by Producer", user: "S. Tanaka" },
            { date: "2023-11-02", action: "Submitted for Review", user: "S. Tanaka" }
        ]
    },
    {
        id: "PROD-003",
        name: "Hemp Fiber Bundle",
        category: "Raw Material",
        producer: "Himalayan Naturals",
        status: "Draft",
        evidenceCount: 2,
        lastUpdated: "2023-11-10",
        declaredDate: "2023-11-10",
        description: "Industrial hemp fiber, water-retted. High tensile strength.",
        origin: "Kathmandu, Nepal",
        history: [
            { date: "2023-11-10", action: "Draft Created", user: "A. Sherpa" }
        ]
    },
    {
        id: "PROD-004",
        name: "Tencel Lyocell Filament",
        category: "Yarn/Thread",
        producer: "Lenzing AG (Partner)",
        status: "Published",
        evidenceCount: 24,
        lastUpdated: "2023-08-14",
        declaredDate: "2023-08-01",
        description: "Lyocell filament yarn produced in closed-loop process. Wood pulp sourced from sustainable forests.",
        origin: "Lenzing, Austria",
        history: [
            { date: "2023-08-01", action: "Declared by Producer", user: "H. Mueller" },
            { date: "2023-08-14", action: "Published", user: "System" }
        ]
    },
    {
        id: "PROD-005",
        name: "Merino Wool Top",
        category: "Raw Material",
        producer: "Highland Wool Traders",
        status: "Submitted",
        evidenceCount: 5,
        lastUpdated: "2023-11-05",
        declaredDate: "2023-10-25",
        description: "Superfine Merino wool top, 18.5 micron. Scoured and combed.",
        origin: "Otago, New Zealand",
        history: [
            { date: "2023-10-25", action: "Declared by Producer", user: "J. Doe" },
            { date: "2023-11-05", action: "Evidence Uploaded", user: "J. Doe" }
        ]
    },
    {
        id: "PROD-006",
        name: "Bamboo Viscose Fabric",
        category: "Textile",
        producer: "PandaTextile Ltd.",
        status: "Draft",
        evidenceCount: 0,
        lastUpdated: "2023-11-12",
        declaredDate: "2023-11-12",
        description: "Woven bamboo viscose fabric. Unbleached.",
        origin: "Zhejiang, China",
        history: [
            { date: "2023-11-12", action: "Draft Created", user: "L. Wei" }
        ]
    },
    {
        id: "PROD-007",
        name: "Natural Indigo Dye Block",
        category: "Dye/Chemical",
        producer: "BlueGold Artisans",
        status: "Published",
        evidenceCount: 15,
        lastUpdated: "2023-09-20",
        declaredDate: "2023-09-10",
        description: "Feremented natural indigo dye paste blocks. Traditional extraction method.",
        origin: "Tokushima, Japan",
        history: [
            { date: "2023-09-10", action: "Declared by Producer", user: "K. Sato" },
            { date: "2023-09-20", action: "Published", user: "System" }
        ]
    }
];
