import { QUALITY_LEVELS } from "../constants/qualityLevels";

export const getQualityLevel = (score) => {
  return Object.entries(QUALITY_LEVELS).find(
    ([_, level]) => score >= level.range[0] && score <= level.range[1],
  )[1];
};

export const getRecommendations = (score) => {
  const level = getQualityLevel(score);
  if (level.color === "green") {
    return [
      "✓ Ideal for plant watering and gardening",
      "✓ Suitable for floor cleaning and mopping",
      "✓ Can be used for toilet flushing",
      "✓ Safe for outdoor cleaning tasks",
    ];
  } else if (level.color === "blue") {
    return [
      "✓ Suitable for outdoor cleaning",
      "✓ Can be used for toilet flushing",
      "✓ Appropriate for non-food contact surfaces",
      "⚠️ Not recommended for plant watering",
    ];
  } else if (level.color === "yellow") {
    return [
      "⚠️ Limited to toilet flushing only",
      "⚠️ Consider additional treatment",
      "❌ Avoid contact with surfaces",
      "❌ Not suitable for plant watering",
    ];
  } else {
    return [
      "❌ Not suitable for reuse",
      "❌ Requires proper disposal",
      "❌ Consider adjusting washing process",
      "❌ Check water source quality",
    ];
  }
};
