import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import  Panel from './Panel';

function DropDown({ options, onChange, value, }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef()

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }
     
     if (!divEl.current.contains(event.target)) {
      setIsOpen(false);
     }
    }
    document.addEventListener('click', handler, true)

    return () => {
      document.removeEventListener('click', handler)
    };;
  }, [])


  const handleSelect = () => {
  setIsOpen(!isOpen);
  };

  const handleClick = (selectedOption) => {
    setIsOpen(false);
    onChange(selectedOption);
  }

  const renderedItems = options.map((option) => {
    return(
      <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleClick(option)} key={option.value}>{option.label}</div>
    )
  })
  return(
    <div ref={divEl} className="w-48 relative">
      <Panel className="flex justify-between items-center cursor-pointer" onClick={handleSelect}>{value?.label || 'Selected...'}<GoChevronDown className="text-2xl" /></Panel>
      {isOpen && <Panel className="absolute top-full">{renderedItems}</Panel>}
    </div>
  )
}

export default DropDown;