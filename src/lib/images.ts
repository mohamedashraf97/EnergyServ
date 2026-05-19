/** Stable Unsplash URLs (verified). Use auto=format for Next.js image optimizer. */
const u = (id: string, w = 1920) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  hero: u("1581091226825-a6a2a5aee158", 1920),
  heroOg: u("1581091226825-a6a2a5aee158", 1200),
  industrial: u("1581091226825-a6a2a5aee158", 800),
  engineering: u("1504917595217-d4dc5ebe6122", 800),
  construction: u("1541888946425-d81bb19240f5", 800),
  office: u("1454165804606-c3d57bc86b40", 800),
  oilGas: u("1473341304170-971dccb5ac1e", 800),
  oilGasLarge: u("1473341304170-971dccb5ac1e", 1200),
  maintenance: u("1581092160562-40aa08e78837", 800),
  equipment: u("1587293852726-70cdb56c2866", 800),
  logistics: u("1586528116311-ad8dd3c8310d", 800),
} as const;
