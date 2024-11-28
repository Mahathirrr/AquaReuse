export const WATER_PARAMETERS = {
  turbidity: {
    label: "Turbidity",
    value: 2.5,
    unit: "NTU",
    status: "good",
    thresholds: {
      excellent: "< 2.0 NTU",
      good: "2.0-3.0 NTU",
      moderate: "3.0-5.0 NTU",
      poor: "> 5.0 NTU",
    },
  },
  ph: {
    label: "pH Level",
    value: 7.2,
    unit: "pH",
    status: "excellent",
    thresholds: {
      excellent: "6.5-7.5",
      good: "6.0-8.0",
      moderate: "5.5-8.5",
      poor: "< 5.5 or > 8.5",
    },
  },
  tds: {
    label: "Total Dissolved Solids",
    value: 450,
    unit: "ppm",
    status: "good",
    thresholds: {
      excellent: "< 500 ppm",
      good: "500-1000 ppm",
      moderate: "1000-1500 ppm",
      poor: "> 1500 ppm",
    },
  },
  temperature: {
    label: "Temperature",
    value: 23,
    unit: "°C",
    status: "excellent",
    thresholds: {
      excellent: "20-25°C",
      good: "15-30°C",
      moderate: "10-35°C",
      poor: "< 10°C or > 35°C",
    },
  },
};
