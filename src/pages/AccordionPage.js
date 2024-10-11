import Accordion from '../components/Accordion';

const items = [{
  label: 'Label 1',
  content:'Content 1',
  id: 'fsdf'
},
{
  label: 'Label 2',
  content:'Content 2',
  id:'cbvcb'
},
{
  label: 'Label 3',
  content:'Content 3',
  id: 'uyiyu'
}]

function AccordionPage() {

 
  return(
    <Accordion items={items} />
    
  )
}

export default AccordionPage;