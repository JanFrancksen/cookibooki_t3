import React, { useState } from "react";

const Pills = ({ tag, isActive }: any) => {
  const [Active, setActive] = useState(false);

  function setValue() {
    if (Active) {
      setActive(false);
    } else {
      setActive(true);
    }
  }

  const styling = "z-20 rounded-full px-4 py-2";

  return (
    <div>
      {Active ? (
        <button onClick={setValue} className={styling + " " + "bg-cb_primary"}>
          {tag}
        </button>
      ) : (
        <button onClick={setValue} className={styling + " " + "bg-white"}>
          {tag}
        </button>
      )}
    </div>
  );
};

export default Pills;
