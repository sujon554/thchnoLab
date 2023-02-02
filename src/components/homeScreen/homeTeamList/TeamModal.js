import React from "react";

const TeamModal = ({ memberInfo }) => {
  return (
    <div>
      <input type="checkbox" id={memberInfo.name} className="modal-toggle" />
      <label htmlFor={memberInfo.name} className="modal cursor-pointer">
        <label className="modal-box rounded-md   w-11/12 max-w-5xl " htmlFor="">
        <label htmlFor={memberInfo.name} className="text-xl px-5 cursor-pointer absolute right-2 top-2">✕</label>
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-4 gap-x-10 lg:p-10">
            <div className="col-span-1">
              <img src={memberInfo.image} alt=""  />
              <div className=" w-full lg:w-[60%]">
                <h2 className="text-2xl text-start font-bold ">
                  {memberInfo.name}
                </h2>
                <h2 className="text-sm text-gray-600 font-semibold py-3">
                  {memberInfo.designation}
                </h2>
                <div className="flex gap-5 text-gray-500 text-lg">
                  {memberInfo.social.map((item, index) => (
                    <a key={index} target="__blank" href={item[1]}>
                      <i className={item[0]}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-span-2">
              <p className="text-justify text-lg">{memberInfo.description}</p>
            </div>
          </div>
        </label>
      </label>
    </div>
  );
};

export default TeamModal;
