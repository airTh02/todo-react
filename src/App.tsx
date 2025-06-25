import {useState} from 'react';
import {Item} from './types/item'
import * as C from './App.styles';
import { ListItem } from './components/listItem'
import { AddArea } from './components/AddArea';
const App = () => {

  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'sua mae', done: false},
    {id: 2, name: 'seu pai', done: true}
  ])

  const handleAddTask = (taskName: string) => {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList)
  }

  return(
    <C.Container>
      <C.Area>
        <C.Header>Olá</C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map(((item, index) => 
          <ListItem 
          key={index}
          item={item}
          />
        ))}
      </C.Area>
    </C.Container>
  );

}

export default App