<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" :class="{'is-active':isOpen}" @click="isOpen = !isOpen">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        </a>
    </div>

    <div class="navbar-menu" :class="{'is-active':isOpen}">
        <div class="navbar-start">
            <router-link to="/" class="navbar-item" active-class="is-current" exact>Home</router-link>
            <router-link to="/about" class="navbar-item" active-class="is-current">About</router-link>
            <router-link to="/game" class="navbar-item" active-class="is-current">Game</router-link>

        <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
            More
            </a>

            <div class="navbar-dropdown">
            <a class="navbar-item is-current">
                About
            </a>
            <a class="navbar-item">
                Jobs
            </a>
            <a class="navbar-item">
                Contact
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
                Report an issue
            </a>
            </div>
        </div>
        </div>

        <div class="navbar-end">
        <div class="navbar-item">
            <div class="buttons">
             <router-link to="/login" class="button is-primary" active-class="is-current">Log In</router-link>
            <a class="button is-light">
                Log in
            </a>
            </div>
        </div>
        </div>
    </div>
    </nav>
</template>

<script>
export default {
    data: () => ({
        isOpen: false
    })
}
</script>

<style>
    .is-current {
        font-weight: bold;
        color: blueviolet;
    }
</style>