import React from "react";
import "./../assets/css/DaysICode.css";
import GitHubCalendar from "react-github-calendar";
function DaysICode() {
  return (
    <div className="days-i-code">
      <h1>
        Days I <span>Code</span>
      </h1>
      <div className="code-contributions">
        <GitHubCalendar
          username="yeffreycode"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
          color="#5ff"
        />
      </div>
    </div>
  );
}

export default DaysICode;
