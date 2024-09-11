import React from "react";

export const ContactPageFirstBlock = () => {
  return (
    <section className="container ">
      <div className="flex flex-col lg:flex-row lg:justify-around gap-[20px] mt-[200px] lg:items-center text-start h-[355px]">
        <h1 className="text-[54px] font-raleway font-bold">Contacts</h1>
        <p className="text-[18px] w-[350px] font-raleway lg:font-semibold lg:w-[521px]">
          Заполните форму ниже или отправьте нам электронное письмо по адресу{" "}
          <a className="text-[#FF00F5]">hello@format-3</a>.com, чтобы
          договориться о предварительном звонке
        </p>
      </div>
    </section>
  );
};
