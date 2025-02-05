import { useContext, useState } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as Dialog from '@radix-ui/react-dialog'
import { CaretDown, MagnifyingGlass, PlusCircle, SignOut } from 'phosphor-react'

import { authContext } from '@/contexts/AuthContext'

import {
  AccountMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  HeaderContainer,
  SearchInputContainer,
  DialogOverlay,
  DialogContent,
} from './styles'
import { Button } from '../Button'

export function Header() {
  const [openDialog, setOpenDialog] = useState(false)

  const { logout } = useContext(authContext)

  return (
    <HeaderContainer>
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
              <span>john.doe@example.com</span>
            </div>

            <CaretDown size={24} />
          </AccountMenu>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <PlusCircle size={24} />
              <p>Adicionar Conta</p>
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setOpenDialog(true)}>
              <SignOut size={24} />
              <p>Sair</p>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>

      <Dialog.Root open={openDialog} onOpenChange={setOpenDialog}>
        <Dialog.Portal>
          <DialogOverlay />

          <DialogContent>
            <Dialog.Title>Tem certeza que deseja sair?</Dialog.Title>

            <div>
              <Button variant="destructive" onClick={() => logout()}>
                Sair
              </Button>
              <Button variant="ghost" onClick={() => setOpenDialog(false)}>
                Cancelar
              </Button>
            </div>
          </DialogContent>
        </Dialog.Portal>
      </Dialog.Root>
    </HeaderContainer>
  )
}
