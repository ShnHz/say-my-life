<template>
  <div :style="{'height':height}" class="shapescolor flex">
    <canvas></canvas>
    <div class="cursor"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      height: 0
    }
  },
  mounted() {
    this.height = window.innerHeight - 58 + 'px'

    const canvas = document.querySelector('canvas')
    const ctx = canvas.getContext('2d')

    // const colors = ['#FDCA40', '#DF2935', '#3772FF', '#080708', '#23CE6B'];
    const colors = ['#003049', '#D62828', '#F77F00', '#FDFFFC', '#2EC4B6']

    let bounds
    let shapeDimension
    let grid = []
    let gridBounds
    function init() {
      bounds = [window.innerWidth, window.innerHeight]

      canvas.width = bounds[0]
      canvas.height = bounds[1]

      grid = []
      shapeDimension = 70
    }

    function createGrid() {
      gridBounds = [0, 0]
      gridBounds[0] = Math.ceil(bounds[0] / shapeDimension) + 1
      gridBounds[1] = Math.ceil(bounds[1] / shapeDimension) + 1

      for (let i = 0; i < gridBounds[0]; i++) {
        grid[i] = []
        for (let j = 0; j < gridBounds[1]; j++) {
          grid[i][j] = {
            position: [
              i * shapeDimension - shapeDimension / 2,
              j * shapeDimension - shapeDimension / 2
            ],
            colorIndex: random(0, 5),
            shape: {
              colorIndex: random(0, 5),
              type: random(0, 13),
              size: 1
            }
          }
        }
      }
    }

    function update(event) {
      for (let i = 0; i < gridBounds[0]; i++) {
        for (let j = 0; j < gridBounds[1]; j++) {
          grid[i][j].shape.size = calculateSizeRatio(grid[i][j])
        }
      }
    }

    function calculateSizeRatio(element) {
      const dist =
        Math.sqrt(
          (element.position[0] + shapeDimension / 2 - cursor[0]) ** 2 +
            (element.position[1] + shapeDimension / 2 - cursor[1]) ** 2
        ) / 200
      if (dist < 0.1) {
        return 0
      }
      if (dist > 1) {
        return 1
      }
      return dist
    }

    function draw() {
      for (let i = 0; i < gridBounds[0]; i++) {
        for (let j = 0; j < gridBounds[1]; j++) {
          ctx.fillStyle = colors[grid[i][j].colorIndex]
          ctx.fillRect(
            grid[i][j].position[0],
            grid[i][j].position[1],
            shapeDimension,
            shapeDimension
          )
          ctx.fillStyle = colors[grid[i][j].shape.colorIndex]
          ctx.beginPath()
          drawShape(grid[i][j])
          ctx.fill()
        }
      }
    }

    function drawShape(element) {
      switch (element.shape.type) {
        case 1:
          ctx.arc(
            element.position[0] + shapeDimension / 2,
            element.position[1] + shapeDimension / 2,
            shapeDimension * 0.5 * element.shape.size,
            0,
            2 * Math.PI
          )
          break
        case 2:
          ctx.moveTo(element.position[0], element.position[1])
          ctx.bezierCurveTo(
            element.position[0],
            element.position[1] + (shapeDimension / 1.5) * element.shape.size,
            element.position[0] + shapeDimension,
            element.position[1] + (shapeDimension / 1.5) * element.shape.size,
            element.position[0] + shapeDimension,
            element.position[1]
          )
          break
        case 3:
          ctx.moveTo(element.position[0], element.position[1] + shapeDimension)
          ctx.bezierCurveTo(
            element.position[0],
            element.position[1] +
              shapeDimension -
              (shapeDimension / 1.5) * element.shape.size,
            element.position[0] + shapeDimension,
            element.position[1] +
              shapeDimension -
              (shapeDimension / 1.5) * element.shape.size,
            element.position[0] + shapeDimension,
            element.position[1] + shapeDimension
          )
          break
        case 4:
          ctx.moveTo(element.position[0], element.position[1])
          ctx.bezierCurveTo(
            element.position[0] + (shapeDimension / 1.5) * element.shape.size,
            element.position[1],
            element.position[0] + (shapeDimension / 1.5) * element.shape.size,
            element.position[1] + shapeDimension,
            element.position[0],
            element.position[1] + shapeDimension
          )
          break
        case 5:
          ctx.moveTo(element.position[0] + shapeDimension, element.position[1])
          ctx.bezierCurveTo(
            element.position[0] +
              shapeDimension -
              (shapeDimension / 1.5) * element.shape.size,
            element.position[1],
            element.position[0] +
              shapeDimension -
              (shapeDimension / 1.5) * element.shape.size,
            element.position[1] + shapeDimension,
            element.position[0] + shapeDimension,
            element.position[1] + shapeDimension
          )
          break
        case 6:
          ctx.moveTo(element.position[0], element.position[1])
          ctx.lineTo(
            element.position[0],
            element.position[1] + shapeDimension * element.shape.size
          )
          ctx.lineTo(
            element.position[0] + shapeDimension * element.shape.size,
            element.position[1]
          )
          ctx.lineTo(element.position[0], element.position[1])
          break
        case 7:
          ctx.moveTo(element.position[0] + shapeDimension, element.position[1])
          ctx.lineTo(
            element.position[0] + shapeDimension,
            element.position[1] + shapeDimension * element.shape.size
          )
          ctx.lineTo(
            element.position[0] +
              shapeDimension -
              shapeDimension * element.shape.size,
            element.position[1]
          )
          ctx.lineTo(element.position[0] + shapeDimension, element.position[1])
          break
        case 8:
          ctx.moveTo(element.position[0], element.position[1])
          ctx.lineTo(
            element.position[0] + (shapeDimension / 2) * element.shape.size,
            element.position[1]
          )
          ctx.lineTo(
            element.position[0] + (shapeDimension / 2) * element.shape.size,
            element.position[1] + shapeDimension
          )
          ctx.lineTo(element.position[0], element.position[1] + shapeDimension)
          break
        case 9:
          ctx.moveTo(element.position[0], element.position[1])
          ctx.lineTo(
            element.position[0],
            element.position[1] + (shapeDimension / 2) * element.shape.size
          )
          ctx.lineTo(
            element.position[0] + shapeDimension,
            element.position[1] + (shapeDimension / 2) * element.shape.size
          )
          ctx.lineTo(element.position[0] + shapeDimension, element.position[1])
          break
        case 10:
          ctx.moveTo(element.position[0], element.position[1])
          ctx.lineTo(
            element.position[0],
            element.position[1] + shapeDimension * element.shape.size
          )
          ctx.bezierCurveTo(
            element.position[0] + (shapeDimension * element.shape.size) / 2,
            element.position[1] + shapeDimension * element.shape.size,
            element.position[0] + shapeDimension * element.shape.size,
            element.position[1] + (shapeDimension * element.shape.size) / 2,
            element.position[0] + shapeDimension * element.shape.size,
            element.position[1]
          )
          ctx.lineTo(element.position[0], element.position[1])
          break
        case 11:
          ctx.moveTo(
            element.position[0] + shapeDimension,
            element.position[1] + shapeDimension
          )
          ctx.lineTo(
            element.position[0] +
              shapeDimension -
              shapeDimension * element.shape.size,
            element.position[1] + shapeDimension
          )
          ctx.bezierCurveTo(
            element.position[0] +
              shapeDimension -
              shapeDimension * element.shape.size,
            element.position[1] +
              shapeDimension -
              (shapeDimension * element.shape.size) / 2,
            element.position[0] +
              shapeDimension -
              (shapeDimension * element.shape.size) / 2,
            element.position[1] +
              shapeDimension -
              shapeDimension * element.shape.size,
            element.position[0] + shapeDimension,
            element.position[1] +
              shapeDimension -
              shapeDimension * element.shape.size
          )
          ctx.lineTo(
            element.position[0] + shapeDimension,
            element.position[1] + shapeDimension
          )
          break
        case 12:
          ctx.moveTo(element.position[0] + shapeDimension, element.position[1])
          ctx.lineTo(
            element.position[0] +
              shapeDimension -
              shapeDimension * element.shape.size,
            element.position[1]
          )
          ctx.bezierCurveTo(
            element.position[0] +
              shapeDimension -
              shapeDimension * element.shape.size,
            element.position[1] + (shapeDimension * element.shape.size) / 2,
            element.position[0] +
              shapeDimension -
              (shapeDimension * element.shape.size) / 2,
            element.position[1] + shapeDimension * element.shape.size,
            element.position[0] + shapeDimension,
            element.position[1] + shapeDimension * element.shape.size
          )
          ctx.lineTo(element.position[0] + shapeDimension, element.position[1])
          break
        case 13:
          ctx.moveTo(element.position[0], element.position[1] + shapeDimension)
          ctx.lineTo(
            element.position[0] + shapeDimension * element.shape.size,
            element.position[1] + shapeDimension
          )
          ctx.bezierCurveTo(
            element.position[0] + shapeDimension * element.shape.size,
            element.position[1] +
              shapeDimension -
              (shapeDimension * element.shape.size) / 2,
            element.position[0] + (shapeDimension * element.shape.size) / 2,
            element.position[1] +
              shapeDimension -
              shapeDimension * element.shape.size,
            element.position[0],
            element.position[1] +
              shapeDimension -
              shapeDimension * element.shape.size
          )
          ctx.lineTo(element.position[0], element.position[1] + shapeDimension)
      }
    }

    const interval = 1000 / 60
    let then = Date.now()
    function loop() {
      requestAnimationFrame(loop)

      const now = Date.now()
      const delta = now - then
      if (delta > interval) {
        then = now - (delta % interval)
        draw()
      }
    }

    init()
    createGrid()
    loop()

    function random(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }

    window.addEventListener('resize', () => {
      init()
      createGrid()
      draw()
    })

    var cursor = [0, 0]
    const cursorEl = document.querySelector('.cursor')
    function handleMovement(event) {
      cursor[0] = event.clientX
      cursor[1] = event.clientY
      update()
      cursorEl.style = `top: ${cursor[1]}px; left: ${cursor[0] - 319}px`
    }
    document.addEventListener('mousemove', handleMovement.bind(this))
  }
}
</script>
<style lang="scss" scoped>
.shapescolor {
  margin: 0;

  background-color: #e6e8e6;
  overflow: hidden;
}
canvas {
  width: 100vw;
  height: 100vh;
}

.cursor {
  position: absolute;
  width: 70px;
  height: 70px;

  border-radius: 50%;
  background-color: white;

  mix-blend-mode: exclusion;
  transform: translate3d(-50%, -50%, 0);
  cursor: none;
}
</style>