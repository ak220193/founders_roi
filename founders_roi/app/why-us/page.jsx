"use client";

import { motion } from "framer-motion";
import AboutComponent from "../components/sections/WhyRoi/AboutComponent";
import MissionVision from "../components/sections/WhyRoi/MissionVision";
import ProblemSoluttion from "../components/sections/WhyRoi/ProblemSoluttion";
import GrowthFormula from "../components/sections/WhyRoi/GrowthFormula";
import ThirdCta from "../components/sections/WhyRoi/ThirdCta";

export default function WhyUs() {
  return (
    <div className="bg-black text-white py-10">
      <AboutComponent />
      <MissionVision />
      <ProblemSoluttion />
      <GrowthFormula />
      <ThirdCta />
    </div>
  );
}
