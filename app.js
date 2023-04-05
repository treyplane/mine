import { Canvas } from '@react-three/fiber';
import { Sky } from '@react-three/fiber';

function App() {
   return (
      <>
        <Canvas>
          <Sky sunPosition={100, 100, 20} />
        </Canvas>
     </>
  );
};

export {App()};
