export default function Wave({ fill, className }: { fill: string; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={`wave ${className}`}>
      <path
        className="wave"
        fill={fill}
        fillOpacity="1"
        d="M0,128L40,160C80,192,160,256,240,256C320,256,400,192,480,149.3C560,107,640,85,720,101.3C800,117,880,171,960,181.3C1040,192,1120,160,1200,144C1280,128,1360,128,1400,128L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
      ></path>
    </svg>
  );
}
