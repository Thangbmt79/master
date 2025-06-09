import { SVGProps } from 'react';
type Props = {} & SVGProps<SVGSVGElement>;

export default function EditIcon(props: Props) {
    return (
        <svg width={14} height={14} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M9.262 14.098H14.5" stroke="#fff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
            <path
                clipRule="evenodd"
                d="M8.563 2.074a1.62 1.62 0 0 1 2.25-.219l1.253.973c.75.454.984 1.419.52 2.155-.025.04-6.888 8.625-6.888 8.625a1.23 1.23 0 0 1-.946.457l-2.628.033-.593-2.507c-.083-.352 0-.723.229-1.007z"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="m7.293 3.667 3.938 3.024"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
