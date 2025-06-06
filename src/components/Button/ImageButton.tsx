import { component$, PropFunction } from '@builder.io/qwik';

interface ImageButtonProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  onClick$?: PropFunction<() => void>;
  class?: string;
  style?: Record<string, string>;
}

export const ImageButton = component$(
  ({ src, alt, width, height, onClick$, class: className = '', style }: ImageButtonProps) => {
    return (
      <button
        onClick$={onClick$}
        class={`p-0 border-none bg-transparent cursor-pointer ${className}`}
        style={style}
        type="button"
      >
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          class="object-contain w-full h-full"
        />
      </button>
    );
  }
);
