import { useState } from 'react'
import { Item } from '../../types/item'
import * as S from './styles'

type Props = {
    item: Item
}

export const  ListItem = ({item}: Props) => {

    const [isChecked, setIsChecked] = useState(item.done)

    return (
        <S.Container done={isChecked}>
            <input 
                type='checkbox' 
                checked={isChecked}
                onChange={e => setIsChecked(e.target.checked)}
            />
            <label>{item.name}</label>
        </S.Container>
    )
}