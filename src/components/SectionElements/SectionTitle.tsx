import { component$ } from '@builder.io/qwik';

interface SectionTitleProps  {
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
