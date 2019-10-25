import store from '@/store/index'

function redirect (router) {

    let findQuery = (to) => {
        let queries = to.query,
            redirectUrl = "redirect_url",
            targetUrl = "target_url",
            obj;

        for (const query in queries) {
            if (query === redirectUrl) {
                obj = { name: redirectUrl, value: queries[query] }
            }
            if (query === targetUrl) {
                return { name: redirectUrl, value: queries[query] }
            }
        }

        return obj;
    }

    return () => { 
        router.beforeEach((to, from, next) => {
            let query = findQuery(to);
            if (!query && localStorage.getItem('token') === null) {
                store.commit('switchDialog', true);
            }
            if (!query && to.matched.some(record => record.meta.guest)) {
                store.commit('switchDialog', false);
            }
            if(to.matched.some(record => record.meta.guest)) {
                next(); 
            } 
            if (localStorage.getItem('token')) {
                next(); 
            }
            if (query && localStorage.getItem('token')) {
                store.dispatch('getSSOToken1');
                //location.href = query.value;
                next(); 
            }
        })
    }
}
export default redirect;
