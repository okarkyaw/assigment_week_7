import Login from './components/LoginForm.vue';
import PostList from './components/PostList.vue';
import CreateForm from './components/CreateForm.vue';
import Edit from './components/Edit.vue';
import PostDetail from './components/PostDetail.vue';

export default [
    {
        path: '/vue/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/vue/posts',
        name: 'posts',
        component: PostList,
    },
    {
        path: '/vue/create',
        name: 'create',
        component: CreateForm,
    
    },
    {
        path: '/vue/edit',
        name: 'edit',
        component: Edit,
    }
    {
        path: '/vue/detail',
        name: 'detail',
        component: detailForm,
    }
]