const FLAG_TITLES = {
  DE: 'Germany',
  ES: 'Spain',
  FR: 'France',
  US: 'United States',
}

function UnitedStatesFlag() {
  const stripes = Array.from({ length: 13 }, (_, index) => (
    <rect
      key={index}
      x="0"
      y={index * 3}
      width="52"
      height="3"
      fill={index % 2 === 0 ? '#b22234' : '#fff'}
    />
  ))

  return (
    <>
      {stripes}
      <rect x="0" y="0" width="22" height="21" fill="#3c3b6e" />
      <g fill="#fff">
        {Array.from({ length: 5 }, (_, row) =>
          Array.from({ length: 6 }, (_, col) => (
            <circle
              key={`a-${row}-${col}`}
              cx={3 + col * 3.2}
              cy={3 + row * 3.6}
              r="0.65"
            />
          )),
        )}
        {Array.from({ length: 4 }, (_, row) =>
          Array.from({ length: 5 }, (_, col) => (
            <circle
              key={`b-${row}-${col}`}
              cx={4.6 + col * 3.2}
              cy={4.8 + row * 3.6}
              r="0.65"
            />
          )),
        )}
      </g>
    </>
  )
}

function FranceFlag() {
  return (
    <>
      <rect width="17.33" height="39" fill="#002395" />
      <rect x="17.33" width="17.34" height="39" fill="#fff" />
      <rect x="34.67" width="17.33" height="39" fill="#ed2939" />
    </>
  )
}

function GermanyFlag() {
  return (
    <>
      <rect width="52" height="13" fill="#000" />
      <rect y="13" width="52" height="13" fill="#dd0000" />
      <rect y="26" width="52" height="13" fill="#ffce00" />
    </>
  )
}

function SpainFlag() {
  return (
    <>
      <rect width="52" height="9.75" fill="#aa151b" />
      <rect y="9.75" width="52" height="19.5" fill="#f1bf00" />
      <rect y="29.25" width="52" height="9.75" fill="#aa151b" />
    </>
  )
}

const FLAGS = {
  DE: GermanyFlag,
  ES: SpainFlag,
  FR: FranceFlag,
  US: UnitedStatesFlag,
}

export default function FlagIcon({ code, className = '' }) {
  const Flag = FLAGS[code]

  if (!Flag) return null

  return (
    <svg
      className={className}
      viewBox="0 0 52 39"
      role="img"
      aria-label={FLAG_TITLES[code]}
      focusable="false"
    >
      <Flag />
    </svg>
  )
}
