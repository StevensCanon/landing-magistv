// components/ui/SquaresBackground.vue
<template>
  <canvas
    ref="canvasRef"
    :class="['w-full h-full border-none block', className]"
  ></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

interface SquaresProps {
  direction?: 'right' | 'left' | 'up' | 'down' | 'diagonal'
  speed?: number
  borderColor?: string
  squareSize?: number
  hoverFillColor?: string
  className?: string
}

const props = withDefaults(defineProps<SquaresProps>(), {
  direction: 'right',
  speed: 1,
  borderColor: '#333',
  squareSize: 40,
  hoverFillColor: '#222',
})

const canvasRef = ref<HTMLCanvasElement | null>(null)
const requestRef = ref<number | null>(null)
const numSquaresX = ref(0)
const numSquaresY = ref(0)
const gridOffset = ref({ x: 0, y: 0 })
const hoveredSquare = ref<{ x: number; y: number } | null>(null)

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  canvas.style.background = '#060606'

  const resizeCanvas = () => {
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    numSquaresX.value = Math.ceil(canvas.width / props.squareSize) + 1
    numSquaresY.value = Math.ceil(canvas.height / props.squareSize) + 1
  }

  const drawGrid = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const startX =
      Math.floor(gridOffset.value.x / props.squareSize) * props.squareSize
    const startY =
      Math.floor(gridOffset.value.y / props.squareSize) * props.squareSize

    ctx.lineWidth = 0.5

    for (
      let x = startX;
      x < canvas.width + props.squareSize;
      x += props.squareSize
    ) {
      for (
        let y = startY;
        y < canvas.height + props.squareSize;
        y += props.squareSize
      ) {
        const squareX = x - (gridOffset.value.x % props.squareSize)
        const squareY = y - (gridOffset.value.y % props.squareSize)

        if (
          hoveredSquare.value &&
          Math.floor((x - startX) / props.squareSize) ===
            hoveredSquare.value.x &&
          Math.floor((y - startY) / props.squareSize) ===
            hoveredSquare.value.y
        ) {
          ctx.fillStyle = props.hoverFillColor
          ctx.fillRect(squareX, squareY, props.squareSize, props.squareSize)
        }

        ctx.strokeStyle = props.borderColor
        ctx.strokeRect(squareX, squareY, props.squareSize, props.squareSize)
      }
    }

    const gradient = ctx.createRadialGradient(
      canvas.width / 2,
      canvas.height / 2,
      0,
      canvas.width / 2,
      canvas.height / 2,
      Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2,
    )
    gradient.addColorStop(0, 'rgba(6, 6, 6, 0)')
    gradient.addColorStop(1, '#060606')

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }

  const updateAnimation = () => {
    const effectiveSpeed = Math.max(props.speed, 0.1)

    switch (props.direction) {
      case 'right':
        gridOffset.value.x =
          (gridOffset.value.x - effectiveSpeed + props.squareSize) %
          props.squareSize
        break
      case 'left':
        gridOffset.value.x =
          (gridOffset.value.x + effectiveSpeed + props.squareSize) %
          props.squareSize
        break
      case 'up':
        gridOffset.value.y =
          (gridOffset.value.y + effectiveSpeed + props.squareSize) %
          props.squareSize
        break
      case 'down':
        gridOffset.value.y =
          (gridOffset.value.y - effectiveSpeed + props.squareSize) %
          props.squareSize
        break
      case 'diagonal':
        gridOffset.value.x =
          (gridOffset.value.x - effectiveSpeed + props.squareSize) %
          props.squareSize
        gridOffset.value.y =
          (gridOffset.value.y - effectiveSpeed + props.squareSize) %
          props.squareSize
        break
    }

    drawGrid()
    requestRef.value = requestAnimationFrame(updateAnimation)
  }

  const handleMouseMove = (event: MouseEvent) => {
    const rect = canvas.getBoundingClientRect()
    const mouseX = event.clientX - rect.left
    const mouseY = event.clientY - rect.top

    const startX =
      Math.floor(gridOffset.value.x / props.squareSize) * props.squareSize
    const startY =
      Math.floor(gridOffset.value.y / props.squareSize) * props.squareSize

    const hoveredSquareX = Math.floor(
      (mouseX + gridOffset.value.x - startX) / props.squareSize,
    )
    const hoveredSquareY = Math.floor(
      (mouseY + gridOffset.value.y - startY) / props.squareSize,
    )

    hoveredSquare.value = { x: hoveredSquareX, y: hoveredSquareY }
  }

  const handleMouseLeave = () => {
    hoveredSquare.value = null
  }

  window.addEventListener('resize', resizeCanvas)
  canvas.addEventListener('mousemove', handleMouseMove)
  canvas.addEventListener('mouseleave', handleMouseLeave)

  resizeCanvas()
  requestRef.value = requestAnimationFrame(updateAnimation)

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeCanvas)
    canvas.removeEventListener('mousemove', handleMouseMove)
    canvas.removeEventListener('mouseleave', handleMouseLeave)
    if (requestRef.value) {
      cancelAnimationFrame(requestRef.value)
    }
  })
})
</script>