import html2canvas from 'html2canvas';
import { RefObject } from 'react';
import { saveAs } from 'file-saver';

export async function generateImage(
  name: string,
  containerRef: RefObject<HTMLDivElement>,
) {
  const element = containerRef.current!;
  if (!element) return;
  const canvas = await html2canvas(element);

  const blob = await new Promise<Blob>((resolve) => {
    canvas.toBlob((blob) => {
      resolve(blob!);
    }, 'image/png');
  });
  saveAs(blob, `qrcode-business.png`);
}
