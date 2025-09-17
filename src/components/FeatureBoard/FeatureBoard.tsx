import { component$, Slot } from '@builder.io/qwik';

interface FeatureBoardProps {
  reverse?: boolean;
}

export const FeatureBoard = component$<FeatureBoardProps>(({ reverse }) => {
  return (
    <section class="bg-[#30461D] rounded-[10px] text-white p-[1em] mx-0 my-[1em] md:mx-[1em]">
      <div
        class={{
          "border-4 border-solid border-white rounded-[10px] p-[1em] flex flex-col gap-4 items-center md:flex-row md:items-start": true,
          "md:flex-row-reverse md:justify-between": reverse, // aplica só se reverse
          "md:justify-start": !reverse, // normal
        }}
      >
        <div class="w-full flex justify-center md:w-auto md:justify-start">
          <Slot name="image" />
        </div>
        <div class="w-full text-center md:w-auto md:text-left">
          <Slot name="content" />
        </div>
      </div>
    </section>
  );
});
