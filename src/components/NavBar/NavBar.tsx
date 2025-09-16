import { component$, Slot, useSignal } from '@builder.io/qwik';
import logo from '../../assets/imgs/logo.png';

interface NavbarProps {
  backgroundColor?: string;
}

export const Navbar = component$(({ backgroundColor = '#10ABCE' }: NavbarProps) => {
  const isOpen = useSignal(false);

  return (
    <nav
      class="w-full px-6 py-4 shadow-md overflow-hidden"
      style={{
        backgroundColor,
        boxShadow: 'inset 0 -19px 30.7px -6px rgba(206, 239, 255, 0.58)',
      }}
    >
      {/* Topo da navbar: logo e botão menu */}
      <div class="flex justify-between items-center w-full">
        <div class="flex items-center gap-6">
          <img src={logo} width={210} height={70} />

          {/* Menu desktop esquerdo */}
          <div class="hidden md:flex items-center gap-4">
            <Slot name="left-desktop" />
          </div>
        </div>

        {/* Botão menu mobile */}
        <button
          class="md:hidden p-2"
          onClick$={() => (isOpen.value = !isOpen.value)}
          aria-label="Abrir menu"
        >
          <div class="space-y-1">
            <div class="w-6 h-0.5 bg-white"></div>
            <div class="w-6 h-0.5 bg-white"></div>
            <div class="w-6 h-0.5 bg-white"></div>
          </div>
        </button>

        {/* Menu desktop direito */}
        <div class="hidden md:flex items-center gap-4">
          <Slot name="right-desktop" />
        </div>
      </div>

      {/* Menu mobile: visível quando aberto */}
      {isOpen.value && (
        <div class="md:hidden mt-4 flex flex-col gap-2">
          <Slot name="mobile" />
        </div>
      )}
    </nav>
  );
});
