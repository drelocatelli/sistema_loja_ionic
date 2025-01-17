<template>
    <div id="sales-menu">
        <ul>
            <li>
                <a href="/dashboard/vendas">Vendas</a>
            </li>
            <li>
                <a href="">Notas fiscais</a>
            </li>
            <li>
                <a href="">Categorias</a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">

</script>

<style lang="scss">
#sales-menu {
    padding: 0 1rem;

    & ul {
        padding: 0;
        margin: 0;

        & li {
            list-style: none;
            display: flex;

            & a {
                width: 100%;
                text-decoration: none;
                background-color: #f9f9f9;
                padding: 1rem;
                display: block;
                border-width: 1px;

                &:hover {
                    border: 1px solid #ddd;
                }
            }
        }
    }
}
</style>