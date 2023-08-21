import { ImageResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const title = searchParams.get('title') ?? 'bepyan';
  const subtitle = searchParams.get('subtitle');

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          width: '100%',
          height: '100%',
          padding: '80px 60px',
          color: '#f2f2f2',
          backgroundColor: '#1a1a1a',
        }}
      >
        <div
          style={{
            width: 100,
            height: 6,
            backgroundColor: '#f2f2f2',
          }}
        />
        <div
          style={{
            marginTop: 25,
            width: 500,
            fontSize: 33,
            lineHeight: 1.4,
            wordBreak: 'keep-all',
          }}
        >
          {title}
        </div>
        <div style={{ marginTop: 20, fontSize: 20, color: '#a0a0a0' }}>
          {subtitle}
        </div>
      </div>
    ),
    {
      width: 800,
      height: 420,
    },
  );
}
