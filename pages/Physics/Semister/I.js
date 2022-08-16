
import Link from "next/link";

const I = ()=> {
  return(
    <> 
    <div className="flex my-2">
     <p className="text-center font-bold mx-auto">
      BSc 1<sup>st</sup> Year, Semister-I<sup>st</sup> Phyeics Part-I
     </p>
    </div>
    <div className="flex my-8">
      <ul className=" m-1 content-center text-center mx-auto item-center space-y-3 text-white my-8">
          <caption className="font-bold flex text-lg">Mechanics And Properties Of Matters</caption>
        <li className="bg-yellow-500  rounded-lg p-2 text-center p-1">
        <Link href="../Chapter/Gravitation">Gravitation</Link></li>
        <li  className="bg-yellow-500  rounded-lg p-2 text-center p-1">
        <Link href="../Chapter/Elasticity">Elasticity</Link></li>
        <li className="bg-yellow-500 rounded-lg p-2 text-center p-1">
        <Link href="../Chapter/Viscosity">Viscosity</Link></li>
        <li className="bg-yellow-500 rounded-lg text-center p-2 p-1">
        <Link href="../Chapter/Surface_Tension">Surface Tension</Link></li>
      </ul>
    </div>
    
    <div className="flex my-2">
     <p className="text-center font-bold mx-auto">
      BSc 1<sup>st</sup> Year, Semister-I<sup>st</sup> Phyeics Part-II
     </p>
    </div>
    <div className="flex my-8">
      <ul className=" m-1 content-center text-center mx-auto item-center space-y-3 text-white my-8">
          <caption className="font-bold flex text-lg">Mathematical Methods In Phyeics</caption>
        <li className="bg-yellow-500  rounded-lg p-2 text-center p-1">Vector Analysis</li>
        <li  className="bg-yellow-500  rounded-lg p-2 text-center p-1">Complex Variable</li>
        <li className="bg-yellow-500 rounded-lg p-2 text-center p-1">Fourier Series</li>
        <li className="bg-yellow-500 rounded-lg text-center p-2 p-1">Partial Differential</li>
      </ul>
    </div>
    </>
  );
};

export default I;