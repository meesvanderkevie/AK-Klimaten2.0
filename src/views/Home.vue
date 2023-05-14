<script>
    import KlimatenLijst from "@/components/KlimatenLijst.vue";

    export default {
        components: {
            KlimatenLijst
        }
    }
</script>

<template>
    <div class="welkomsttekst">
        <h1 style="margin-bottom: 1px; color: rgb(43, 43, 231)">De Negen Klimaten Uitgelegd</h1>
        <h3 style="color: rgb(218, 0, 0);">Door: Jarle Feijes en Mees van der Kevie</h3>
    </div>

    <div class="container">
    <h2>De klimaten ingedeeld op neerslag en temperatuur</h2>
    <h3 style="color: rgb(18, 125, 255);">Neerslag</h3>
    <div>
        <li>Tropisch regenwoudklimaat</li>
        <li>Savanneklimaat</li>
        <li>Steppeklimaat</li>
        <li>Woestijnklimaat</li>
    </div>

    <h3 style="color: orange;">Temperatuur</h3>
    <div>
        <li>Gematigd zeeklimaat</li>
        <li>Landklimaat</li>
        <li>Toendraklimaat</li>
        <li>Poolklimaat</li>
        <li>Hooggebergteklimaat</li>
    </div>
    </div>


    <KlimatenLijst/>
</template>

<style scoped>

    .welkomsttekst {
        text-align: center;
        margin-top: 3em;
    }

    h1 {
        font-size: 3rem;
        font-family: sans-serif;
    }

    h2 {
        font-size: 1.7rem;
        font-family: sans-serif;
    }

    .container {
        text-align: center;
        margin-top: 3em;
        margin-bottom: 3em;
    }

    li {
        font-family: sans-serif;
        font-size: 1rem;
    }

    h3 {
        font-size: 1.5rem;
        font-family: sans-serif;
    }
</style>