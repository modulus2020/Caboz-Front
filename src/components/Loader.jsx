import { React, useState } from "react";


const Loader = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
          {setTimeout(function () {
          setShow(false);
        }, 1000)}
        {show ? (
          <div id="overlay">
            <div className="spinner"></div>
            <br />
            Loading...
          </div>
        ) : null}
    </div>
  )
}

export default Loader