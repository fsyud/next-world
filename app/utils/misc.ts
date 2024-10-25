import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * A handy utility that makes constructing class names easier.
 * It also merges tailwind classes.
 */
export function cn(...inputs: Array<ClassValue>) {
	return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
	return new Date(date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
}

/**
 * @returns domain URL (without a ending slash, e.g. `https://lukasalvarez.com`)
 */
export function getDomainUrl(request: Request) {
	const host = request.headers.get('X-Forwarded-Host') ?? request.headers.get('host');
	if (!host) {
		throw new Error('Could not determine domain URL.');
	}
	const protocol = host.includes('localhost') ? 'http' : 'https';
	return `${protocol}://${host}`;
}

function getRequiredEnvVarFromObj(
	obj: Record<string, string | undefined>,
	key: string,
	devValue: string = `${key}-dev-value`,
) {
	let value = devValue;
	const envVal = obj[key];
	if (envVal) {
		value = envVal;
	} else if (obj.NODE_ENV === 'production') {
		throw new Error(`${key} is a required env variable`);
	}
	return value;
}

function getRequiredServerEnvVar(key: string, devValue?: string) {
	return getRequiredEnvVarFromObj(process.env, key, devValue);
}

export { getRequiredServerEnvVar };
