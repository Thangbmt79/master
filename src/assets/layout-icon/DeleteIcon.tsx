import { SVGProps } from 'react';
type Props = {} & SVGProps<SVGSVGElement>;

export default function DeleteIcon(props: Props) {
    return (
        <svg width={14} height={14} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M12.986 6.22s-.381 4.734-.603 6.727c-.105.952-.693 1.51-1.657 1.528a140 140 0 0 1-5.501-.004c-.927-.019-1.506-.584-1.609-1.519-.223-2.011-.602-6.731-.602-6.731m10.944-2.269H2.042m9.62 0c-.552 0-1.027-.39-1.135-.93l-.17-.855a.9.9 0 0 0-.87-.667H6.512a.9.9 0 0 0-.869.667l-.17.854a1.16 1.16 0 0 1-1.135.93"
                stroke="#E01B00"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
