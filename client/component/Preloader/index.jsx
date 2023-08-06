import * as React from "react"

const Preloader = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 100 100"
    {...props}
  >
    <circle
      cx={50}
      cy={50}
      r={44}
      fill="none"
      stroke="#fff"
      strokeWidth={4}
      style={{
        opacity: 0.5,
      }}
    />
    <circle cx={8} cy={54} r={6} fill="#fff" stroke="#e74c3c" strokeWidth={3}>
      <animateTransform
        attributeName="transform"
        dur="2s"
        from="0 50 48"
        repeatCount="indefinite"
        to="360 50 52"
        type="rotate"
      />
    </circle>
  </svg>
)
export default Preloader
