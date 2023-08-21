import { format } from 'date-fns';
import { ImageResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const [AritaBuriBoldFont, AritaBuriFont] = await Promise.all([
    fetch(new URL('../../assets/AritaBuri-Bold.ttf', import.meta.url)).then(
      (res) => res.arrayBuffer(),
    ),
    fetch(new URL('../../assets/AritaBuri-Medium.ttf', import.meta.url)).then(
      (res) => res.arrayBuffer(),
    ),
  ]);

  const title = searchParams.get('title') ?? '다크모드, 더 프로처럼 활용하기';
  const date = searchParams.get('date');

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
          padding: '130px 100px',
          color: '#f2f2f2',
          backgroundImage:
            'linear-gradient(to bottom right, #000000, #1a1a1a90), url(https://user-images.githubusercontent.com/65283190/262063367-a7407bba-09a0-420a-ae45-2ed3e6f3e3b8.png)',
        }}
      >
        <div
          style={{
            width: 150,
            height: 10,
            backgroundColor: '#f2f2f2',
          }}
        />
        <div
          style={{
            marginTop: 25,
            width: 700,
            fontSize: 50,
            lineHeight: 1.4,
            fontWeight: 700,
            wordBreak: 'keep-all',
          }}
        >
          {title ?? 'May 22. 2023'}
        </div>
        {date && (
          <div style={{ marginTop: 20, fontSize: 30, color: '#a0a0a0' }}>
            {format(new Date(date), 'MMMM dd. yyyy')}
          </div>
        )}
      </div>
    ),
    {
      width: 1200,
      height: 630,
      emoji: 'twemoji',
      fonts: [
        {
          name: 'AritaBuri',
          data: AritaBuriBoldFont,
          style: 'normal',
          weight: 700,
        },
        {
          name: 'AritaBuri',
          data: AritaBuriFont,
          style: 'normal',
          weight: 400,
        },
      ],
    },
  );
}
