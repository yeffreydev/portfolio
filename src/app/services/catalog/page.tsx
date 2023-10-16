function CatalogPage() {
  return (
    <div className="mx-auto w-11/12">
      <div className="flex flex-col gap-2 p-2">
        <h1 className="text-3xl font-semibold">The Catalog Bussines Template</h1>
        <div className="h-[400px] w-10/12 bg-black relative">
          <button className="bg-cyan-700 text-white absolute bottom-3 right-3 px-5 py-1 rounded-lg">Demo</button>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, qui corrupti at maxime unde reprehenderit quisquam eveniet doloribus porro architecto iusto facilis est assumenda, laborum
          dicta? Nemo maiores odit tempore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum placeat dolore vitae, illo expedita libero perferendis dolores, ex sapiente excepturi sit
          soluta, maiores explicabo ratione sequi dolorem tempore omnis quaerat.
        </p>
        <div className="flex items-center gap-3">
          <span className="text-xl">Enroll Now for S/ 100</span>
          <button className="bg-black text-xl text-white rounded-xl px-10 py-1">Buy</button>
        </div>
        <div className="mt-5">
          <span>Catalog Template + 2 other Templates</span>
          <div className="flex gap-3 items-center">
            <span className="text-xl">Enroll Now for S/ 150</span>
            <button className="bg-black text-xl text-white rounded-xl px-10 py-1">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatalogPage;
