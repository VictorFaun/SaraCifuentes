import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';
import { Lightbox, LightboxModule } from 'ngx-lightbox';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ LightboxModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {

  year = new Date().getFullYear();
  
  constructor(private _lightbox: Lightbox) {

  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const header = document.getElementById('main-header');
    if (window.pageYOffset > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }


    if (window.innerWidth > 768) { // Verifica que el ancho sea mayor a 768px
      const image = document.getElementById('scrolling-image');
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollableHeight = document.body.scrollHeight - windowHeight;

      // Calcula el desplazamiento de la imagen basándote en la posición del scroll
      const scrollPercentage = scrollPosition / scrollableHeight;
      const imageMovement = scrollPercentage * 300; // Ajusta el valor según el efecto deseado

      if (image) {
        image.style.transform = `translateY(${0 - imageMovement}%)`; // Desplazamiento inverso
      }
    }

    if (window.innerWidth > 768) { // Verifica que el ancho sea mayor a 768px
      const image = document.getElementById('scrolling-image2');
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollableHeight = document.body.scrollHeight - windowHeight;

      // Calcula el desplazamiento de la imagen basándote en la posición del scroll
      const scrollPercentage = scrollPosition / scrollableHeight;
      const imageMovement = scrollPercentage * 380; // Ajusta el valor según el efecto deseado

      if (image) {
        image.style.transform = `translateY(${180 - imageMovement}%)`; // Desplazamiento inverso
      }
    }

    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    let valor = document.getElementById('valor-1')
    if (valor) {
      const rect = valor.getBoundingClientRect();
      const elementTop = rect.top + scrollTop;  // Obtener la posición absoluta del elemento
      const progress = (scrollTop - elementTop + windowHeight) / (windowHeight / 1.8); // Ajustar velocidad del movimiento

      if (progress >= 0 && progress <= 1) {
        // Ajusta el translateX para mover más rápido, por ejemplo de -100% a 0% en un intervalo más corto
        const translateX = (1 - progress) * -100;  // Mover de izq a derecha más rápidamente
        valor.style.transform = `translateX(${translateX}%)`;
      } else if (progress > 1) {
        valor.style.transform = 'translateX(0%)';  // Si ya está en su lugar
      } else {
        valor.style.transform = 'translateX(-100%)';  // Si aún no ha llegado al área visible
      }
    }


    valor = document.getElementById('valor-2')
    if (valor) {
      const rect = valor.getBoundingClientRect();
      const elementTop = rect.top + scrollTop;  // Obtener la posición absoluta del elemento
      const progress = (scrollTop - elementTop + windowHeight) / (windowHeight / 1.8); // Ajustar velocidad del movimiento

      if (progress >= 0 && progress <= 1) {
        // Ajusta el translateX para mover más rápido, por ejemplo de -100% a 0% en un intervalo más corto
        const translateX = (1 - progress) * -100;  // Mover de izq a derecha más rápidamente
        valor.style.transform = `translateX(${translateX}%)`;
      } else if (progress > 1) {
        valor.style.transform = 'translateX(0%)';  // Si ya está en su lugar
      } else {
        valor.style.transform = 'translateX(-100%)';  // Si aún no ha llegado al área visible
      }
    }


    valor = document.getElementById('valor-3')
    if (valor) {
      const rect = valor.getBoundingClientRect();
      const elementTop = rect.top + scrollTop;  // Obtener la posición absoluta del elemento
      const progress = (scrollTop - elementTop + windowHeight) / (windowHeight / 1.8); // Ajustar velocidad del movimiento

      if (progress >= 0 && progress <= 1) {
        // Ajusta el translateX para mover más rápido, por ejemplo de -100% a 0% en un intervalo más corto
        const translateX = (1 - progress) * -100;  // Mover de izq a derecha más rápidamente
        valor.style.transform = `translateX(${translateX}%)`;
      } else if (progress > 1) {
        valor.style.transform = 'translateX(0%)';  // Si ya está en su lugar
      } else {
        valor.style.transform = 'translateX(-100%)';  // Si aún no ha llegado al área visible
      }
    }


    valor = document.getElementById('valor-4')
    if (valor) {
      const rect = valor.getBoundingClientRect();
      const elementTop = rect.top + scrollTop;  // Obtener la posición absoluta del elemento
      const progress = (scrollTop - elementTop + windowHeight) / (windowHeight / 1.8); // Ajustar velocidad del movimiento

      if (progress >= 0 && progress <= 1) {
        // Ajusta el translateX para mover más rápido, por ejemplo de -100% a 0% en un intervalo más corto
        const translateX = (1 - progress) * -100;  // Mover de izq a derecha más rápidamente
        valor.style.transform = `translateX(${translateX}%)`;
      } else if (progress > 1) {
        valor.style.transform = 'translateX(0%)';  // Si ya está en su lugar
      } else {
        valor.style.transform = 'translateX(-100%)';  // Si aún no ha llegado al área visible
      }
    }

  }
  open(index: number): void {
    // open lightbox
    this._lightbox.open([{
      src: "assets/galeria/"+(index+1)+".jpeg",
      thumb: ""
    }

    ], 0,{
      disableScrolling:true,
      centerVertically:true
    });
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
