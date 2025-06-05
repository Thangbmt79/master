import { SVGProps } from 'react';
type Props = {} & SVGProps<SVGSVGElement>;

export default function NavigateNextIcon(props: Props) {
    return (
        <svg width={15} height={14} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M5.504 11.393a.44.44 0 0 1-.042-.57l.042-.049L9.278 7 5.504 3.226a.44.44 0 0 1-.042-.57l.042-.049a.44.44 0 0 1 .57-.042l.05.042 4.083 4.084a.44.44 0 0 1 .042.57l-.043.048-4.083 4.084a.437.437 0 0 1-.619 0Z"
                fill="#B3B3B3"
                stroke="#B3B3B3"
                strokeWidth={0.4}
            />
        </svg>
    );
}
