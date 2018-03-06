import axios from 'axios';
import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILED } from '../types';

// import { works } from '../../data';

const apiUrl = 'http://maquinavisual.com/blog';

const pagesEndPoint = `${apiUrl}/wp-json/wp/v2/pages`; // Endpoint for getting Wordpress Pages
const postsEndPoint = `${apiUrl}/wp-json/wp/v2/posts`; // Endpoint for getting Wordpress Posts
// export const fetchData = () => {
//   return {
//     type: FETCH_DATA_SUCCESS,
//     payload: works
//   };
// };

const fetchSuccess = data => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data
  };
};

const fetchFailed = err => {
  return {
    type: FETCH_DATA_FAILED,
    error: err
  };
};

const data = [
  {
    id: 55,
    date: '2018-01-31T16:45:12',
    date_gmt: '2018-01-31T16:45:12',
    guid: { rendered: 'http://www.maquinavisual.com/blog/?p=55' },
    modified: '2018-03-05T16:32:28',
    modified_gmt: '2018-03-05T16:32:28',
    slug: 'test-post-chorromil',
    status: 'publish',
    type: 'post',
    link: 'http://www.maquinavisual.com/blog/test-post-chorromil/',
    title: { rendered: 'test post chorromil' },
    content: {
      rendered:
        '<p>&nbsp;</p>\n<p>este es el contenido del posstttt</p>\n<p>sdadsadadas</p>\n<p>asdasda</p>\n',
      protected: false
    },
    excerpt: {
      rendered:
        '<p>&nbsp; este es el contenido del posstttt sdadsadadas asdasda</p>\n',
      protected: false
    },
    author: 1,
    featured_media: 0,
    comment_status: 'open',
    ping_status: 'open',
    sticky: false,
    template: '',
    format: 'standard',
    meta: [],
    categories: [1],
    tags: [],
    acf: {
      '': false,
      avatar_picture: {
        id: 30,
        alt: '',
        title: '001-personas-sirena',
        caption: '',
        description: '',
        mime_type: 'image/jpeg',
        url:
          'http://www.maquinavisual.com/blog/wp-content/uploads/2018/01/001-personas-sirena.jpg',
        width: 569,
        height: 434,
        sizes: {
          thumbnail:
            'http://www.maquinavisual.com/blog/wp-content/uploads/2018/01/001-personas-sirena-150x150.jpg',
          'thumbnail-width': 150,
          'thumbnail-height': 150,
          medium:
            'http://www.maquinavisual.com/blog/wp-content/uploads/2018/01/001-personas-sirena-300x229.jpg',
          'medium-width': 300,
          'medium-height': 229,
          medium_large:
            'http://www.maquinavisual.com/blog/wp-content/uploads/2018/01/001-personas-sirena.jpg',
          'medium_large-width': 525,
          'medium_large-height': 400,
          large:
            'http://www.maquinavisual.com/blog/wp-content/uploads/2018/01/001-personas-sirena.jpg',
          'large-width': 525,
          'large-height': 400,
          'twentyseventeen-featured-image':
            'http://www.maquinavisual.com/blog/wp-content/uploads/2018/01/001-personas-sirena.jpg',
          'twentyseventeen-featured-image-width': 569,
          'twentyseventeen-featured-image-height': 434,
          'twentyseventeen-thumbnail-avatar':
            'http://www.maquinavisual.com/blog/wp-content/uploads/2018/01/001-personas-sirena-100x100.jpg',
          'twentyseventeen-thumbnail-avatar-width': 100,
          'twentyseventeen-thumbnail-avatar-height': 100
        }
      },
      nombre_del_proyecto: 'Sirenanancia',
      project_name: 'Siren',
      vimeourl: 'https://vimeo.com/247535876',
      ano_del_proyecto: '2018',
      descripcion_del_proyecto: 'este proyecto es un ',
      project_description: 'this is the projet description ',
      cliente: 'Patolo'
    },
    _links: {
      self: [
        { href: 'http://www.maquinavisual.com/blog/wp-json/wp/v2/posts/55' }
      ],
      collection: [
        { href: 'http://www.maquinavisual.com/blog/wp-json/wp/v2/posts' }
      ],
      about: [
        { href: 'http://www.maquinavisual.com/blog/wp-json/wp/v2/types/post' }
      ],
      author: [
        {
          embeddable: true,
          href: 'http://www.maquinavisual.com/blog/wp-json/wp/v2/users/1'
        }
      ],
      replies: [
        {
          embeddable: true,
          href:
            'http://www.maquinavisual.com/blog/wp-json/wp/v2/comments?post=55'
        }
      ],
      'version-history': [
        {
          href:
            'http://www.maquinavisual.com/blog/wp-json/wp/v2/posts/55/revisions'
        }
      ],
      'wp:attachment': [
        {
          href:
            'http://www.maquinavisual.com/blog/wp-json/wp/v2/media?parent=55'
        }
      ],
      'wp:term': [
        {
          taxonomy: 'category',
          embeddable: true,
          href:
            'http://www.maquinavisual.com/blog/wp-json/wp/v2/categories?post=55'
        },
        {
          taxonomy: 'post_tag',
          embeddable: true,
          href: 'http://www.maquinavisual.com/blog/wp-json/wp/v2/tags?post=55'
        }
      ],
      curies: [{ name: 'wp', href: 'https://api.w.org/{rel}', templated: true }]
    }
  },
  {
    id: 35,
    date: '2018-01-29T18:38:54',
    date_gmt: '2018-01-29T18:38:54',
    guid: { rendered: 'http://www.maquinavisual.com/blog/?p=35' },
    modified: '2018-03-05T17:10:44',
    modified_gmt: '2018-03-05T17:10:44',
    slug: 'test-post-2',
    status: 'publish',
    type: 'post',
    link: 'http://www.maquinavisual.com/blog/test-post-2/',
    title: { rendered: 'Test post 2' },
    content: {
      rendered: '<p>test de contenido\u00a0del post</p>\n<p>&nbsp;</p>\n',
      protected: false
    },
    excerpt: {
      rendered: '<p>test de contenido\u00a0del post &nbsp;</p>\n',
      protected: false
    },
    author: 1,
    featured_media: 0,
    comment_status: 'open',
    ping_status: 'open',
    sticky: false,
    template: '',
    format: 'standard',
    meta: [],
    categories: [1],
    tags: [],
    acf: {
      '': false,
      avatar_picture: {
        id: 52,
        alt: '',
        title: 'FFIMFpostcards04',
        caption: '',
        description: '',
        mime_type: 'image/png',
        url:
          'http://www.maquinavisual.com/blog/wp-content/uploads/2018/01/FFIMFpostcards04.png',
        width: 1241,
        height: 1749,
        sizes: {
          thumbnail:
            'http://www.maquinavisual.com/blog/wp-content/uploads/2018/01/FFIMFpostcards04-150x150.png',
          'thumbnail-width': 150,
          'thumbnail-height': 150,
          medium:
            'http://www.maquinavisual.com/blog/wp-content/uploads/2018/01/FFIMFpostcards04-213x300.png',
          'medium-width': 213,
          'medium-height': 300,
          medium_large:
            'http://www.maquinavisual.com/blog/wp-content/uploads/2018/01/FFIMFpostcards04-768x1082.png',
          'medium_large-width': 525,
          'medium_large-height': 740,
          large:
            'http://www.maquinavisual.com/blog/wp-content/uploads/2018/01/FFIMFpostcards04-727x1024.png',
          'large-width': 525,
          'large-height': 739,
          'twentyseventeen-featured-image':
            'http://www.maquinavisual.com/blog/wp-content/uploads/2018/01/FFIMFpostcards04-1241x1200.png',
          'twentyseventeen-featured-image-width': 1241,
          'twentyseventeen-featured-image-height': 1200,
          'twentyseventeen-thumbnail-avatar':
            'http://www.maquinavisual.com/blog/wp-content/uploads/2018/01/FFIMFpostcards04-100x100.png',
          'twentyseventeen-thumbnail-avatar-width': 100,
          'twentyseventeen-thumbnail-avatar-height': 100
        }
      },
      nombre_del_proyecto: 'test ',
      project_name: 'test in english',
      vimeourl: 'https://vimeo.com/247535876',
      ano_del_proyecto: '2016',
      descripcion_del_proyecto: 'esta es una descripcion mula',
      project_description: 'this is a mule description ',
      cliente: 'colo colo'
    },
    _links: {
      self: [
        { href: 'http://www.maquinavisual.com/blog/wp-json/wp/v2/posts/35' }
      ],
      collection: [
        { href: 'http://www.maquinavisual.com/blog/wp-json/wp/v2/posts' }
      ],
      about: [
        { href: 'http://www.maquinavisual.com/blog/wp-json/wp/v2/types/post' }
      ],
      author: [
        {
          embeddable: true,
          href: 'http://www.maquinavisual.com/blog/wp-json/wp/v2/users/1'
        }
      ],
      replies: [
        {
          embeddable: true,
          href:
            'http://www.maquinavisual.com/blog/wp-json/wp/v2/comments?post=35'
        }
      ],
      'version-history': [
        {
          href:
            'http://www.maquinavisual.com/blog/wp-json/wp/v2/posts/35/revisions'
        }
      ],
      'wp:attachment': [
        {
          href:
            'http://www.maquinavisual.com/blog/wp-json/wp/v2/media?parent=35'
        }
      ],
      'wp:term': [
        {
          taxonomy: 'category',
          embeddable: true,
          href:
            'http://www.maquinavisual.com/blog/wp-json/wp/v2/categories?post=35'
        },
        {
          taxonomy: 'post_tag',
          embeddable: true,
          href: 'http://www.maquinavisual.com/blog/wp-json/wp/v2/tags?post=35'
        }
      ],
      curies: [{ name: 'wp', href: 'https://api.w.org/{rel}', templated: true }]
    }
  },
  {
    id: 32,
    date: '2018-01-29T18:36:28',
    date_gmt: '2018-01-29T18:36:28',
    guid: { rendered: 'http://www.maquinavisual.com/blog/?p=32' },
    modified: '2018-01-29T18:36:28',
    modified_gmt: '2018-01-29T18:36:28',
    slug: 'perrobullying',
    status: 'publish',
    type: 'post',
    link: 'http://www.maquinavisual.com/blog/perrobullying/',
    title: { rendered: 'PerroBullying' },
    content: {
      rendered:
        '<p><img class="alignnone size-medium wp-image-33" src="http://www.maquinavisual.com/blog/wp-content/uploads/2018/01/perro-300x167.png" alt="" width="300" height="167" srcset="http://www.maquinavisual.com/blog/wp-content/uploads/2018/01/perro-300x167.png 300w, http://www.maquinavisual.com/blog/wp-content/uploads/2018/01/perro-768x427.png 768w, http://www.maquinavisual.com/blog/wp-content/uploads/2018/01/perro-1024x569.png 1024w" sizes="(max-width: 300px) 100vw, 300px" /></p>\n',
      protected: false
    },
    excerpt: { rendered: '', protected: false },
    author: 1,
    featured_media: 0,
    comment_status: 'open',
    ping_status: 'open',
    sticky: false,
    template: '',
    format: 'standard',
    meta: [],
    categories: [1],
    tags: [],
    acf: {
      avatar_picture: false,
      nombre_del_proyecto: false,
      project_name: false,
      vimeourl: false,
      ano_del_proyecto: false,
      descripcion_del_proyecto: false,
      project_description: false,
      cliente: false
    },
    _links: {
      self: [
        { href: 'http://www.maquinavisual.com/blog/wp-json/wp/v2/posts/32' }
      ],
      collection: [
        { href: 'http://www.maquinavisual.com/blog/wp-json/wp/v2/posts' }
      ],
      about: [
        { href: 'http://www.maquinavisual.com/blog/wp-json/wp/v2/types/post' }
      ],
      author: [
        {
          embeddable: true,
          href: 'http://www.maquinavisual.com/blog/wp-json/wp/v2/users/1'
        }
      ],
      replies: [
        {
          embeddable: true,
          href:
            'http://www.maquinavisual.com/blog/wp-json/wp/v2/comments?post=32'
        }
      ],
      'version-history': [
        {
          href:
            'http://www.maquinavisual.com/blog/wp-json/wp/v2/posts/32/revisions'
        }
      ],
      'wp:attachment': [
        {
          href:
            'http://www.maquinavisual.com/blog/wp-json/wp/v2/media?parent=32'
        }
      ],
      'wp:term': [
        {
          taxonomy: 'category',
          embeddable: true,
          href:
            'http://www.maquinavisual.com/blog/wp-json/wp/v2/categories?post=32'
        },
        {
          taxonomy: 'post_tag',
          embeddable: true,
          href: 'http://www.maquinavisual.com/blog/wp-json/wp/v2/tags?post=32'
        }
      ],
      curies: [{ name: 'wp', href: 'https://api.w.org/{rel}', templated: true }]
    }
  },
  {
    id: 29,
    date: '2018-01-29T17:44:39',
    date_gmt: '2018-01-29T17:44:39',
    guid: { rendered: 'http://www.maquinavisual.com/blog/?p=29' },
    modified: '2018-01-29T21:01:21',
    modified_gmt: '2018-01-29T21:01:21',
    slug: 'sirena',
    status: 'publish',
    type: 'post',
    link: 'http://www.maquinavisual.com/blog/sirena/',
    title: { rendered: 'sirena test' },
    content: {
      rendered:
        '<p><img class="aligncenter wp-image-30 size-full" src="http://www.maquinavisual.com/blog/wp-content/uploads/2018/01/001-personas-sirena.jpg" alt="" width="569" height="434" srcset="http://www.maquinavisual.com/blog/wp-content/uploads/2018/01/001-personas-sirena.jpg 569w, http://www.maquinavisual.com/blog/wp-content/uploads/2018/01/001-personas-sirena-300x229.jpg 300w" sizes="(max-width: 569px) 100vw, 569px" /></p>\n',
      protected: false
    },
    excerpt: { rendered: '', protected: false },
    author: 1,
    featured_media: 0,
    comment_status: 'open',
    ping_status: 'open',
    sticky: false,
    template: '',
    format: 'standard',
    meta: [],
    categories: [1],
    tags: [],
    acf: {
      avatar_picture: false,
      nombre_del_proyecto: false,
      project_name: false,
      vimeourl: false,
      ano_del_proyecto: false,
      descripcion_del_proyecto: false,
      project_description: false,
      cliente: false
    },
    _links: {
      self: [
        { href: 'http://www.maquinavisual.com/blog/wp-json/wp/v2/posts/29' }
      ],
      collection: [
        { href: 'http://www.maquinavisual.com/blog/wp-json/wp/v2/posts' }
      ],
      about: [
        { href: 'http://www.maquinavisual.com/blog/wp-json/wp/v2/types/post' }
      ],
      author: [
        {
          embeddable: true,
          href: 'http://www.maquinavisual.com/blog/wp-json/wp/v2/users/1'
        }
      ],
      replies: [
        {
          embeddable: true,
          href:
            'http://www.maquinavisual.com/blog/wp-json/wp/v2/comments?post=29'
        }
      ],
      'version-history': [
        {
          href:
            'http://www.maquinavisual.com/blog/wp-json/wp/v2/posts/29/revisions'
        }
      ],
      'wp:attachment': [
        {
          href:
            'http://www.maquinavisual.com/blog/wp-json/wp/v2/media?parent=29'
        }
      ],
      'wp:term': [
        {
          taxonomy: 'category',
          embeddable: true,
          href:
            'http://www.maquinavisual.com/blog/wp-json/wp/v2/categories?post=29'
        },
        {
          taxonomy: 'post_tag',
          embeddable: true,
          href: 'http://www.maquinavisual.com/blog/wp-json/wp/v2/tags?post=29'
        }
      ],
      curies: [{ name: 'wp', href: 'https://api.w.org/{rel}', templated: true }]
    }
  },
  {
    id: 20,
    date: '2018-01-27T20:29:02',
    date_gmt: '2018-01-27T20:29:02',
    guid: { rendered: 'http://www.maquinavisual.com/blog/?p=20' },
    modified: '2018-01-29T15:51:16',
    modified_gmt: '2018-01-29T15:51:16',
    slug: 'ballena',
    status: 'publish',
    type: 'post',
    link: 'http://www.maquinavisual.com/blog/ballena/',
    title: { rendered: 'Ballena' },
    content: {
      rendered:
        '<p><img class="aligncenter wp-image-24 size-large" src="http://www.maquinavisual.com/blog/wp-content/uploads/2018/01/ballena-1024x494.png" alt="" width="525" height="253" srcset="http://www.maquinavisual.com/blog/wp-content/uploads/2018/01/ballena-1024x494.png 1024w, http://www.maquinavisual.com/blog/wp-content/uploads/2018/01/ballena-300x145.png 300w, http://www.maquinavisual.com/blog/wp-content/uploads/2018/01/ballena-768x371.png 768w" sizes="(max-width: 525px) 100vw, 525px" /></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis orci finibus erat consectetur volutpat. Suspendisse fermentum orci id odio molestie, eleifend pulvinar sapien varius. Ut vitae rhoncus enim. Morbi finibus lectus tempor augue ultricies commodo. Fusce in dignissim felis. Suspendisse eu eros orci. Suspendisse quis mattis neque. Sed ac dignissim diam, a imperdiet sem. Nulla ultricies semper lectus id pellentesque. Proin placerat vehicula consequat.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis orci finibus erat consectetur volutpat. Suspendisse fermentum orci id odio molestie, eleifend pulvinar sapien varius. Ut vitae rhoncus enim. Morbi finibus lectus tempor augue ultricies commodo. Fusce in dignissim felis. Suspendisse eu eros orci. Suspendisse quis mattis neque. Sed ac dignissim diam, a imperdiet sem. Nulla ultricies semper lectus id pellentesque. Proin placerat vehicula consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis orci finibus erat consectetur volutpat. Suspendisse fermentum orci id odio molestie, eleifend pulvinar sapien varius. Ut vitae rhoncus enim. Morbi finibus lectus tempor augue ultricies commodo. Fusce in dignissim felis. Suspendisse eu eros orci. Suspendisse quis mattis neque. Sed ac dignissim diam, a imperdiet sem. Nulla ultricies semper lectus id pellentesque. Proin placerat vehicula consequat.</p>\n<p>&nbsp;</p>\n',
      protected: false
    },
    excerpt: {
      rendered:
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis orci finibus erat consectetur volutpat. Suspendisse fermentum orci id odio molestie, eleifend pulvinar sapien varius. Ut vitae rhoncus enim. Morbi finibus lectus tempor augue ultricies commodo. Fusce in dignissim felis. Suspendisse eu eros orci. Suspendisse quis mattis neque. Sed ac dignissim diam, a imperdiet sem. &hellip; </p>\n<p class="link-more"><a href="http://www.maquinavisual.com/blog/ballena/" class="more-link">Continue reading<span class="screen-reader-text"> &#8220;Ballena&#8221;</span></a></p>\n',
      protected: false
    },
    author: 1,
    featured_media: 0,
    comment_status: 'open',
    ping_status: 'open',
    sticky: false,
    template: '',
    format: 'standard',
    meta: [],
    categories: [1],
    tags: [],
    acf: {
      avatar_picture: false,
      nombre_del_proyecto: false,
      project_name: false,
      vimeourl: false,
      ano_del_proyecto: false,
      descripcion_del_proyecto: false,
      project_description: false,
      cliente: false
    },
    _links: {
      self: [
        { href: 'http://www.maquinavisual.com/blog/wp-json/wp/v2/posts/20' }
      ],
      collection: [
        { href: 'http://www.maquinavisual.com/blog/wp-json/wp/v2/posts' }
      ],
      about: [
        { href: 'http://www.maquinavisual.com/blog/wp-json/wp/v2/types/post' }
      ],
      author: [
        {
          embeddable: true,
          href: 'http://www.maquinavisual.com/blog/wp-json/wp/v2/users/1'
        }
      ],
      replies: [
        {
          embeddable: true,
          href:
            'http://www.maquinavisual.com/blog/wp-json/wp/v2/comments?post=20'
        }
      ],
      'version-history': [
        {
          href:
            'http://www.maquinavisual.com/blog/wp-json/wp/v2/posts/20/revisions'
        }
      ],
      'wp:attachment': [
        {
          href:
            'http://www.maquinavisual.com/blog/wp-json/wp/v2/media?parent=20'
        }
      ],
      'wp:term': [
        {
          taxonomy: 'category',
          embeddable: true,
          href:
            'http://www.maquinavisual.com/blog/wp-json/wp/v2/categories?post=20'
        },
        {
          taxonomy: 'post_tag',
          embeddable: true,
          href: 'http://www.maquinavisual.com/blog/wp-json/wp/v2/tags?post=20'
        }
      ],
      curies: [{ name: 'wp', href: 'https://api.w.org/{rel}', templated: true }]
    }
  },
  {
    id: 16,
    date: '2018-01-27T20:24:59',
    date_gmt: '2018-01-27T20:24:59',
    guid: { rendered: 'http://www.maquinavisual.com/blog/?p=16' },
    modified: '2018-01-29T16:24:15',
    modified_gmt: '2018-01-29T16:24:15',
    slug: 'pinchintun',
    status: 'publish',
    type: 'post',
    link: 'http://www.maquinavisual.com/blog/pinchintun/',
    title: { rendered: 'Pinchint\u00fan' },
    content: {
      rendered:
        '<p><img class="aligncenter wp-image-17 size-large" src="http://www.maquinavisual.com/blog/wp-content/uploads/2018/01/pinchintun-1024x576.jpg" alt="" width="525" height="295" srcset="http://www.maquinavisual.com/blog/wp-content/uploads/2018/01/pinchintun-1024x576.jpg 1024w, http://www.maquinavisual.com/blog/wp-content/uploads/2018/01/pinchintun-300x169.jpg 300w, http://www.maquinavisual.com/blog/wp-content/uploads/2018/01/pinchintun-768x432.jpg 768w, http://www.maquinavisual.com/blog/wp-content/uploads/2018/01/pinchintun.jpg 1280w" sizes="(max-width: 525px) 100vw, 525px" /></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis orci finibus erat consectetur volutpat. Suspendisse fermentum orci id odio molestie, eleifend pulvinar sapien varius. Ut vitae rhoncus enim. Morbi finibus lectus tempor augue ultricies commodo. Fusce in dignissim felis. Suspendisse eu eros orci. Suspendisse quis mattis neque. Sed ac dignissim diam, a imperdiet sem. Nulla ultricies semper lectus id pellentesque. Proin placerat vehicula consequat.</p>\n',
      protected: false
    },
    excerpt: {
      rendered:
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis orci finibus erat consectetur volutpat. Suspendisse fermentum orci id odio molestie, eleifend pulvinar sapien varius. Ut vitae rhoncus enim. Morbi finibus lectus tempor augue ultricies commodo. Fusce in dignissim felis. Suspendisse eu eros orci. Suspendisse quis mattis neque. Sed ac dignissim diam, a imperdiet sem. &hellip; </p>\n<p class="link-more"><a href="http://www.maquinavisual.com/blog/pinchintun/" class="more-link">Continue reading<span class="screen-reader-text"> &#8220;Pinchint\u00fan&#8221;</span></a></p>\n',
      protected: false
    },
    author: 1,
    featured_media: 0,
    comment_status: 'open',
    ping_status: 'open',
    sticky: false,
    template: '',
    format: 'standard',
    meta: [],
    categories: [1],
    tags: [],
    acf: {
      avatar_picture: false,
      nombre_del_proyecto: false,
      project_name: false,
      vimeourl: false,
      ano_del_proyecto: false,
      descripcion_del_proyecto: false,
      project_description: false,
      cliente: false
    },
    _links: {
      self: [
        { href: 'http://www.maquinavisual.com/blog/wp-json/wp/v2/posts/16' }
      ],
      collection: [
        { href: 'http://www.maquinavisual.com/blog/wp-json/wp/v2/posts' }
      ],
      about: [
        { href: 'http://www.maquinavisual.com/blog/wp-json/wp/v2/types/post' }
      ],
      author: [
        {
          embeddable: true,
          href: 'http://www.maquinavisual.com/blog/wp-json/wp/v2/users/1'
        }
      ],
      replies: [
        {
          embeddable: true,
          href:
            'http://www.maquinavisual.com/blog/wp-json/wp/v2/comments?post=16'
        }
      ],
      'version-history': [
        {
          href:
            'http://www.maquinavisual.com/blog/wp-json/wp/v2/posts/16/revisions'
        }
      ],
      'wp:attachment': [
        {
          href:
            'http://www.maquinavisual.com/blog/wp-json/wp/v2/media?parent=16'
        }
      ],
      'wp:term': [
        {
          taxonomy: 'category',
          embeddable: true,
          href:
            'http://www.maquinavisual.com/blog/wp-json/wp/v2/categories?post=16'
        },
        {
          taxonomy: 'post_tag',
          embeddable: true,
          href: 'http://www.maquinavisual.com/blog/wp-json/wp/v2/tags?post=16'
        }
      ],
      curies: [{ name: 'wp', href: 'https://api.w.org/{rel}', templated: true }]
    }
  }
];

export const fetchData = dispatch => dispatch =>
  axios
    .get(postsEndPoint)
    .then(res => {
      // Limpiar los datos
      const items = res.data.filter(item => item.acf.avatar_picture);
      dispatch(fetchSuccess(items));
    })
    // .catch(err => dispatch(fetchSuccess(data))); //dispatch(fetchFailed(err)));
    .catch(err => {
      const items = data.filter(item => item.acf.avatar_picture);
      dispatch(fetchSuccess(items));
    });
