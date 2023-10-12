export default function BlogPage() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-bold text-xl">Comandos Basicos de Windows CMD (terminal)</h1>
      <div>
        <p>Estos son algunos comandos básicos que debes saber para moverte por la terminal.</p>
      </div>
      <div className="flex gap-2">
        <code className="bg-slate-300 rounded px-1">cd {"<carpeta>"}</code>
        <span>Para moverte de carpeta.</span>
      </div>
      <div className="flex gap-2">
        <code className="bg-slate-300 rounded px-1">cd ..</code>
        <span>Para retroceder a la carpeta padre.</span>
      </div>
      <div className="flex gap-2">
        <code className="bg-slate-300 rounded px-1">dir</code>
        <span>Listar arhivos y carpetas.</span>
      </div>
      <div className="flex gap-2">
        <code className="bg-slate-300 rounded px-1">mkdir</code>
        <span>Crear una nueva Carpeta.</span>
      </div>
      <div className="flex gap-2">
        <code className="bg-slate-300 rounded px-1">del {"<filename>"}</code>
        <span>Para eliminar un archivo o carpeta vacía.</span>
      </div>
      <div className="flex gap-2">
        <code className="bg-slate-300 rounded px-1">code .</code>
        <span>Abrir el Visual Estudio Code desde cmd.</span>
      </div>
    </div>
  );
}
