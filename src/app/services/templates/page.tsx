function TemplatePage() {
  return (
    <div className="w-11/12 mx-auto">
      <div className="p-3">
        <h1 className="text-3xl font-semibold">Choose Your Favorite Template</h1>
      </div>

      <div className="flex gap-10 flex-wrap">
        <div className="w-[250px] h-[300px] bg-slate-600">
          <button>Demo</button>
        </div>
        <div className="w-[250px] h-[300px] bg-slate-600"></div>
        <div className="w-[250px] h-[300px] bg-slate-600"></div>
        <div className="w-[250px] h-[300px] bg-slate-600"></div>
        <div className="w-[250px] h-[300px] bg-slate-600"></div>
      </div>
    </div>
  );
}

export default TemplatePage;
