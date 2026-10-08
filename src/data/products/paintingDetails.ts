export interface PaintingDetails {
  description: string;
  materials: string;
  dimensions: string;
  condition: string;
  provenance: string;
  certificate: string;
  year: string;
  styles: string[];
  colors: string[];
  rooms: string[];
}

const cert = (n: string) =>
  `Certificate of Authenticity No. EL-${n}, hand-signed by Elijah Light, with holographic seal and registry entry`;

export const paintingDetails: Record<string, PaintingDetails> = {
  p1: {
    description: "A gilded abstraction of a sacred temple in ruins, layered gold leaf over textured white impasto.",
    materials: "Acrylic, gold leaf and modeling paste on canvas",
    dimensions: "48 × 36 in (122 × 91 cm)",
    condition: "Excellent — no restoration, varnished",
    provenance: "Artist's studio, acquired directly by LUXE",
    certificate: cert("2024-001"),
    year: "2024",
    styles: ["abstract", "spiritual", "textured", "contemporary"],
    colors: ["gold", "white", "cream"],
    rooms: ["living room", "entryway", "office"],
  },
  p2: {
    description: "Priests serving in the Second Temple, menorahs glowing in a rich, devotional interior.",
    materials: "Oil on linen canvas",
    dimensions: "40 × 30 in (102 × 76 cm)",
    condition: "Excellent — original stretcher",
    provenance: "Artist's studio, acquired directly by LUXE",
    certificate: cert("2024-002"),
    year: "2024",
    styles: ["figurative", "religious", "classical", "narrative"],
    colors: ["gold", "amber", "brown", "deep red"],
    rooms: ["dining room", "library", "study"],
  },
  p3: {
    description: "Arabic calligraphy rendered in gold on deep green, presented in an ornate gilded frame.",
    materials: "Acrylic and gold leaf on panel, gilded wood frame",
    dimensions: "36 × 36 in (91 × 91 cm), framed",
    condition: "Mint — framed under UV-protective glass",
    provenance: "Artist's studio, acquired directly by LUXE",
    certificate: cert("2024-003"),
    year: "2024",
    styles: ["calligraphy", "ornamental", "spiritual", "traditional"],
    colors: ["green", "gold"],
    rooms: ["living room", "prayer room", "office"],
  },
  p4: {
    description: "Round calligraphy medallion in green and gold, inspired by the roundels of the Hagia Sophia.",
    materials: "Acrylic and gold leaf on round canvas",
    dimensions: "36 in diameter (91 cm)",
    condition: "Mint — signed lower edge",
    provenance: "Artist's studio, acquired directly by LUXE",
    certificate: cert("2024-004"),
    year: "2024",
    styles: ["calligraphy", "ornamental", "spiritual", "traditional"],
    colors: ["green", "gold"],
    rooms: ["living room", "entryway", "prayer room"],
  },
  p5: {
    description: "A crowd gathers beneath a mountain struck by lightning — a dramatic scene of revelation.",
    materials: "Oil on canvas",
    dimensions: "48 × 32 in (122 × 81 cm)",
    condition: "Excellent — no restoration",
    provenance: "Artist's studio, acquired directly by LUXE",
    certificate: cert("2024-005"),
    year: "2024",
    styles: ["landscape", "dramatic", "religious", "narrative"],
    colors: ["dark blue", "grey", "white", "gold"],
    rooms: ["living room", "library", "study"],
  },
  p6: {
    description: "A storm-lit landscape where lightning splits the sky over rolling mountains.",
    materials: "Oil on canvas",
    dimensions: "60 × 30 in (152 × 76 cm)",
    condition: "Excellent — varnished",
    provenance: "Artist's studio, acquired directly by LUXE",
    certificate: cert("2024-006"),
    year: "2024",
    styles: ["landscape", "dramatic", "atmospheric"],
    colors: ["dark blue", "purple", "white"],
    rooms: ["living room", "bedroom", "office"],
  },
  p7: {
    description: "Lightning crowns a single mountain peak in a moody, luminous storm.",
    materials: "Oil on canvas",
    dimensions: "40 × 40 in (102 × 102 cm)",
    condition: "Excellent — varnished",
    provenance: "Artist's studio, acquired directly by LUXE",
    certificate: cert("2024-007"),
    year: "2024",
    styles: ["landscape", "dramatic", "atmospheric"],
    colors: ["dark blue", "grey", "white"],
    rooms: ["bedroom", "office", "living room"],
  },
  p8: {
    description: "Classical depiction of the prophet Elijah ascending on clouds in a chariot of fire.",
    materials: "Oil on canvas",
    dimensions: "36 × 48 in (91 × 122 cm)",
    condition: "Excellent — no restoration",
    provenance: "Artist's studio, acquired directly by LUXE",
    certificate: cert("2025-008"),
    year: "2025",
    styles: ["classical", "figurative", "religious", "baroque"],
    colors: ["sky blue", "gold", "orange", "white"],
    rooms: ["dining room", "library", "entryway"],
  },
  p9: {
    description: "A golden shield-like abstraction evoking the menorah through layered gilding.",
    materials: "Gold leaf, resin and acrylic on canvas",
    dimensions: "30 × 40 in (76 × 102 cm)",
    condition: "Mint — resin finish",
    provenance: "Artist's studio, acquired directly by LUXE",
    certificate: cert("2025-009"),
    year: "2025",
    styles: ["abstract", "modern", "metallic", "minimal"],
    colors: ["gold", "black"],
    rooms: ["living room", "office", "bedroom"],
  },
  p10: {
    description: "An aerial view of ancient Jerusalem with the golden temple glowing at its heart.",
    materials: "Oil on canvas",
    dimensions: "48 × 36 in (122 × 91 cm)",
    condition: "Excellent — varnished",
    provenance: "Artist's studio, acquired directly by LUXE",
    certificate: cert("2025-010"),
    year: "2025",
    styles: ["cityscape", "historical", "detailed", "religious"],
    colors: ["gold", "sand", "warm brown", "blue"],
    rooms: ["living room", "dining room", "study"],
  },
};
