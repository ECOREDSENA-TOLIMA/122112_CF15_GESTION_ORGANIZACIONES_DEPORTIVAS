<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span(style="color: black") 3
      h1 Indicadores
    .row.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img1.png', style="width: auto" ,alt='').m-auto
      .col-lg-7(data-aos="fade-left")
        p.mb-0 Un indicador es un instrumento de información utilizado para dar información sobre una determinada condición, logro o resultado. Es la expresión cuantitativa del comportamiento y el desempeño del proceso, el cual, al ser comparado con un punto de referencia, puede ayudar a identificar alguna desviación, sobre la cual se podrán tomar los correctivos necesarios. A continuación, se presentan los tipos de indicadores, su proceso de formulación, las características esenciales para su desarrollo e indicadores financieros.
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")(data-aos="fade-right")
      .row.justify-content-center(titulo="Tipos de Indicadores")
        .col-lg-5.mb-4.mb-lg-0
          p Los indicadores y su uso dependen del momento y tipo de proyecto o propuesta que se va a aplicar; los principales tipos de indicadores que se utilizan son:
        .col-lg-6
          figure
            img(src='@/assets/curso/tema3/img1.svg', style="width: auto" ,alt='').m-auto
      .row.justify-content-center(titulo="Formulación de indicadores")
        .col-lg-5.mb-4.mb-lg-0
          p Para elaborar un indicador, se deben tener en cuenta los siguientes aspectos:
        .col-lg-6
          figure
            img(src='@/assets/curso/tema3/img2.svg', style="width: auto" ,alt='').m-auto
      .row.justify-content-center(titulo="Características para la formulación de indicadores")
        .col-lg-5.mb-4.mb-lg-0
          p Para elaborar un indicador, se deben tener en cuenta los siguientes aspectos:
        .col-lg-6
          figure
            img(src='@/assets/curso/tema3/img3.svg', style="width: auto" ,alt='').m-auto
      .row.justify-content-center(titulo="Indicadores financieros")
        .col-lg-5.mb-4.mb-lg-0
          p Son herramientas que permiten realizar el análisis financiero de la empresa en un periodo determinado; sirven como parámetros de comparación y de planificación, ya que permiten medir qué tan cerca o qué tan lejos están los objetivos que se plantearon. Los indicadores financieros sirven para:
        .col-lg-6
          figure
            img(src='@/assets/curso/tema3/img4.svg', style="width: auto" ,alt='').m-auto
    p.mb-5(data-aos="fade-down") Existen algunos tipos de indicadores financieros básicos: indicadores de rentabilidad, indicadores financieros de liquidez e indicadores de endeudamiento. A continuación, se podrán conocer sus especificaciones:
    .row.bg-c4
      .col-12(data-aos="fade-left")
        .p-5
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema3/img6.svg', style="width: auto" ,alt='').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema3/img6m.svg', style="width: auto" ,alt='').m-auto


</template>

<script>
export default {
  name: 'Tema3',
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
