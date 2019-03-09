import React, { useState, useEffect } from "react";
import posed from "react-pose";

const Box = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});

function App() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setVisible(!visible);
    }, 1000);
  });

  return <Box className="box" pose={visible ? "visible" : "hidden"} />;
}

export default App;
