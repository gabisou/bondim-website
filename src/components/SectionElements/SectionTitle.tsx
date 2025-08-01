import { component$, JSX } from '@builder.io/qwik';

interface SectionTitleProps extends JSX.HTMLAttributes<HTMLHeadingElement> {
  label: string;
  id?: string;
}

export const SectionTitle = component$(({ label, id, ...rest }: SectionTitleProps) => {
  return (
    <h1
      id={id}
      class="text-white font-bold uppercase text-7xl text-center py-[10px] relative z-20"
      {...rest}
    >
      {label}
    </h1>
  );
});
