import React, {useEffect} from "react";
import InstantHook from "../components/InstantHook.js";

function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* INSTANT HOOK SECTION */}
      <InstantHook />

      {/* Other content can still be inside a container if needed */}
      <div className="container mx-auto py-10 px-6">
        {/* Your other content here */}
      </div>
    </div>
  );
}

export default Portfolio;
