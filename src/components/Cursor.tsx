import { useCursor } from '../hooks/useCursor'

export default function Cursor() {
  useCursor()
  return (
    <>
      <div className="cursor" />
      <div className="cursor-d" />
    </>
  )
}
