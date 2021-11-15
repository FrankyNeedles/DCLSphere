const The_Sphere = new Entity('The_Sphere')
engine.addEntity(The_Sphere)
const transformSphere = new Transform({
  position: new Vector3(8, 1, 8),
  rotation: Quaternion.Euler(0, 0, 0),
  scale: new Vector3(1, 1, 1)
})
The_Sphere.addComponentOrReplace(transformSphere)
const The_SphereShape = new GLTFShape("models/The_Sphere.glb")
The_SphereShape.withCollisions = true
The_SphereShape.isPointerBlocker = true
The_SphereShape.visible = true
The_Sphere.addComponentOrReplace(The_SphereShape)


const Scene = new Entity('Scene')
engine.addEntity(Scene)
const transformGrass = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: Quaternion.Euler(0, 0, 0),
  scale: new Vector3(1, 1, 1)
})
Scene.addComponentOrReplace(transformGrass)
const SceneShape = new GLTFShape("models/Scene16x16.glb")
SceneShape.withCollisions = true
SceneShape.isPointerBlocker = true
SceneShape.visible = true
Scene.addComponentOrReplace(SceneShape)