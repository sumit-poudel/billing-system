import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import Table from "./components/Table.jsx";

const App = () => {
const contentRef = useRef(null);
const reactToPrintFn = useReactToPrint({ contentRef });

return (
  <div>
    <button className="ui-btn" onClick={() => reactToPrintFn()}>
        <span>Print</span>
      </button>
      <div ref={contentRef} className="table" >
        <Table />
      </div>
  </div>



);
}
export default App;
