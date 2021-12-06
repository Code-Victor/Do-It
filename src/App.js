import { useState } from 'react'
import { Tab } from '@headlessui/react'
import AllTab from './All'
import ActiveTab from './ActiveTab'
import CompletedTab from './CompletedTab'

const Tabs=[
  'All',
  'Active',
  'Completed'
]
function App() {
  const [todos, setTodos] = useState([
    
  ])
  return (
    <div className="flex flex-col h-40 w-6/12 mx-auto">
      <h1 className="font-bold text-lg font-sans mx-auto">#todo</h1>
      <Tab.Group  >
        <Tab.List className="px-20 flex justify-between mb-5">
          {
            Tabs.map((tab)=>
            <Tab
           className={({ selected }) =>
           selected ? 'border-b-2 border-blue-500 transition font-semibold' : 'bg-white text-black border-none font-semibold'
          }
          >{tab}</Tab>
            
            )
          }
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel><AllTab todos={todos} setTodos={setTodos}/></Tab.Panel>
          <Tab.Panel><ActiveTab todos={todos} setTodos={setTodos}/></Tab.Panel>
          <Tab.Panel><CompletedTab todos={todos} setTodos={setTodos}/></Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
    
  )
}

export default App
