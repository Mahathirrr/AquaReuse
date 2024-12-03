export const USER_ROLES = {
  UMKM: "umkm",
  HEALTH_OFFICIAL: "health_official",
  CHEMICAL_EXPERT: "chemical_expert",
};

export const ROLE_LABELS = {
  [USER_ROLES.UMKM]: "UMKM Owner",
  [USER_ROLES.HEALTH_OFFICIAL]: "Health Department Official",
  [USER_ROLES.CHEMICAL_EXPERT]: "Chemical Expert",
};

export const ROLE_FEATURES = {
  [USER_ROLES.HEALTH_OFFICIAL]: [
    "Monitor water quality across restaurants",
    "Generate compliance reports",
    "Issue health certificates",
    "Track food safety metrics",
    "Conduct virtual inspections",
  ],
  [USER_ROLES.CHEMICAL_EXPERT]: [
    "Advanced water analysis",
    "Chemical composition breakdown",
    "Treatment recommendations",
    "Quality trend analysis",
    "Research data collection",
  ],
};
