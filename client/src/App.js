import BlogHeader from './layout/header/header.component.vue';

export default {
  name: 'app',
  components: {
    'blog-header': BlogHeader
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  }
};
