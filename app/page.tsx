import { ClipGrid } from '@/components/ClipGrid/ClipGrid';
import { allVideos } from '@/lib/video';

export default function Home() {
  return (
    <div>
      <ClipGrid clips={allVideos} />
    </div>
  );
}
