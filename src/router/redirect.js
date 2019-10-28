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
            if (!query && localStorage.getItem('accessToken') === null) {
                store.commit('switchDialog', true);
            }
            if (!query && to.matched.some(record => record.meta.guest)) {
                store.commit('switchDialog', false);
            }
            if(to.matched.some(record => record.meta.guest)) {
                next(); 
            } 
            if (localStorage.getItem('accessToken')) {
                next(); 
            }
            if (query && localStorage.getItem('accessToken')) {
                store.dispatch('initUpdateToken');
                //store.dispatch('getSSOToken1');
                //location.href = query.value;
                next(); 
            }
        })
    }
}
export default redirect;
