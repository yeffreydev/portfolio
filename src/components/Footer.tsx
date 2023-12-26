export const Footer = () => {
  return (
    <div className="bg-black w-full flex flex-col items-center justify-center min-h-[200px]">
      <div>
        © Developed by{" "}
        <a className="underline" href="https://www.instagram.com/yeffreydev/">
          YeffreyDev
        </a>
      </div>
      <div>
        Follow Me{" "}
        <a className="underline" href="https://www.instagram.com/yeffreydev/">
          Instagram
        </a>
        ,
        <a className="underline" href="https://www.tiktok.com/@yeffreydev">
          TikTok
        </a>
        ,
        <a className="underline" href="https://github.com/yeffreydev">
          GitHub
        </a>
      </div>
      <div>
        <p>
          Sponsored by{" "}
          <a className="underline" href="https://vercel.com/">
            @Vercel
          </a>
        </p>
      </div>
    </div>
  );
};
