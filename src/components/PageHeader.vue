<template>
<header>
    <div class="logo-section">
        <h1>App</h1>
    </div>
    <div class="link-section">
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/count">Count</router-link></li>
            <li><router-link to="/sign-up">Sign Up</router-link></li>
            <li><router-link to="/transactionsView">Transactions</router-link></li>
            <li><router-link to="/fashionView">Shop</router-link></li>
        </ul>
    </div>
</header>
</template>
<script>
export default {

}
</script>
<style scoped>
header {
    background: rgb(6, 6, 221);
    display: flex;
    color: #fff;
    justify-content: space-between;
    align-items: center;
}

header ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    margin-right: 15px;
}

ul li a {
    color: #fff;
    text-decoration: none;
    justify-content: space-between;
    margin-right: 10px;
}
</style>
