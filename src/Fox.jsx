import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Fox() {

    const fox = useGLTF('./Fox/glTF/Fox.gltf')
    const animations = useAnimations(fox.animations, fox.scene)


    useEffect(() => {
        const action = animations.actions.Run
        action.play()

        window.setTimeout(() => {
            animations.actions.Walk.play()
            animations.actions.Walk.crossFadeFrom(animations.actions.Run, 1)
        }, 2000)
    }, [])

    return (
        <primitive
            object={fox.scene}
            position={[-2.5, 0, 2.5]}
            scale={0.02}
            rotation-y={0.3}
        />
    )
}