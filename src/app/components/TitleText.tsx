import React from "react";
import { motion } from "framer-motion";

export default function TitleText({ children }: React.PropsWithChildren) {
  return <h1 className="text-7xl font-bold w-3/4 lovely  py-4">{children}</h1>;
}
