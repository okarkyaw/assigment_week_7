export default {
    created() {
        axios.defaults.headers.common = {
            'Authorization': 'Bearer ' + this.$cookie.get('api_token')
        }
    }
}