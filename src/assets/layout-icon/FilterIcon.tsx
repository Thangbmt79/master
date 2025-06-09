import { SVGProps } from 'react';
type Props = {} & SVGProps<SVGSVGElement>;

export default function FilterIcon(props: Props) {
    return (
        <svg width={22} height={22} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.236 11.205A2 2 0 0 1 11 12.777v6.676l2-.703v-5.973a2 2 0 0 1 .764-1.572l5.854-4.6A1 1 0 0 0 20 5.82V4.277H4V5.82a1 1 0 0 0 .382.787zm10.618-3.027L15 12.778v6.68a1 1 0 0 1-.668.943l-4 1.408A1 1 0 0 1 9 20.865v-8.088L3.147 8.178A3 3 0 0 1 2 5.82V4.277a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2V5.82a3 3 0 0 1-1.146 2.36"
                fill="#B3B3B3"
            />
        </svg>
    );
}
