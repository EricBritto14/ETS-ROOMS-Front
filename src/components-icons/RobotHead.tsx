import React from "react";

export default function RobotHead(props) {
  return (
    <svg
      width={props.size}
      fill={props.color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 192 192"
    >
      <path
        d="M72,120h48c6.6167,0,12-5.3833,12-12V96H60v12C60,114.6167,65.3833,120,72,120z M84,112v-8h8v8H84z M100,104h8v8h-8V104z
	 M124,108c0,2.20557-1.79443,4-4,4h-4v-8h8V108z M68,104h8v8h-4c-2.20557,0-4-1.79443-4-4V104z M74,84c7.71973,0,14-6.28027,14-14
	s-6.28027-14-14-14s-14,6.28027-14,14S66.28027,84,74,84z M74,64c3.30859,0,6,2.69141,6,6s-2.69141,6-6,6s-6-2.69141-6-6
	S70.69141,64,74,64z M176,88c0-11.87067-8.66437-21.74982-20-23.66034V40h-56v-9.07898c2.38892-1.38385,4-3.96161,4-6.92102
	c0-4.41827-3.58173-8-8-8s-8,3.58173-8,8c0,2.95941,1.61108,5.53717,4,6.92102V40H36v24.33966C24.66437,66.25018,16,76.12933,16,88
	s8.66437,21.74982,20,23.66034V136h32v16H36v24h120v-24h-36v-16h36v-24.33966C167.33563,109.74982,176,99.87067,176,88z M24,88
	c0-7.43896,5.1106-13.69012,12-15.47345v30.9469C29.1106,101.69012,24,95.43896,24,88z M148,160v8H44v-8h24h52H148z M112,152H76v-16
	h36V152z M148,128h-28H68H44V48h104V128z M156,103.47345v-30.9469c6.8894,1.78333,12,8.03448,12,15.47345
	S162.8894,101.69012,156,103.47345z M118,84c7.71973,0,14-6.28027,14-14s-6.28027-14-14-14s-14,6.28027-14,14S110.28027,84,118,84z
	 M118,64c3.30859,0,6,2.69141,6,6s-2.69141,6-6,6s-6-2.69141-6-6S114.69141,64,118,64z"
      />
    </svg>
  );
}
