import { component$, isDev } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';

import './global.css';
import { NavButton } from './components/Button/NavButton';
import { Navbar } from './components/NavBar/NavBar';

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
      <body lang="en" class="bg-white text-black font-sans">
        <Navbar backgroundColor="#FFE02A">
  {/* LEFT MENU (Desktop) */}
  <div q:slot="left-desktop" class="hidden md:flex items-center gap-4">
    <NavButton label="BONDIM" />
    <NavButton label="FEATURES" />
    <NavButton label="MEDIA" />
    <NavButton label="DEMO" />
  </div>

  {/* RIGHT MENU (Desktop) */}
  <div q:slot="right-desktop" class="hidden md:flex items-center gap-4">
    <NavButton label="PORTUGUÊS (BR)" />
  </div>

  {/* MENU MOBILE (todos empilhados) */}
  <div q:slot="mobile" class="flex flex-col gap-2 md:hidden">
    <NavButton label="BONDIM" />
    <NavButton label="FEATURES" />
    <NavButton label="MEDIA" />
    <NavButton label="DEMO" />
    <NavButton label="PORTUGUÊS (BR)" />
  </div>
</Navbar>

        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
