export default function Wave({ fill, className }: { fill: string; className?: string }) {
  return (
    <svg width={"100%"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300" className={`wave ${className}`}>
      <path
        className="wave"
        fill={fill}
        fillOpacity="1"
        d="M0,160L40,160C80,160,160,160,240,160C320,160,400,160,480,160C560,160,640,160,720,160C800,160,880,160,960,160C1040,160,1120,160,1200,160C1280,160,1360,160,1400,160L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
      ></path>
    </svg>
  );
}
