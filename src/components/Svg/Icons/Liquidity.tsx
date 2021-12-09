import React from "react";
import { MenuSvg } from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <MenuSvg viewBox="0 0 48 48" {...props}>
      <style>
        {`.st2{fill:none;stroke-width:2;stroke-miterlimit:10}`}
      </style>
      <g id="Plates">
        <ellipse className="st2" cx={24} cy={16} rx={23} ry={11} />
        <path
          className="st2"
          d="M7 18c0-4.4 7.6-8 17-8s17 3.6 17 8M47 23c0 6.4-10.3 12-23 12S1 29.4 1 23"
        />
        <path className="st2" d="M47 31c0 6.3-10.3 12-23 12S1 37.3 1 31" />
      </g>
    </MenuSvg>
  );
};

export default Icon;
