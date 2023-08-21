import { ImageResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const AritaBuriFont = await fetch(
    new URL('../../assets/AritaBuri-Bold.otf', import.meta.url),
  ).then((res) => res.arrayBuffer());

  const title = searchParams.get('title') ?? 'bepyan';
  const subtitle = searchParams.get('date');

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          width: '100%',
          height: '100%',
          fontFamily: 'AritaBuri',
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
            width: 700,
            fontSize: 33,
            lineHeight: 1.4,
            wordBreak: 'keep-all',
          }}
        >
          {title ?? 'May 22. 2023'}
        </div>
        {subtitle && (
          <div style={{ marginTop: 20, fontSize: 20, color: '#a0a0a0' }}>
            {subtitle}
          </div>
        )}
      </div>
    ),
    {
      width: 800,
      height: 420,
      fonts: [
        {
          name: 'AritaBuri',
          data: AritaBuriFont,
        },
      ],
    },
  );
}
