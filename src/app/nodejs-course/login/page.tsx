import React from "react";

const LoginCoursePage = () => {
  return (
    <div className="border mt-10 md:mt-20">
      <form className="mx-auto w-11/12 shadow-xl md:w-4/12 flex flex-col gap-5 p-10 rounded">
        <div className="w-full">
          <input className="w-full bg-transparent border-b border-black" placeholder="User Id" />
        </div>
        <div className="w-full">
          <input type="password" className="w-full bg-transparent border-b border-black" placeholder="Password" />
        </div>
        <div className="w-full flex">
          <input className="bg-black mx-auto w-8/12 md:w-6/12 text-white font-bold cursor-pointer rounded-3xl py-2" type="submit" value="Login" />
        </div>
        <div>
          <p>Si aun no estás dentro del curso</p>
          <p>Puedes unirte al grupo y enviar un mensaje al administrador</p>
          <a className="underline" href="https://chat.whatsapp.com/KN1ROVEzjLiCkn7nmicJM4" target="_blank">
            Unirme Al Grupo
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginCoursePage;
