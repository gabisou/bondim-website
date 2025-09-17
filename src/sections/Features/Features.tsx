import { component$ } from '@builder.io/qwik';
import { FeatureBoard } from '~/components/FeatureBoard/FeatureBoard';
import feature1 from '../../assets/imgs/feature1.png';
import feature2 from '../../assets/imgs/feature2.png';
import feature3 from '../../assets/imgs/feature3.png';

import nuvem from '../../assets/imgs/nuvem.png';
import plantas from '../../assets/imgs/plantas.png';
import { SectionTitle } from '~/components/SectionElements/SectionTitle';

export default component$(() => {
  return (
    <main class="bg-[#00CCE3] relative overflow-hidden">
      <SectionTitle id="features" label="FEATURES" />
      {/* CONTAINER DAS NUVENS - fica atrás de tudo */}
      <div class="absolute inset-0 pointer-events-none z-0">
        {/* Nuvem esquerda entre topo e primeira feature */}
        <img
          src={nuvem}
          alt="nuvem esquerda"
          class="absolute left-0 top-[20px] -translate-x-1/2 opacity-75 "
        />

        {/* Nuvem direita entre segunda e terceira feature */}
        <img
          src={nuvem}
          alt="nuvem direita"
          class="absolute right-0 top-[300px] translate-x-1/2  scale-x-[-1] opacity-75 "
         
        />
      </div>

      {/* CONTAINER DAS FEATURES - acima das nuvens */}
      <div class="relative z-10 px-4 flex flex-col gap-12">
        <FeatureBoard>
          <div q:slot="image">
            <img src={feature1} width={300} height={200} />
          </div>
          <div q:slot="content">
            <h2 class="text-5xl font-bold mb-4">JORNADA</h2>
            <p class="text-2xl">
              Viaje com Borges por diferentes paisagens brasileiras, a bordo de seu bonde.
            </p>
          </div>
        </FeatureBoard>

        <FeatureBoard reverse>
          <div q:slot="image">
            <img src={feature2} width={300} height={200} />
          </div>
          <div q:slot="content">
            <h2 class="text-5xl font-bold mb-4">TRANSPORTE</h2>
            <p class="text-2xl">
              Resgate animais e transporte pessoas para a estação desejada
            </p>
          </div>
        </FeatureBoard>

        <FeatureBoard>
          <div q:slot="image">
            <img src={feature3} width={300} height={200} />
          </div>
          <div q:slot="content">
            <h2 class="text-5xl font-bold mb-4">GALERIA VIVA</h2>
            <p class="text-2xl">
              Aprenda mais sobre as paisagens, fauna e flora visitadas em sua jornada
            </p>
          </div>
        </FeatureBoard>
      </div>
      <img src={plantas} class="w-screen relative top-[20px] md:top-[30px] lg:top-[70px]" />


    </main>
  );
});
