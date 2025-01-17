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
                 <v-btn @click="expand(0)">
                    <a href="javascript:void(0);">
                        Vendas
                        <span class="mdi mdi-menu-down"></span>
                    </a>
                 </v-btn>
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
                <a href="/">
                    <v-btn>
                        Sair
                    </v-btn>
                </a>
            </li>
        </ul>
 
    </div>
    
</template>

<script lang="ts" setup>
import { useDialogStore } from '@/store/DialogStore';
import { VBtn } from 'vuetify/lib/components/index.mjs';
import SalesMenu from '@/components/SalesMenu.vue';

const dialogStore = useDialogStore();

/**
 * Expands the tab at the given index by creating and displaying an alert.
 * The alert's header is determined by the expandedTabsHeader function.
 * Upon alert dismissal, toggles the isOpen state and sets the selectedIdx to the given index.
 * 
 * @param {number} index - The index of the tab to expand.
 */

async function expand(index: number) {
    console.log(index)
    dialogStore.setBody(SalesMenu);
    dialogStore.setTitle('Vendas');
    dialogStore.openDialog();
}
</script>

<style>
.alert-link {
    gap: 1rem;
    display: flex;
    margin: 0;
    list-style: none;
    
    /* & a {
        padding: 1rem;
        text-decoration: none;
        background: #fdeae4;
        width: 100%;

        
        &:hover {
            color: #fff;
            background: #fcd6cb;
        }
    } */
}
</style>

<style lang="scss" scoped>


#menu-wrapper {
    &.hide_mobile {
        display: block;
    }

    & .mdi {
        font-size: 20px;
    }


    & ul:not(.submenu) {
        display: flex;
        flex-direction: column;
        
        & li {
            list-style-type: none;
            
            & button {
                background-color: transparent;
                box-shadow: none;
                padding: 8px 10px;
                margin: 2px 0;
                text-transform: capitalize;
                width: -webkit-fill-available;
                display: flex;
                align-items: center;
                font-size: 14px;
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