

export const SCALE = .01

// module aliases
let Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies

// create an engine
let engine = Engine.create()

// create a renderer
let render = Render.create({
    element: document.body,
    engine: engine
})

// create two boxes and a ground
export let boxA = Bodies.rectangle(400, 200, 100, 100)
export let boxB = Bodies.rectangle(450, 50, 100, 100)
let ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true })

// add all of the bodies to the world
World.add(engine.world, [boxA, boxB, ground])

// run the engine
Engine.run(engine)

// run the renderer
Render.run(render)