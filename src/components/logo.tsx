import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('relative', className)}>
    <Image src="/logo.svg" alt={` Logo`} width={80} height={80} priority style={{ objectFit: 'contain' }} />
    </div>
  );
}
