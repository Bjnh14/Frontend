import React from 'react'
function ForMen() {
  return (
    <>
      <div
        style={{
          background: "url('hinhdoc1.jpg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          objectFit: 'cover',
          width: '100vw',
          height: '50vh',
        }}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2
          style={{
            margin: '1.5em 0 0.5em',
            fontWeight: '600',
            fontSize: '25px',
            fontFamily: 'Franklin Gothic Medium',
          }}
        >
          FOR MEN
        </h2>
        <p
          style={{
            marginBottom: '0.5em',
            fontSize: '15px',
          }}
        >
          Minimalist design specifically for men
        </p>
        <button
          style={{
            marginTop: '0.5em',
            border: 'none',
            background: 'grey',
            padding: '16px 3em',
            borderRadius: '25px',
          }}
        >
          See Details
        </button>
      </div>
    </>
  )
}

export default ForMen
