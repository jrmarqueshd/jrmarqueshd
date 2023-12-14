import { BadgeProps } from './interfaces';

export default function Badge({ alt, src }: BadgeProps) {
	return <img className="rounded" alt={alt} src={src} />;
}
