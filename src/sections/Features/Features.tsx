import { component$ } from '@builder.io/qwik';
import { FeatureBoard } from '~/components/FeatureBoard/FeatureBoard';
import feature1 from '../../assets/imgs/feature1.png';
import feature2 from '../../assets/imgs/feature2.png';
import feature3 from '../../assets/imgs/feature3.png';
//style={{ backgroundColor: '#00CCE3', padding: '0 2rem' }}
export default component$(() => {
  return (
    <main class="bg-[#00CCE3]">
      <h1 class="text-white font-bold uppercase text-7xl text-center py-[10px]">FEATURES</h1>

      <div >

        <div>
          <FeatureBoard >
          <div q:slot="image">
            <img src={feature1} width={300} height={200}/>
            
          </div>
            <div q:slot="content">
              <h2 class="text-5xl font-bold mb-4">JORNADA</h2>
              <p class="text-2xl">
                Viaje com Borges por diferentes paisagens brasileiras, a bordo de seu bonde.
              </p>
            </div>
          </FeatureBoard>
          <FeatureBoard >
          <div q:slot="image">
            <img src={feature2} width={300} height={200}/>
            
          </div>
            <div q:slot="content">
              <h2 class="text-5xl font-bold mb-4">TRANSPORTE</h2>
              <p class="text-2xl">
                Resgate animais e transporte pessoas para a estação desejada
              </p>
            </div>
          </FeatureBoard>
          <FeatureBoard >
          <div q:slot="image">
            <img src={feature3} width={300} height={200}/>
            
          </div>
            <div q:slot="content">
              <h2 class="text-5xl font-bold mb-4">GALERIA VIVA</h2>
              <p class="text-2xl">
                Aprenda mais sobre as paisagens, fauna e flora visitadas em sua jornada
              </p>
            </div>
          </FeatureBoard>
        </div>
      </div>
    </main>
  );
});
