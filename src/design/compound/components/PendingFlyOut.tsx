import React from 'react'
import FlyOut from './FlyOut'

interface Props {
  todoId: string
  completeTodo: (id: string) => void
  deleteTodo: (id: string) => void
}

const PendingFlyOut: React.FC<Props> = ({
  todoId,
  completeTodo,
  deleteTodo,
}) => {
  return (
    <FlyOut>
      <FlyOut.Toggle />
      <FlyOut.ActionList>
        <FlyOut.ActionItem>
          <button onClick={() => completeTodo(todoId)}>Complete</button>
        </FlyOut.ActionItem>
        <FlyOut.ActionItem>
          <button onClick={() => deleteTodo(todoId)}>Delete</button>
        </FlyOut.ActionItem>
      </FlyOut.ActionList>
    </FlyOut>
  )
}

export default PendingFlyOut
