import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function SpaceCardSkeleton() {
  return (
    <div className="bg-white border border-zinc-100 rounded-[2rem] p-4">
      <Skeleton height={200} borderRadius="1.5rem" className="mb-6" />
      <div className="px-2">
        <Skeleton width="70%" height={28} className="mb-2" />
        <Skeleton width="40%" height={16} className="mb-6" />
        <div className="pt-4 border-t border-zinc-50 flex justify-between">
          <Skeleton width="100px" height={12} />
          <Skeleton circle width={40} height={40} />
        </div>
      </div>
    </div>
  );
}