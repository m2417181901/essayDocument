import { defineStore, createPinia } from 'pinia';
import { App } from 'vue';

const pinia = createPinia();
export function initPinia(app: App<Element>) {
    app.use(pinia);
}

export const useStore = defineStore('menuIndex', {
    state: () => {
        return {
            index: 'homePage'
        }
    },
    actions: {
        changeMenu(newMenu: string):void {
            if(this.index != newMenu)
                this.index = newMenu;
        }   
    }
})

