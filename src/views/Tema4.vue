<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span(style="color: black") 4
      h1 Notas a los estados financieros
    .row.mb-4
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p Son las aclaraciones que se hacen para precisar o aclarar algo de los estados financieros; estos son textos aclaratorios que se adjuntan a los estados financieros. El objetivo de estas notas es brindar los elementos necesarios para que quienes realicen las consultas de los estados financieros comprendan claramente lo que allí está descrito. La contabilidad, los estados financieros y las notas de los estados financieros son responsabilidad de la empresa, pero las notas las realizan los profesionales que elaboran los estados financieros; las notas deben incluir un resumen de las políticas contables significativas que la entidad ha utilizado para preparar su información; cada entidad debe incluir la información necesaria, de forma que se permita entender:
        figure
          img(src='@/assets/curso/tema4/img1.svg', style="width: auto" ,alt='').m-auto
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img1.png', style="width: auto" ,alt='').m-auto
    .row.align-items-center.mb-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        p #[b Las notas que deben elaborarse son:]
        figure
          img(src='@/assets/curso/tema4/img2.png', style="width: auto" ,alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        ul.lista-ul
          li.d-flex
            i.fas.fa-check(style="color: #FE502D")
            | Notas que contengan información general acerca de la entidad.
          li.d-flex
            i.fas.fa-check(style="color: #FE502D")
            | Un resumen de las políticas contables significativas.
          li.d-flex
            i.fas.fa-check(style="color: #FE502D")
            | Información de apoyo de cada uno de los estados financieros.
          li.d-flex
            i.fas.fa-check(style="color: #FE502D")
            | Declaración de cumplimiento estándar.
          li.d-flex
            i.fas.fa-check(style="color: #FE502D")
            | Otra información que se requiera.
    p.mb-5(data-aos="fade-right") Para redactar las notas, se deben tener en cuenta los siguientes aspectos:
    .row.bg-c5.mb-5
      .col-12(data-aos="fade-down")
        .p-5
          SlyderB(:datos="datosSlyder")
    p.mb-5(data-aos="fade-right") Dentro de los fundamentos de los estados financieros empresariales, se encuentra un informe que ofrece una perspectiva singular para seguir la evolución de la empresa a lo largo del tiempo. Este documento examina en detalle los ingresos y gastos durante un período específico.
    h2.mb-4 Cuentas de resultados
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema4/img8.png', style="width: auto" ,alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p Es uno de los principales estados financieros, permite conocer la evolución de la empresa, la evolución económica en un periodo de tiempo; muestra todos los ingresos y los costes de una empresa durante un periodo.
        p La cuenta de resultados recoge los ingresos y los gastos que ha tenido una empresa en un periodo de tiempo, este es uno de los cinco estados financieros de la contabilidad. En su forma más básica, la cuenta de resultados es:
        .row.justify-content-center.mb-3
          .col-auto
            .cajon.color-primario.p-4
              p.mb-0 #[b Ingresos - Gastos = Beneficio Neto]
        p.mb-0 Nos indica cómo los ingresos se transforman en beneficios, según se les van restando los gastos; ayuda a visualizar de manera rápida cuáles han sido los gastos más importantes de la empresa. Los ingresos son las cantidades directas de dinero producto de las ventas de bienes y servicios; los gastos son las cuantías de dinero que se ha invertido para obtener esos ingresos.
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5(data-aos="fade-up")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8.mb-4.mb-lg-0
          .bloque-texto-a__texto.p-4
            p.mb-0 La cuenta de resultados refleja de manera agregada todos los registros: ingresos, gastos, pérdidas y ganancias que se han ido produciendo como consecuencia de las operaciones de la empresa en un periodo de tiempo; lo que permite, en cualquier momento, el cálculo de beneficio bruto.
        .col-lg-4
          figure
            img(src='@/assets/curso/tema4/img2.svg', style="width: auto" ,alt='').m-auto
    p.text-center.mb-5(data-aos="fade-right") #[b Elementos que componen la cuenta de resultados:]
    .row.align-items-center.justify-content-center
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema4/img9.png', style="width: auto" ,alt='').m-auto
      .col-lg-4(data-aos="fade-left")
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Ventas netas.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Coste de ventas.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Margen bruto sobre ventas.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Gastos de explotación.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Gastos e ingresos financieros.
          li 
            .lista-ol--cuadro__vineta
              span 6
            | Gastos e ingresos excepcionales.
          li 
            .lista-ol--cuadro__vineta
              span 7
            | Impuestos sobre beneficios.
          li 
            .lista-ol--cuadro__vineta
              span 8
            | Resultado neto.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'No incluir notas textuales de las normas',
        texto:
          'Ya que, para la comprensión de los estados financieros, las normas se pueden consultar.',
        imagen: require('@/assets/curso/tema4/img3.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Revelar las políticas contables que impliquen una elección',
        texto:
          'La entidad revela las políticas contables que contienen elecciones sobre transacciones, para las cuales las normas permiten dos o más opciones de tratamiento y que traten sobre transacciones significativas.',
        imagen: require('@/assets/curso/tema4/img4.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Mencionar las políticas contables utilizadas para las transacciones particulares',
        texto:
          'En las notas a los estados financieros, debe explicarse el tratamiento particular que la entidad le da a este tipo de transacciones, cuando sea necesario, para la comprensión de los estados financieros; también deben versar sobre hechos materiales.',
        imagen: require('@/assets/curso/tema4/img5.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'No mencionar las políticas contables que no se utilizaron en el periodo actual',
        texto:
          'Si la entidad no ha utilizado una política contable en el período actual, no es necesario incluirla dentro del resumen de las políticas.',
        imagen: require('@/assets/curso/tema4/img6.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Aclarar cambios significativos en políticas contables',
        texto:
          'Cuando la entidad haya efectuado un cambio en la política contable que haya ocasionado una alteración del material en las cifras de los estados financieros.',
        imagen: require('@/assets/curso/tema4/img7.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
