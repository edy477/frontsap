<template>
    <div>
        <img :src="'build/images/'+product.image+'.jpg'" width="241.6" height="300"/>
        <p><strong>{{product.name}}</strong>  </p>
        <p><strong>{{product.sku}}</strong>  </p>
        <p><strong>${{product.price}}.00</strong> </p>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "Item",
        data:  function () {
            return {
                product: {}
            }

            },
        created:function() {
            fetch('http://localhost:8000/api/products/'+ $route.params.id)
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    this.product = res;
                });

        }
    }
</script>

<style scoped>

</style>