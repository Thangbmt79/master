import { SVGProps } from 'react';
type Props = {} & SVGProps<SVGSVGElement>;

export default function PackingSpaceIcon(props: Props) {
    return (
        <svg width={21} height={20} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M13.02 1.667H8.77c-1.5 0-1.833.75-2.025 1.675l-.683 3.266h9.666l-.683-3.266c-.192-.925-.525-1.675-2.025-1.675"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M16.928 11.933c.067.709-.5 1.317-1.225 1.317H14.57c-.65 0-.742-.275-.858-.625l-.125-.358c-.167-.492-.275-.825-1.15-.825H9.345c-.867 0-1 .375-1.15.825l-.125.358c-.117.342-.208.625-.858.625H6.078a1.214 1.214 0 0 1-1.225-1.317l.342-3.683c.083-.908.258-1.65 1.842-1.65h7.708c1.583 0 1.758.742 1.842 1.65zM6.062 4.792h-.609m10.884 0h-.609M7.27 9.025h1.808m3.634 0h1.808m-3.625 5.142V15m0 2.5v.833M3.395 15l-.833 3.333M18.395 15l.833 3.333"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
