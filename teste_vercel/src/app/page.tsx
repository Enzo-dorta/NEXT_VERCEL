import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className='flex justify-center my-15'>
        {/* <img
            src="@/static/background_lg/Background-Gradient.png"
            alt="gradiente fundo"
            className=" h-screen w-screen"
        /> */}
      <div className="card lg:card-side h-128 w-320 bg-base-100 shadow-sm align-middle">
        <figure className="w-1/2 flex items-center justify-center bg-gradient-to-r from-purple-400 to-purple-600 p-10">
        <img
              src="static/logo/Logo_BuscaVest_icone.jpg"
              alt="Logo BuscaVest"
              className="h-10 w-10"
            />
        </figure>
        <div className="w-1/2 flex items-center justify-center bg-white p-10">
        <fieldset className="fieldset w-xs bg-base-0  p-4 rounded-box">
                <legend className="fieldset-legend text-xl">Cadastro</legend>

                <label className="fieldset-label">Email</label>
                <input type="email" className="input" placeholder="Email" />

                <label className="fieldset-label">Senha</label>
                <input type="password" className="input" placeholder="Senha" />

                <button className="btn btn-neutral mt-4 bg-violet-500">Entrar</button>

                <p>Não possui Cadastro? <a className="link link-primary" href='@/scr/app/users/(auth)/cadastro'>Clique aqui</a></p>
            </fieldset>
        </div>
      </div> 
      </div>   
      </>
  );
}
