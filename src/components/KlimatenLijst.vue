<script>
</script>

<template>
    <div>
        <RouterLink to="/klimaten/poolklimaat">
        <h1>Poolklimaat</h1>
        <img src="../assets/images/poolklimaat.png" alt="Poolklimaat">
        </RouterLink>
    </div>
    <div>
        <RouterLink to="/klimaten/hooggebergteklimaat">
        <h1>Hooggebergteklimaat</h1>
        <img src="../assets/images/hooggebergteklimaat.jpg">
        </RouterLink>
    </div>
    <div>
        <RouterLink to="/klimaten/toendraklimaat">
        <h1>Toendraklimaat</h1>
        <img src="../assets/images/toendraklimaat.jpg">
        </RouterLink>
    </div>
    <div>
        <RouterLink to="/klimaten/landklimaat">
        <h1>Landklimaat</h1>
        <img src="">
        </RouterLink>
    </div>
    <div>
        <RouterLink to="/klimaten/gematigdzeeklimaat">
        <h1>Gematigd Zeeklimaat</h1>
        <img src="http://">
        </RouterLink>
    </div>
    <div>
        <RouterLink to="/klimaten/WoestijnKlimaat">
        <h1>Woestijnklimaat</h1>
        <img src="../assets/images/woestijnklimaat.jpeg">
        </RouterLink>
    </div>
    <div>
        <RouterLink to="/klimaten/Savanneklimaat">
        <h1>Savanneklimaat</h1>
        <img src="../assets/images/Savanneklimaat.jpg">
        </RouterLink>
    </div>
    <div>
        <RouterLink to="/klimaten/Steppeklimaat">
        <h1>Steppeklimaat</h1>
        <img src="../assets/images/steppeklimaat.jpg">
        </RouterLink>
    </div>
    <div>
        <RouterLink to="/klimaten/TropischRegenwoudklimaat">
        <h1>Tropisch Regenwoudklimaat</h1>
        <img src="../assets/images/tropischregenwoudklimaat.jpg">
        </RouterLink>
    </div>

</template>

<style scoped>
    div {
        text-align: center;
        font-family: sans-serif;
    }

    img {
        width: 25em;
        height: 20em;
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 10px;
        transition: all 0.5s ease-in-out;
    }

    img:hover {
        width: 30em;
        height: 25em;
    }

    a {
        text-decoration: none;
    }

    h1 {
        color: black;
        transition: all 0.5s ease-in-out;
    }

    h1:hover {
        color: rgb(44, 139, 255);
    }
</style>