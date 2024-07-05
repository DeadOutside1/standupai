import React from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";
import styles from "./model3d.module.css";
import { FloatingNav } from "@/components/ui/floatingNav";
import { FaHome } from "react-icons/fa";
import PlacePrompt from "./placePrompt";

const Model3D = () => {
  return (
    <div>
      <div className={styles.container}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <a href="/">Main Page</a>
        </button>
        <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
          <color attach="background" args={["#ececec"]} />
          <Experience />
        </Canvas>
      </div>
      <PlacePrompt />
    </div>
  );
};

export default Model3D;
