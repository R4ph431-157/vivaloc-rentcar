import { useEffect } from 'react'

export function useCursor() {
  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return
    const cursor = document.querySelector<HTMLElement>('.cursor')
    const cursorD = document.querySelector<HTMLElement>('.cursor-d')
    if (!cursor || !cursorD) return

    let mx = 0, my = 0, dx = 0, dy = 0
    let animId: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      cursor.style.left = mx + 'px'
      cursor.style.top = my + 'px'
    }

    const loop = () => {
      dx += (mx - dx) * 0.15
      dy += (my - dy) * 0.15
      cursorD.style.left = dx + 'px'
      cursorD.style.top = dy + 'px'
      animId = requestAnimationFrame(loop)
    }

    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest('a,button,.fcard,.clink,.wrow')) {
        cursorD.classList.add('big')
      }
    }
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest('a,button,.fcard,.clink,.wrow')) {
        cursorD.classList.remove('big')
      }
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    animId = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(animId)
    }
  }, [])
}
