import { component$, Slot, type QRL } from '@builder.io/qwik';
import logo from '../../assets/imgs/logo.png';

interface NavbarProps {
  backgroundColor?: string;
  isOpen: boolean;
  setIsOpen$: QRL<(value: boolean) => void>;
}

export const Navbar = component$(({ backgroundColor = '#fff', isOpen, setIsOpen$ }: NavbarProps) => {
  return (
    <nav
      class="w-full px-6 py-4 shadow-md"
      style={{ backgroundColor }}
    >
      {/* Topo da navbar: logo e botão menu */}
      <div class="flex justify-between items-center">
        <img src={logo} width={210} height={70}/>

        <button
          class="md:hidden p-2"
          onClick$={() => setIsOpen$(!isOpen)}
          aria-label="Abrir menu"
        >
          <div class="space-y-1">
            <div class="w-6 h-0.5 bg-black"></div>
            <div class="w-6 h-0.5 bg-black"></div>
            <div class="w-6 h-0.5 bg-black"></div>
          </div>
        </button>

        {/* Menu desktop */}
        <div class="hidden md:flex items-center gap-4">
          <Slot name="left-desktop" />
          <Slot name="right-desktop" />
        </div>
      </div>

      {/* Menu mobile: visível quando aberto */}
      {isOpen && (
        <div class="md:hidden mt-4 flex flex-col gap-2">
          <Slot name="mobile" />
        </div>
      )}
    </nav>
  );
});