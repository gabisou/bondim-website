import { component$, isDev, useSignal, $, type QRL } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';

import './global.css';
import { NavButton } from './components/Button/NavButton';
import { DemoButton } from './components/Button/DemoButton';
import { Dropdown } from './components/Dropdown/Dropdown';
import { Navbar } from './components/NavBar/NavBar';

import brazilFlag from './assets/icons/brazil.png';
import usFlag from './assets/icons/united-states.png';


const options = [
  { label: 'PORTUGUÊS (BR)', value: 'pt-br', imageSrc: brazilFlag },
  { label: 'ENGLISH (US)', value: 'en-us', imageSrc: usFlag },
];


export default component$(() => {
  
const isOpen = useSignal(false);

  const scrollToSectionAndCloseMenu$ = $((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    isOpen.value = false;
  });
 return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        {!isDev && (
          <link
            rel="manifest"
            href={`${import.meta.env.BASE_URL}manifest.json`}
          />
        )}
        <RouterHead />
      </head>
	   <body lang="en" class="bg-white text-black font-sans">
        <Navbar
          backgroundColor="#10ABCE"
          isOpen={isOpen.value}
          setIsOpen$={$((v) => (isOpen.value = v))}
        >
          {/* LEFT MENU (Desktop) */}
          <div q:slot="left-desktop" class="hidden md:flex items-center gap-4">
            <NavButton label="BONDIM" onClick$={() => scrollToSectionAndCloseMenu$('bondim')} />
            <NavButton label="FEATURES" onClick$={() => scrollToSectionAndCloseMenu$('features')} />
            <NavButton label="MEDIA" onClick$={() => scrollToSectionAndCloseMenu$('media')} />
            <DemoButton label="DEMO" onClick$={() => scrollToSectionAndCloseMenu$('demo')} />
          </div>

          {/* RIGHT MENU (Desktop) */}
          <div q:slot="right-desktop" class="hidden md:flex items-center gap-4">
            <Dropdown options={options} selectedValue='pt-br'/>
          </div>

          {/* MENU MOBILE (todos empilhados) */}
          <div q:slot="mobile" class="flex flex-col gap-2 md:hidden">
            <NavButton label="BONDIM" onClick$={() => scrollToSectionAndCloseMenu$('bondim')} />
            <NavButton label="FEATURES" onClick$={() => scrollToSectionAndCloseMenu$('features')} />
            <NavButton label="MEDIA" onClick$={() => scrollToSectionAndCloseMenu$('media')} />
            <DemoButton label="DEMO" onClick$={() => scrollToSectionAndCloseMenu$('demo')} />
            <Dropdown options={options} selectedValue='pt-br'/>
          </div>
        </Navbar>

        <RouterOutlet />
      </body>
    </QwikCityProvider>
	 );
});
