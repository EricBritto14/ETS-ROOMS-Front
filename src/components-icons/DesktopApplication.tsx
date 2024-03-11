import React from "react";

export default function DesktopApplication(props) {
  return (
    <svg
      width={props.size}
      fill={props.color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 192 192"
    >
      <path
        d="M176,136V32H16v104h64v16H64v8h64v-8h-16v-16H176z M104,152H88v-16h16V152z M24,128V40h144v88H24z M127.12354,61.50098
	L145.12256,84l-17.99902,22.49902l-6.24707-4.99805L134.87744,84l-14.00098-17.50098L127.12354,61.50098z M71.12354,66.49902
	L57.12256,84l14.00098,17.50098l-6.24707,4.99805L46.87744,84l17.99902-22.49902L71.12354,66.49902z M100.28613,62.51465
	l7.42773,2.9707l-16,40l-7.42773-2.9707L100.28613,62.51465z"
      />
    </svg>
  );
}
