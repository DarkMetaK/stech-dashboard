import { CaretDown, MagnifyingGlass, SignOut, User } from 'phosphor-react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import {
  AccountMenu,
  DropdownMenuItem,
  DashboardContainer,
  DropdownMenuContent,
  Header,
  SearchInputContainer,
  DashboardContent,
} from './styles'

export function Dashboard() {
  return (
    <DashboardContainer>
      <Header>
        <SearchInputContainer>
          <MagnifyingGlass size={24} />
          <input type="text" placeholder="Pesquisar..." />
        </SearchInputContainer>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <AccountMenu>
              <img
                src="https://avatars.githubusercontent.com/u/77026784?v=4"
                alt=""
              />

              <div>
                <strong>John Doe</strong>
                <span>john.doe@examplesdfsdfsdfsdfsdfsdfds.com</span>
              </div>

              <CaretDown size={24} />
            </AccountMenu>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onSelect={() => console.log('Profile')}>
                <User size={24} />
                <p>Perfil</p>
              </DropdownMenuItem>

              <DropdownMenuItem onSelect={() => console.log('Logout')}>
                <SignOut size={24} />
                <p>Sair</p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </Header>

      <DashboardContent>
        <h1>Dashboard</h1>
      </DashboardContent>
    </DashboardContainer>
  )
}
