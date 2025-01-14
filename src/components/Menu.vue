<template>
    <div id="menu-wrapper">
        <ul>
            <li>
                <router-link :to="{name: 'dashboard'}">
                    <v-btn>
                        <a href="/dashboard">Geral</a>
                    </v-btn>
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'sales'}">
                    <v-btn>
                        vendas
                    </v-btn>
                </router-link>
            </li>
            <li>
                <v-btn>
                    <a href="javascript:void(0);">Estoque</a>
                </v-btn>
            </li>
            <li>
                <v-btn>
                    <a href="javascript:void(0);">Clientes</a>
                </v-btn>
            </li>
            <li>
                <v-btn>
                    <a href="javascript:void(0);">Colaboradores</a>
                </v-btn>
            </li>
            <li>
                <v-btn>
                    <a href="javascript:void(0);">Sair</a>
                </v-btn>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { VBtn } from 'vuetify/lib/components/index.mjs';
</script>

<style lang="scss" scoped>
#menu-wrapper {
    &.hide_mobile {
        display: block;
    }

    & ul {
        display: flex;
        flex-direction: column;
        
        & li {
            list-style-type: none;
            
            & button {
                background-color: transparent;
                box-shadow: none;
                padding: 0 10px;
                text-transform: capitalize;
                width: -webkit-fill-available;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            & a {
                padding: unset;
                display: block;
                text-decoration: none;
                
            }
        }
        
        @media screen and (min-width: 768px) {
            display: flex;
            flex-direction: row;
        }
    }


    @media screen and (max-width: 768px) {
        &.hide_mobile {
            display: none;
        }
    }
}
</style>