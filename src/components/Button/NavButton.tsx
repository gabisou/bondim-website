import { component$, JSX, PropFunction } from '@builder.io/qwik';

interface NavButtonProps {
  label: string;
  color?: string;           // ex: "#fff"
  backgroundColor?: string; // ex: "#1f1f1f"
  icon?: JSX.Element;
  iconPosition?: 'left' | 'right';
  onClick$?: PropFunction<() => void>;
}

export const NavButton = component$(
  ({ label, color = '#000', backgroundColor = 'transparent', icon, iconPosition = 'left', onClick$ }: NavButtonProps) => {
    const direction = iconPosition === 'right' ? 'flex-row-reverse' : 'flex-row';

    return (
      <button
        onClick$={onClick$}
        class={`flex ${direction} items-center gap-2 px-4 py-2 rounded hover:opacity-80 transition`}
        style={{
          color,
          backgroundColor,
        }}
      >
        {icon && <span class="w-5 h-5">{icon}</span>}
        <span>{label}</span>
      </button>
    );
  }
);