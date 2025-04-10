import { TypeColors } from "../../types";
import { TYPE_COLORS } from "../constants";

export const getTypeColorByType = (type: string) => {
  return TYPE_COLORS[type as TypeColors] || "bg-gray-500";
};
