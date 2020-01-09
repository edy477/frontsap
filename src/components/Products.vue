
<template>
<div>



        <Navbar/>
        <Items/>


</div>



</template>

<script>
    import Items from './Items';
    import Navbar from './Navbar';

    export default {

        name: "Products",
            components: {Items, Navbar},
    };
</script>