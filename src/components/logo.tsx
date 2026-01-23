import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('relative', className)}>
      <Image
        src="/image/AdtimeLogo.svg"
        alt="SignCraft Logo"
        fill
        className="object-contain"
      />
    </div>
  );
}
