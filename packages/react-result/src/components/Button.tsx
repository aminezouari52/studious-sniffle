import * as React from "react";

function Button(props: any) {
  return (
    <>
      <button className="button">Submit</button>
      <style jsx>{`
        .button {
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          background-color: #3498db;
          color: white;
          cursor: pointer;
        }

        .button:hover {
          background-color: #2980b9;
        }
      `}</style>
    </>
  );
}

export default Button;
