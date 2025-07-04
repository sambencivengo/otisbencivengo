import { ClassValue } from 'clsx';
import { Loader2 } from 'lucide-react';
import { cn } from '~/lib/utils';

export function Spinner({ className }: { className?: ClassValue }) {
  return <Loader2 size={50} className={cn('animate-spin', className)} />;
}
