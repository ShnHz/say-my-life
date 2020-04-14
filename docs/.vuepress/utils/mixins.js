/*
 * @Author: sanghangning 
 * @Date: 2019-12-11 10:46:35 
 * @Last Modified by: sanghangning
 * @Last Modified time: 2019-12-12 10:31:27
 */

// directives
import directives from './directives/directives.js'


// filters
import numberFilters from './filters/numberFilters.js'
import arrayFilters from './filters/arrayFilters.js'

// methods
import dateMethods from './methods/dateMethods.js'
import otherMethods from './methods/otherMethods.js'
import typeMethods from './methods/typeMethods.js'
import stringMethods from './methods/stringMethods.js'
import numberMethods from './methods/numberMethods.js'

const mixins = {
    directives: {
        ...directives
    },
    filters: {
        ...numberFilters,
        ...arrayFilters
    },
    methods: {
        ...dateMethods,
        ...otherMethods,
        ...typeMethods,
        ...stringMethods,
        ...numberMethods
    }
}
export default mixins