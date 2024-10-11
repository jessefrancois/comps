import Table from "./Table";
import { GoTriangleUp, GoTriangleDown  } from "react-icons/go";
import useSort from "../hooks/use-sort";

function SortableTable(props) {
  const {config, data} = props;
  const {
    sortOrder,
    sortBy,
    sortedData, 
    setSortColumn
  } = useSort(data, config);
 
  const UpdatedConfig = config.map((column)=> {
    if (!column.sortValue) {
      return column
    }

    return {
      ...column, header: () => (
      <th className="cursor-pointer hover:bg-gray-100" onClick={() => setSortColumn(column.label)}>
        <div className="flex items-center">
          {getIcons(column.label, sortBy, sortOrder)}
          {column.label}
        </div>
        </th>
        )
    }
  })

  return(
      <Table {...props} data={sortedData} config={UpdatedConfig} />
  )
}

    
function getIcons(label, sortBy, sortOrder)  {
  if (label !== sortBy) {
    return (
      <div className="mr-2">
        <GoTriangleUp />
        <GoTriangleDown />
      </div>
    )
  }

  if (sortOrder === null)  {
    return (
      <div className="mr-2">
        <GoTriangleUp />
        <GoTriangleDown />
      </div>
    )
  } else if ( sortOrder === 'asc') {
    return (
      <div className="mr-2">
        <GoTriangleUp />
      </div>
    )
  } else if (sortOrder === 'desc') {
    return (
      <div className="mr-2">
        <GoTriangleDown />
      </div>
    )
  }
}

export default SortableTable