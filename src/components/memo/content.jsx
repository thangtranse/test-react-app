import React, { memo } from "react";

function DocumentComponent() {
  console.log("Component Re-render (use react memo)");
  return (
    <div style={{ border: "2px solid #333", margin: 10, padding: 10 }}>
      <p>Render: Component Re-render (use react memo)</p>
    </div>
  );
}

export default memo(DocumentComponent);
