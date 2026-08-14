/**
 * Generates a unique Certificate ID in the format FIGMA-YEAR-XXXXXX
 * Example: FIGMA-2026-AB1234
 */
export function generateCertificateId() {
  const currentYear = new Date().getFullYear();
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomPart = "";
  for (let i = 0; i < 6; i++) {
    randomPart += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `FIGMA-${currentYear}-${randomPart}`;
}
