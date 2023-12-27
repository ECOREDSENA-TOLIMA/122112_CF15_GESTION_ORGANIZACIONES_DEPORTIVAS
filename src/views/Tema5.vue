<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span(style="color: black") 5
      h1 Ética en el manejo de la información contable
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La ética es una forma de regular las actividades que desarrolla el ser humano y, por supuesto, la labor profesional. En el caso específico de la contabilidad, existe un Código de Ética Internacional, su sigla en inglés es IFAC, que traduce Federación Internacional de Contadores, donde se tienen unas normas y principios para mantener su ejercicio en los más altos estándares de calidad.
    .row.bg-c6
      .col-12
        .px-5
          p.mb-5(data-aos="fade-right") En Colombia, la Ley 43 de 1990, en su Capítulo IV, Título I, establece los principios que constituyen el fundamento esencial para el desarrollo de normas sobre ética de la contaduría. A continuación, se invita a revisar el siguiente recurso.
          .row.justify-content-center
            .col-lg-10(data-aos="fade-left")
              ImagenInfografica.color-secundario.mb-5
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema5/img2.svg', alt='')
                .tarjeta.color-acento-botones.p-3(x="42.3%" y="23.5%" numero="+")
                  p #[b Integridad]
                  p.mb-0 Rectitud, probidad, honestidad, dignidad y sinceridad.
                .tarjeta.color-acento-botones.p-3(x="54.7%" y="23.5%" numero="+")
                  p #[b Objetividad]
                  p.mb-0 Imparcialidad.
                .tarjeta.color-acento-botones.p-3(x="64.5%" y="33.3%" numero="+")
                  p #[b Independencia]
                  p.mb-0 Criterio.
                .tarjeta.color-acento-botones.p-3(x="68.3%" y="49%" numero="+")
                  p #[b Responsabilidad]
                  p.mb-0 Cumplimiento.
                .tarjeta.color-acento-botones.p-3(x="64.5%" y="64.5%" numero="+")
                  p #[b Confidencialidad]
                  p.mb-0 Leal y autenticidad, secreto profesional.
                .tarjeta.color-acento-botones.p-3(x="54.7%" y="73.8%" numero="+")
                  p #[b Observaciones de las disposiciones normativas]
                  p.mb-0 Legalidad.
                .tarjeta.color-acento-botones.p-3(x="42.3%" y="73.8%" numero="+")
                  p #[b Competencia y actualización profesional]
                  p.mb-0 Idoneidad.
                .tarjeta.color-acento-botones.p-3(x="32.9%" y="64.5%" numero="+")
                  p #[b Difusión y colaboración]
                  p.mb-0 Desarrollo, superación y dignificación de la profesión.
                .tarjeta.color-acento-botones.p-3(x="29.2%" y="49%" numero="+")
                  p #[b Respeto entre colegas]
                  p.mb-0 Sinceridad, buena fe y lealtad hacia los colegas.
                .tarjeta.color-acento-botones.p-3(x="33%" y="33.3%" numero="+")
                  p #[b Conducta ética]
                  p.mb-0 Función social enmarcada en la moral universal.


</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
