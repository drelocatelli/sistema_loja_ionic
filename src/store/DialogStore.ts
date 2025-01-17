import { defineStore } from "pinia";
import { Component } from "vue";

interface Links {
    text: string,
    url: string
}

export const useDialogStore = defineStore('dialog', {
    state: () => ({
        isOpen: false,
        width: '40%',
        actions: null as Component | null,
        body: null as Component | null,
        bodyProps: {} as Record<string, any>, 
        bodyLinks: [] as Links[]| undefined,
        title: 'Erro',
    }),
    actions: {
        openDialog() {
            this.isOpen = true;
        },
        closeDialog() {
            this.isOpen = false;
        },
        setActions(component: Component) {
            this.actions = component;
        },
        setBody(component: Component, props: Record<string, any> = {}, links?: Links[]) {
            this.body = component;
            this.bodyProps = props;
            this.bodyLinks = links;
        },
        setTitle(title: string) {
            this.title = title;
        }
    }
});