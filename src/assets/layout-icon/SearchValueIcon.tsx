import { SVGProps } from 'react';
type Props = {} & SVGProps<SVGSVGElement>;

export default function SearchValueIcon(props: Props) {
    return (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 11a7 7 0 1 1-14 0 7 7 0 0 1 14 0m.032 5.618a9 9 0 1 0-1.414 1.414l2.675 2.675a1 1 0 0 0 1.414-1.414z"
                fill="#B3B3B3"
            />
        </svg>
    );
}
