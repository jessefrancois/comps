import { useState } from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go"

function Accordion({ items }) {

  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
        if (currentExpandedIndex === nextIndex) {
          return -1
        } else {
          return nextIndex
        }
      })
    }

  const renderedItems = items.map((item, index) => {
    
    const isExpanded = index === expandedIndex;

    const icon = <span className="text-2xl">
      {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
    </span>
  
    return (
    <div onClick={() => handleClick(index)} key={item.id}>
      <div className="flex p-3 bg-gray-50 border-b items-center cursor-pointer justify-between">{item.label}{icon}</div>
      {isExpanded && <div className="border-b p-5">{item.content}</div>}
    </div>
    )
  })

  return(
    <div className="border-x border-t rounded">{renderedItems}</div>
  )
}

export default Accordion