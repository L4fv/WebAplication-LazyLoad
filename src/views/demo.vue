<template>
  <div>
    <carousel-component></carousel-component>
    <info-component text="Componente sincrono" color="#B9F6CA"></info-component>
    <lazy-component text="Componente Asincrono" color="#CCFF90"></lazy-component>
  </div>
</template>
<script>
import LoadingComponent from "../components/LoadingComponent";
import CarouselComponent from "../components/CarouselComponent";
import InfoComponent from "../components/InfoComponent";
const LazyComponent = () => ({
  // The component to load (should be a Promise)
  component: import(/* webpackChunkName: "LazyComponent" */ "../components/LazyComponent"),
  // A component to use while the async component is loading
  loading: LoadingComponent
});

export default {
  components: {
    CarouselComponent,
    InfoComponent,
    LazyComponent
  }
};
</script>
