"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls, Stage, useGLTF } from "@react-three/drei"

function Model({ path }: { path: string }) {
    const { scene } = useGLTF(path)
    return <primitive object={scene} />
}

export default function Product3DViewer({ modelPath }: { modelPath: string }) {
    return (
        <div className="w-full h-full min-h-[400px] bg-gray-50 rounded-xl overflow-hidden cursor-move">
            <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
                <Suspense fallback={null}>
                    <Stage environment="city" intensity={0.6}>
                        <Model path={modelPath} />
                    </Stage>
                </Suspense>
                <OrbitControls autoRotate autoRotateSpeed={0.5} makeDefault />
            </Canvas>
        </div>
    )
}
