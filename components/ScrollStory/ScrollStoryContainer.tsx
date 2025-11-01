"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Scene1_MacBookTyping from "./Scene1_MacBookTyping";
import Scene2_ScreenZoom from "./Scene2_ScreenZoom";
import Scene3_PacketJourney from "./Scene3_PacketJourney";
import Scene4_GatewayHacker from "./Scene4_GatewayHacker";
import Scene5_PacketSwap from "./Scene5_PacketSwap";
import Scene6_ConveyorBelt from "./Scene6_ConveyorBelt";
import Scene7_BlackWipe from "./Scene7_BlackWipe";
import Scene8_SageMessage from "./Scene8_SageMessage";

export default function ScrollStoryContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className="relative bg-slate-950"
      style={{ height: "2700vh" }} // 스크롤 속도를 훨씬 더 느리게 (1800vh → 2700vh)
    >
      {/* Fixed viewport for all scenes */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Scene 1: MacBook + ChatGPT Typing (0-15%) */}
        <Scene1_MacBookTyping scrollYProgress={scrollYProgress} />

        {/* Scene 2: Screen Zoom + Packet Creation (15-25%) */}
        <Scene2_ScreenZoom scrollYProgress={scrollYProgress} />

        {/* Scene 3: Packet Journey - Router/Airport (25-40%) */}
        <Scene3_PacketJourney scrollYProgress={scrollYProgress} />

        {/* Scene 4: Gateway/Bus Terminal + Hacker (40-55%) */}
        <Scene4_GatewayHacker scrollYProgress={scrollYProgress} />

        {/* Scene 5: Packet Swap (55-70%) */}
        <Scene5_PacketSwap scrollYProgress={scrollYProgress} />

        {/* Scene 6: Conveyor Belt + Amazon Tag (70-80%) */}
        <Scene6_ConveyorBelt scrollYProgress={scrollYProgress} />

        {/* Scene 7: Black Wipe Transition (80-85%) */}
        <Scene7_BlackWipe scrollYProgress={scrollYProgress} />

        {/* Scene 8: SAGE Message (85-90%) */}
        <Scene8_SageMessage scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}
