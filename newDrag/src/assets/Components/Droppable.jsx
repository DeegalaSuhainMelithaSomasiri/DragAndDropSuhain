import React from 'react';
import {useDroppable} from '@dnd-kit/core';
import './Column.css'

export function Droppable(props) {
  const {isOver, setNodeRef} = useDroppable({
    id: 'droppable',
  });
  const style = {
    color: isOver ? 'pink' : undefined,
  };
  
  
  return (
    <div ref={setNodeRef} style={style} >
      {props.children}
    </div>
  );
}