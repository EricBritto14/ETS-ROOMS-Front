import React from "react";

export default function DesktopIcon(props) {
  return (
    <svg
      width={props.size}
      fill={props.color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 192 192"
    >
      <path d="M176,136V32H16v104h64v16H64v8h64v-8h-16v-16H176z M24,40h144v88H24V40z M104,152H88v-16h16V152z" />
    </svg>
  );
}
