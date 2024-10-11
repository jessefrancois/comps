// import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

function TablePage() {
  const config = [
    {
      label: 'Fruits',
      render: (fruit) =>  fruit.name,
      sortValue: (fruit) => {return fruit.name} 
    },
    {
      label:'Color',
      render: (fruit) => <div className={`p-2 m-3 max-w-0.5 ${fruit.color}`}></div>
    },
    {
      label: 'Score',
      render: (fruit) => fruit.score,
      sortValue: (fruit) => {return fruit.score}
    },

    {
      label: 'Score Squared',
      render: (fruit => fruit.score ** 2),
      sortValue: fruit => fruit.score ** 2
    }
  ]
  
  const keyFn = (fruit) => {
    return fruit.name;
  }

  const data = [
    {name: 'Orange', color: 'bg-orange-500', score: 5},
    {name: 'Apple', color: 'bg-red-500', score: 3},
    {name: 'Banana', color: 'bg-yellow-500', score: 1},
    {name: 'Lime', color: 'bg-green-500', score: 4},
    {name: 'Cherry', color: 'bg-red-700', score: 2.5},
  ]

  return(
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn}  />
    </div>
  )
}

export default TablePage;