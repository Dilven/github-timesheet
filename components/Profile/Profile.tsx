import { PersonIcon } from "@modulz/radix-icons"
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ProfileMenuItem } from "./ProfileMenuItem";

export const Profile = () => {
    return (
        <DropdownMenu.Root>
        <DropdownMenu.Trigger className="w-10 h-10 rounded-full text-white bg-blue-500 flex justify-center items-center transition duration-300 focus:outline-none shadow">
            <PersonIcon />
        </DropdownMenu.Trigger>
    
        <DropdownMenu.Content>
          <div className="rounded-sm bg-white dark:bg-slate-700 shadow-sm border-2 border-indigo-400/50">
            <DropdownMenu.Label />
            <ProfileMenuItem>
                Login
            </ProfileMenuItem>
            <ProfileMenuItem>
                Logout
            </ProfileMenuItem>
          </div>
          <DropdownMenu.Arrow />
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    )
}