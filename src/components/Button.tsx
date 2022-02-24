// can not find module.
import globals from "../styles/global.module.css";

function Button() {
  return (
    <>
      <button className={globals.btn}>Hello, world</button>
      {/* <button className={globals.an}>Hello, world</button> */}
    </>
  );
}

export { Button };
