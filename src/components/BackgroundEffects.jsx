export default function BackgroundEffects() {
  return (
    <>
      <div className="cur" id="cur" />
      <div className="cur-ring" id="curRing" />
      <canvas id="cvs" aria-hidden="true" />
      <div className="orb o1" />
      <div className="orb o2" />
      <div className="orb o3" />
      <div className="orb o4" />
      <svg
        className="fshape"
        style={{ width: 400, height: 400, top: '20%', right: '5%', animationDuration: '40s' }}
        viewBox="0 0 400 400"
        aria-hidden="true"
      >
        <polygon points="200,20 380,380 20,380" fill="none" stroke="#a371f7" strokeWidth="1.5" />
      </svg>
      <svg
        className="fshape"
        style={{
          width: 280,
          height: 280,
          bottom: '25%',
          left: '2%',
          animationDuration: '55s',
          animationDirection: 'reverse',
        }}
        viewBox="0 0 280 280"
        aria-hidden="true"
      >
        <rect
          x="40"
          y="40"
          width="200"
          height="200"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="1"
          transform="rotate(45 140 140)"
        />
      </svg>
    </>
  );
}
