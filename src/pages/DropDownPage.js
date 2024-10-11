import { useState } from "react";
import DropDown from '../components/DropDown'

function DropDownPage(){
  const [selected, setSelected] = useState(null);

  const handleOptionClick = (selectedOption) => {
    setSelected(selectedOption);
  };

  const options = [
    {label: 'Red', value: 'red'},{label: 'Blue', value: 'blue'},{label: 'Green', value: 'green'}
  ]
  return(
  <div className="flex">
    <DropDown options={options} value={selected}  onChange={handleOptionClick}  />
  </div>
  )
}
export default DropDownPage;