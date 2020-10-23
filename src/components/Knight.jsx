import React from 'react'
import { ItemTypes } from '../services/ItemTypes'
import { useDrag, DragPreviewImage } from 'react-dnd'
import { knightImage } from './KnightImage'

//export default function Knight() {
function Knight() {

  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: ItemTypes.KNIGHT },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    }),
  })
  return (
    <>
    <DragPreviewImage connect={preview} src={knightImage}/>
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move',
      }}
    >
      ♘
    </div>
    </>
  )
}

export default Knight