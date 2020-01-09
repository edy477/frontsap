<template>
<div class="container">
    <ul v-if="products && products.length">
        <li v-for="product of products">
            <img :src="'build/images/'+product.image+'.jpg'" width="241.6" height="300"/>
            <p><strong>{{product.name}}</strong>  </p>
            <p><strong>{{product.sku}}</strong>  </p>
            <p><strong>${{product.price}}.00</strong> </p>


        </li>
    </ul>
</div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "Items",


        data: function () {
            return {
                products: []

            }

        },
        created() {
            axios.get('http://localhost:8000/api/products')
                .then(response => {
                    this.products = response.data
                })
                .catch( e => {

                    this.errors.push(e)
                })

        }




    }

</script>

<style scoped>

</style>