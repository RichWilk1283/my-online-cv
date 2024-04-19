import React from "react";

function Education() {
  return (
    <div>
      <h5 className="font-bold text-center text-2xl text-blue-900 md:mt-8">
        Education
      </h5>
      <div className="flex flex-col my-3 p-3 rounded-xl bg-blue-950/20">
        <h6 className="font-thin">Dormston School (1994 - 1999)</h6>
        <p className="pl-3">
          English - C, Maths - C, Science - C, C (Double award)
        </p>
        <h6 className="font-thin">M.O.S.T. Training (1999 - 2000)</h6>
        <p className="pl-3">IT NVQ - Level 2</p>
      </div>
    </div>
  );
}

export default Education;
