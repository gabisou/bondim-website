import {
  component$,
  useSignal,
  $,
  useStylesScoped$,
} from '@builder.io/qwik';

interface Option {
  label: string;
  value: string;
  imageSrc?: string;
}

interface DropdownProps {
  options: Option[];
  selectedValue?: string;
  onChange$?: (value: string) => void;
}

export const Dropdown = component$(({ options, selectedValue, onChange$ }: DropdownProps) => {
  useStylesScoped$(`
    .dropdown-item:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  `);

  const isOpen = useSignal(false);
  const selected = useSignal(selectedValue || options[0]?.value);
  const dropdownStyle = useSignal<{ top: string; left: string; width: string }>({
    top: '0px',
    left: '0px',
    width: 'auto',
  });
  const buttonRef = useSignal<HTMLElement>();

  const toggleOpen = $(() => {
    isOpen.value = !isOpen.value;

    if (isOpen.value && buttonRef.value) {
      const rect = buttonRef.value.getBoundingClientRect();
      dropdownStyle.value = {
        top: `${rect.bottom}px`,
        left: `${rect.left}px`,
        width: `${rect.width}px`,
      };
    }
  });

  const handleSelect = $((value: string) => {
    selected.value = value;
    // eslint-disable-next-line qwik/valid-lexical-scope
    onChange$?.(value);
    isOpen.value = false;
  });

  const selectedOption = options.find((opt) => opt.value === selected.value);

  return (
    <>
      <button
        ref={buttonRef}
        class="flex items-center justify-between gap-2 px-4 py-2 rounded hover:opacity-80 transition font-bold text-white text-2xl bg-transparent w-full max-w-xs"
        onClick$={toggleOpen}
      >
        <span>{selectedOption?.label}</span>
        {selectedOption?.imageSrc && (
          <img src={selectedOption.imageSrc} alt="" class="w-16 h-16"  width={64} height={64}/>
        )}
      </button>

      {isOpen.value && (
        <ul
          class="absolute z-50 bg-[#10ABCE] text-white rounded shadow-md p-2"
          style={{
            position: 'absolute',
            top: dropdownStyle.value.top,
            left: dropdownStyle.value.left,
            width: dropdownStyle.value.width,
          }}
        >
          {options.map((option) => (
            <li
              key={option.value}
              class="dropdown-item flex items-center justify-between cursor-pointer p-2 rounded transition"
              onClick$={() => handleSelect(option.value)}
            >
              <span>{option.label}</span>
              {option.imageSrc && (
                <img src={option.imageSrc} alt="" class="w-16 h-16" width={64}  height={64}/>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
});