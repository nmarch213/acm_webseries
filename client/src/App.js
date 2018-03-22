import BlogHeader from './layout/header/header.component.vue';
import BlogContent from './blog/blog.component.vue';

export default {
  name: 'app',
  components: {
    'blog-header': BlogHeader,
    'blog-content': BlogContent
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  }
};
