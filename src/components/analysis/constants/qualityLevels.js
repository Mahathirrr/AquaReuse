import {
  CheckCircleIcon,
  BeakerIcon,
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

export const QUALITY_LEVELS = {
  EXCELLENT: {
    range: [85, 100],
    color: "green",
    label: "Excellent",
    description: "Safe for most non-food contact purposes",
    icon: CheckCircleIcon,
    criteria: [
      "Turbidity < 2.0 NTU",
      "pH between 6.5-7.5",
      "TDS < 500 ppm",
      "Temperature 20-25°C",
    ],
  },
  GOOD: {
    range: [70, 84],
    color: "blue",
    label: "Good",
    description: "Suitable for limited reuse applications",
    icon: BeakerIcon,
    criteria: [
      "Turbidity 2.0-3.0 NTU",
      "pH between 6.0-8.0",
      "TDS 500-1000 ppm",
      "Temperature 15-30°C",
    ],
  },
  MODERATE: {
    range: [50, 69],
    color: "yellow",
    label: "Moderate",
    description: "Restricted use recommended",
    icon: ExclamationTriangleIcon,
    criteria: [
      "Turbidity 3.0-5.0 NTU",
      "pH between 5.5-8.5",
      "TDS 1000-1500 ppm",
      "Temperature 10-35°C",
    ],
  },
  POOR: {
    range: [0, 49],
    color: "red",
    label: "Poor",
    description: "Not recommended for reuse",
    icon: XMarkIcon,
    criteria: [
      "Turbidity > 5.0 NTU",
      "pH < 5.5 or > 8.5",
      "TDS > 1500 ppm",
      "Temperature < 10°C or > 35°C",
    ],
  },
};
