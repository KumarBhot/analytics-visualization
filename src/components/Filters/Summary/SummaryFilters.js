import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
    props: {
        sDate: '',
        eDate: '',
        botChannels: {
            type: Array,
            default: () => {
                return [];
            }
        },
        subCategories: {
            type: Array,
            default: () => {
                return [];
            }
        },
        categories: {
            type: Array,
            default: () => {
                return [];
            }
        }
    }
})
export default class SummaryFilters extends Vue {
    data () {
        return {
            selectedBotChannels: ['FacebookMsgr', 'Web'],
            selectedSubcategories: ['Intent', 'Help'],
            selectedCategories: []
        };
    }
}
