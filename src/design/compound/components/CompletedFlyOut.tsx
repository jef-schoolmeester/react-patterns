import React from 'react'
import FlyOut from './FlyOut'

interface Props {
  todoId: string
  deleteTodo: (id: string) => void
}

const CompletedFlyOut: React.FC<Props> = ({ todoId, deleteTodo }) => {
  return (
    <FlyOut>
      <FlyOut.Toggle />
      <FlyOut.ActionList>
        <FlyOut.ActionItem>
          <button onClick={() => deleteTodo(todoId)}>Delete</button>
        </FlyOut.ActionItem>
      </FlyOut.ActionList>
    </FlyOut>
  )
}

export default CompletedFlyOut
