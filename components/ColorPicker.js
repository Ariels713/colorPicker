import randomColor from "randomcolor";
import convert from "color-convert";
import { useState } from "react";
function ColorPicker() {
  const [box1, setBox1] = useState("#e5e5e5");
  const [box2, setBox2] = useState("#e5e5e5");
  const [box3, setBox3] = useState("#e5e5e5");
  const [box4, setBox4] = useState("#e5e5e5");
  const [box5, setBox5] = useState("#e5e5e5");
  const [box6, setBox6] = useState("#e5e5e5");

  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
            Click On A box to randomly generate your color pallet.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:mt-8">
            <div
              onClick={() => setBox1(randomColor())}
              style={{ backgroundColor: `${box1}` }}
              className={`col-span-1 flex justify-center items-center py-8 px-8  h-36 rounded-sm `}
            >
              <p className="text-4xl font-extrabold italic opacity-40">
                {box1 === "#e5e5e5" ? "Click Me" : box1}
              </p>
            </div>
            <div
              onClick={() => setBox2(randomColor())}
              style={{ backgroundColor: `${box2}` }}
              className={`col-span-1 flex justify-center items-center py-8 px-8 h-36 rounded-sm`}
            >
              <p className="text-4xl font-extrabold italic opacity-40 ">
                {box2 === "#e5e5e5" ? "Click Me" : box2}
              </p>
            </div>
            <div
              onClick={() => setBox3(randomColor())}
              style={{ backgroundColor: `${box3}` }}
              className={`col-span-1 flex justify-center items-center py-8 px-8  h-36 rounded-sm`}
            >
              <p className="text-4xl font-extrabold italic opacity-40">
                {box3 === "#e5e5e5" ? "Click Me" : box3}
              </p>
            </div>
            <div
              onClick={() => setBox4(randomColor())}
              style={{ backgroundColor: `${box4}` }}
              className={`col-span-1 flex justify-center items-center py-8 px-8  h-36 rounded-sm`}
            >
              <p className="text-4xl font-extrabold italic opacity-40">
                {box4 === "#e5e5e5" ? "Click Me" : box4}
              </p>
            </div>
            <div
              onClick={() => setBox5(randomColor())}
              style={{ backgroundColor: `${box5}` }}
              className={`col-span-1 flex justify-center items-center py-8 px-8  h-36 rounded-sm`}
            >
              <p className="text-4xl font-extrabold italic opacity-40">
                {box5 === "#e5e5e5" ? "Click Me" : box5}
              </p>
            </div>
            <div
              onClick={() => setBox6(randomColor())}
              style={{ backgroundColor: `${box6}` }}
              className={`col-span-1 flex justify-center items-center py-8 px-8  h-36 rounded-sm`}
            >
              <p className="text-4xl font-extrabold italic opacity-40">
                {box6 === "#e5e5e5" ? "Click Me" : box6}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ColorPicker;
