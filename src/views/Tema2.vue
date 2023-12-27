<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span(style="color: black") 2
      h1 Estructura y proyecciones del estado financiero
    figure(data-aos="fade-right")
      img(src='@/assets/curso/tema2/img1.png', style="width: auto" ,alt='').m-auto
    p(data-aos="fade-down") Para crear una estructura y proyección financiera sólida, es fundamental llevar a cabo un análisis exhaustivo y comprender en profundidad la situación financiera actual de la organización. Este análisis servirá como base para estimar y construir una proyección financiera precisa.
    p.mb-5(data-aos="fade-down") A continuación, se detalla la importancia de la estructura y proyección de estados financieros, resaltando la necesidad de comprender la información contable y su utilidad en la toma de decisiones estratégicas en proyecciones financieras:
    TabsB.color-acento-contenido.mb-5(data-aos="fade-left")
      .py-4.py-md-5(titulo="Análisis financiero" :icono="require('@/assets/curso/tema2/img1.svg')")
        .row.justify-content-center
          .col-lg-5.mb-4.mb-lg-0
            p Es un estudio que se realiza de la información contable, mediante la utilización de indicadores y razones financieras, para determinar la situación financiera de la organización; la contabilidad refleja la realidad económica y financiera de la empresa; por ello, es importante saber interpretarla. El análisis financiero, de poco serviría si la información no se sabe comprender.
            p.mb-0 Mediante el análisis financiero, se pueden identificar debilidades y riesgos de la empresa, así como el potencial de la organización y sus proyecciones futuras, para lo cual se debe comprender la estructura financiera con respecto a sus ingresos, gastos, costos, activos y comportamientos que estos han tenido en los periodos analizados. Es necesario conocer el por qué la organización se encuentra en la situación en la que está para poder diseñar las estrategias pertinentes. El análisis financiero anticipa problemas y orienta decisiones empresariales.        
          .col-lg-5
            figure
              img(src='@/assets/curso/tema2/img3.svg', style="width: auto" ,alt='').m-auto
      .py-4.py-md-5(titulo="Proyecciones financieras" :icono="require('@/assets/curso/tema2/img2.svg')")
        .row.justify-content-center
          .col-lg-5.mb-4.mb-lg-0
            p Las organizaciones deben tener unas proyecciones financieras, es decir, pronosticar los resultados económico-financieros futuros de la entidad con respecto a sus operaciones; también se obtienen diferentes estimaciones de resultados, lo cual permite identificar los riesgos e implementar estrategias según sea el caso.
            p Las proyecciones financieras tienen como funciones, entre otras:
            ul.lista-ul
              li.d-flex
                i.fas.fa-check(style="color: #FE502D")
                | Demostrar la fiabilidad y estabilidad para la consecución de recursos.
              li.d-flex
                i.fas.fa-check(style="color: #FE502D")
                | Buscar socios para la organización.
              li.d-flex
                i.fas.fa-check(style="color: #FE502D")
                | Buscar beneficios estatales.
              li.d-flex
                i.fas.fa-check(style="color: #FE502D")
                | Identificar los riesgos del área de manera temprana.
              li.d-flex
                i.fas.fa-check(style="color: #FE502D")
                | Implementar estrategias de acuerdo con lo estimado en las proyecciones.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema2/img4.svg', style="width: auto" ,alt='').m-auto
    p.mb-5(data-aos="fade-right") Las proyecciones del estado financiero dependen del tipo de organización, mientras más consolidadas estén las proyecciones, serán a un mayor tiempo, y se deben desarrollar en conjunto con el contador de la organización; los principales insumos para su realización son: los estados de resultados, el análisis de las ventas y el análisis del mercado. A continuación, se relacionan algunos pasos para realizar la proyección financiera de una organización:
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img2.png', style="width: auto" ,alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        LineaTiempoD.color-primario
          p.mb-0(numero="1" titulo="Conocer la organización") Para analizar el mercado y la capacidad de producción, es fundamental tener las cifras de la empresa y trabajar sobre datos reales; esto permitirá analizar cómo está la organización tanto dentro como fuera de ella.
          p.mb-0(numero="2" titulo="Determinar los tiempos de proyección") Las proyecciones financieras se pueden elaborar mensual, trimestral, semestral o anualmente; algunas empresas realizan su proyección a 5 o 10 años, dependiendo del tiempo que lleven en el mercado y su consolidación en el mismo.
          p.mb-0(numero="3" titulo="Analizar la situación") Se analizan los factores que determinan esta proyección, si es un nuevo producto o servicio, los costos de operación y las implicaciones de ponerlo al mercado, si la empresa ya está en marca, y se analizan los últimos estados financieros.
          p.mb-0(numero="4" titulo="Establecer los principales puntos en la proyección") Definir en cuánto se pueden incrementar las cifras y en cuánto tiempo; en cada periodo, es importante hacer ajustes, tomar decisiones importantes, comprar activos, adquirir créditos, contrataciones nuevas, etc.
          p.mb-0(numero="5" titulo="Elaborar un estado de resultados") Se deben reflejar los ingresos, gastos y costos de la organización; se realiza una revisión histórica de los estados de resultados para tener unas proyecciones mejor soportadas y realistas.
          p.mb-0(numero="6" titulo="Conocer el historial en ventas") Determinar los costos en que se incurrió con relación a las ventas; se deben tener presentes los indicadores y si algún factor los afectó.
          p.mb-0(numero="7" titulo="Realizar una proyección de ventas") Tener en cuenta factores como las cantidades que se venden del producto o servicio, cuántos clientes se tienen, precios de los productos o servicios con respecto al mercado, factores diferenciales.
          p.mb-0(numero="8" titulo="Elaborar un balance general") Con el cual se establecen todos los activos y pasivos de la empresa. Se debe tener presente que las cantidades proyectadas deben coincidir con los rubros proyectados; si la proyección es anual, al aumentar las ventas, también aumentarán las cuentas por cobrar, los clientes y el financiamiento de los rubros para el incremento de las ventas.
          p.mb-0(numero="9" titulo="Proyectar el flujo de efectivo") Teniendo el estado de resultados y el balance general, se puede elaborar una proyección con base en el efectivo y la liquidez con los que cuenta la empresa.
    .row.justify-content-center
      .col-lg-10(data-aos="fade-right")
        .cajon.color-primario.p-4
          p.mb-0 Es importante tener en cuenta que existen diferentes herramientas digitales, como los #[i softwares] contables o administrativos, los cuales facilitan la labor de análisis y proyecciones de la organización.

</template>

<script>
export default {
  name: 'Tema2',
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
