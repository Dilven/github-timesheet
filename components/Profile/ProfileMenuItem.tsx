import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

type Props = Readonly<{
    children: React.ReactNode
}>
export const ProfileMenuItem = ({ children }: Props) => {
    return (
        <DropdownMenu.Item className="subpixel-antialiased m-2">
            {children}
        </DropdownMenu.Item>
    )
}