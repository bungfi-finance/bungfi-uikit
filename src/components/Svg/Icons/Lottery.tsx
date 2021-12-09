import React from "react";
import { MenuSvg } from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <MenuSvg viewBox="0 0 48 48" {...props}>
      <style>
        {`.st1{fill:none;stroke-width:2;stroke-miterlimit:10}`}
      </style>
      <g id="Money">
        <path className="st1" d="M1 15H41V39H1z" />
        <path className="st1" d="M7 15L7 9 47 9 47 33 41 33" />
        <circle className="st1" cx={21} cy={27} r={6} />
      </g>
    </MenuSvg>
  );
};

export default Icon;
