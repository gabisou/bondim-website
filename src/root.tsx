import { component$, isDev } from '@builder.io/qwik';
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
      <body lang="en" class="bg-white text-white font-sans">
        <Navbar backgroundColor="#10ABCE">
  {/* LEFT MENU (Desktop) */}
  <div q:slot="left-desktop" class="hidden md:flex items-center gap-4">
    <NavButton label="FEATURES" />
    <NavButton label="MEDIA" />
     <DemoButton label="DEMO" />
  </div>

  {/* RIGHT MENU (Desktop) */}
  <div q:slot="right-desktop" class="hidden md:flex items-center gap-4">
    <Dropdown 
    options={options} 
    onChange$={(val) => console.log('Dropdown selecionado:', val)} 
  />
  </div>

  {/* MENU MOBILE (todos empilhados) */}
  <div q:slot="mobile" class="flex flex-col gap-2 md:hidden">
    <NavButton label="FEATURES" />
    <NavButton label="MEDIA" />
     <div>
      <DemoButton label="DEMO" />
      </div>
    <Dropdown 
    options={options} 
    onChange$={(val) => console.log('Dropdown selecionado:', val)} 
  />
  </div>
</Navbar>

        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
