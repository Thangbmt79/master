import { SVGProps } from 'react';
type Props = {} & SVGProps<SVGSVGElement>;

export default function CarCheckInOrCheckOutIcon(props: Props) {
    return (
        <svg width={21} height={20} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M6.22 4.816c2.309.142 4.617 1.15 6.442 3 1.808 1.834 2.8 4.167 2.95 6.5" fill="#3C424C" />
            <path
                d="M6.22 4.816c2.309.142 4.617 1.15 6.442 3 1.808 1.834 2.8 4.167 2.95 6.5"
                stroke="#6F767E"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="m16.562 14.858-1.025.25-10.4 2.542c-1.4.342-2.625-.908-2.275-2.325l.733-3 .05-.192.642-2.608.058-.25L5.428 4.9l.267-1.067c.25-1.025 1.242-1.683 2.258-1.516a12.12 12.12 0 0 1 6.725 3.458c1.867 1.883 2.992 4.258 3.4 6.783a2.05 2.05 0 0 1-1.516 2.3"
                fill="#3C424C"
                stroke="#6F767E"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M10.278 12.192c.737 0 1.334-.605 1.334-1.35s-.597-1.35-1.334-1.35c-.736 0-1.333.604-1.333 1.35 0 .745.597 1.35 1.333 1.35m-4.933-.508a1.68 1.68 0 0 1-1.7.433l.833-3.4c.317.075.617.225.867.475a1.77 1.77 0 0 1 0 2.492"
                fill="#3C424C"
                stroke="#6F767E"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6.395 16.433c-.125-.483 0-1.016.367-1.391a1.41 1.41 0 0 1 2.017 0c.183.183.308.408.366.65"
                fill="#3C424C"
            />
            <path
                d="M6.395 16.433c-.125-.483 0-1.016.367-1.391a1.41 1.41 0 0 1 2.017 0c.183.183.308.408.366.65"
                stroke="#6F767E"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
