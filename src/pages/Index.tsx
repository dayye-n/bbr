import { useState } from "react";
import { GoatedGate } from "@/components/GoatedGate";
import { BirthdayQuestion } from "@/components/BirthdayQuestion";
import { FaceScan } from "@/components/FaceScan";
import { Celebration } from "@/components/Celebration";

type Stage = "goated" | "birthday" | "scan" | "celebrate";

const Index = () => {
  const [stage, setStage] = useState<Stage>("goated");

  return (
    <main>
      {stage === "goated" && <GoatedGate onYes={() => setStage("birthday")} />}
      {stage === "birthday" && <BirthdayQuestion onYes={() => setStage("scan")} />}
      {stage === "scan" && <FaceScan onComplete={() => setStage("celebrate")} />}
      {stage === "celebrate" && <Celebration />}
    </main>
  );
};

export default Index;
