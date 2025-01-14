<template>
    <div id="menu-wrapper">
        <ul>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Home</a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>


</script>

<style lang="scss" scoped>
#menu-wrapper {
    &.hide_mobile {
        display: block;
    }

    & ul {
        & li {
            list-style-type: none;

            & a {
                text-decoration: none;
            }
        }
        
        @media screen and (min-width: 768px) {
            display: flex;
            flex-direction: row;
            gap: 0.5rem;
        }
    }


    @media screen and (max-width: 768px) {
        &.hide_mobile {
            display: none;
        }
    }
}
</style>