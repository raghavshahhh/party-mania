import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Party Mania — We Decorate, You Celebrate!'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #000000, #0a0a0a, #1a1a1a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.15), transparent 70%)',
          }}
        />
        <div
          style={{
            fontSize: 48,
            marginBottom: '16px',
          }}
        >
          🎉
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            background: 'linear-gradient(135deg, #F5E6B8, #D4AF37, #B8960C)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          PARTY MANIA
        </div>
        <div
          style={{
            fontSize: 32,
            color: 'rgba(255,255,255,0.7)',
            textAlign: 'center',
          }}
        >
          We Decorate, You Celebrate!
        </div>
        <div
          style={{
            fontSize: 20,
            color: 'rgba(212,175,55,0.6)',
            marginTop: '24px',
          }}
        >
          Premium Event Decoration — Delhi NCR
        </div>
      </div>
    ),
    { ...size }
  )
}
