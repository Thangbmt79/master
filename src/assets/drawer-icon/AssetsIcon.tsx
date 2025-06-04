import { SVGProps } from 'react';
type Props = {} & SVGProps<SVGSVGElement>;

export default function AssetsIcon(props: Props) {
    return (
        <svg width={21} height={20} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M4.562 5h11.667M4.562 15h11.667M4.562 10h11.667"
                stroke="#6F767E"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
