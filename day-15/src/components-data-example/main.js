const mockPosts = [
  {
    id: 1,
    title: "We're living some strange times",
    content:
      'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    thumbnail_image: '../../assets/img/demopic/3.jpg',
    name: 'Seven',
    date: '22 July 2017',
    read: '16 min read',
  },
  {
    id: 2,
    title: 'The beauty of this world is in your heart',
    content:
      'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    thumbnail_image: '../../assets/img/demopic/1.jpg',
    name: 'Jane',
    date: '22 July 2017',
    read: '12 min read',
  },
  {
    id: 3,
    title: 'Dreaming of Las Vegas Crazyness',
    content:
      'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    thumbnail_image: '../../assets/img/demopic/2.jpg',
    name: 'Steve',
    date: '22 July 2017',
    read: '6 min read',
  },
  {
    id: 4,
    title: 'San Francisco at its best view in all seasons',
    content:
      'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    thumbnail_image: '../../assets/img/demopic/4.jpg',
    name: 'Sal',
    date: '22 July 2017',
    read: '8 min read',
  },
  {
    id: 5,
    title: 'San Francisco at its best view in all seasons',
    content:
      'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    thumbnail_image: '../../assets/img/demopic/4.jpg',
    name: 'Sal',
    date: '22 July 2017',
    read: '8 min read',
  },
];

const mockRecentPosts = [
  {
    id: 1,
    title: "We're living some strange times",
    content:
      'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    thumbnail_image: '../../assets/img/demopic/5.jpg',
    name: 'Seven',
    date: '22 July 2017',
    read: '16 min read',
  },
  {
    id: 2,
    title: 'The beauty of this world is in your heart',
    content:
      'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    thumbnail_image: '../../assets/img/demopic/6.jpg',
    name: 'Jane',
    date: '22 July 2017',
    read: '12 min read',
  },
  {
    id: 3,
    title: 'Dreaming of Las Vegas Crazyness',
    content:
      'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    thumbnail_image: '../../assets/img/demopic/7.jpg',
    name: 'Steve',
    date: '22 July 2017',
    read: '6 min read',
  },
  {
    id: 4,
    title: 'San Francisco at its best view in all seasons',
    content:
      'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    thumbnail_image: '../../assets/img/demopic/8.jpg',
    name: 'Sal',
    date: '22 July 2017',
    read: '8 min read',
  },
  {
    id: 5,
    title: 'San Francisco at its best view in all seasons',
    content:
      'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    thumbnail_image: '../../assets/img/demopic/9.jpg',
    name: 'Sal',
    date: '22 July 2017',
    read: '8 min read',
  },
  {
    id: 6,
    title: 'San Francisco at its best view in all seasons',
    content:
      'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    thumbnail_image: '../../assets/img/demopic/10.jpg',
    name: 'Sal',
    date: '22 July 2017',
    read: '8 min read',
  },
];

let metafooterComponent = {
  template: `
  <div class="metafooter">
    <div class="wrapfooter">
      <span class="meta-footer-thumb">
      <a href="auth.html"><img class="author-thumb" src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x" alt="Sal"></a>
      </span>
      <span class="author-meta">
      <span class="post-name"><a href="author.html">{{ post.name }}</a></span><br/>
      <span class="post-date">{{ post.date }}</span><span class="dot"></span><span class="post-read">{{ post.read }}</span>
      </span>
      <span class="post-read-more"><a title="Read Story"><svg class="svgIcon-use" width="25" height="25" viewbox="0 0 25 25"><path d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z" fill-rule="evenodd"></path></svg></a></span>
    </div>
  </div>
  `,
  props: ['post']
}

let mediumPpostComponent = {
  props: ['post'],
  methods: {
    // emit to add
    emitToAdd(post) {
      this.$emit('add', post);
    }
  },
  components: {
    'metafooter-component': metafooterComponent
  }
}

let recentPostComponent = {
  template: `
  <div class="card">
				<a href="post.html">
					<img class="img-fluid" v-bind:src="post.thumbnail_image" alt="">
				</a>
				<div class="card-block">
					<h2 class="card-title"><a href="post.html">{{ post.title }}</a></h2>
					<h4 class="card-text">{{ post.content }}</h4>
					<div class="metafooter">
						<div class="wrapfooter">
							<span class="meta-footer-thumb">
							<a href="author.html"><img class="author-thumb" src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x" alt="Sal"></a>
							</span>
							<span class="author-meta">
							<span class="post-name"><a href="author.html">{{ post.name }}</a></span><br/>
							<span class="post-date">{{ post.date }}</span><span class="dot"></span><span class="post-read">{{ post.read }}</span>
							</span>
							<span class="post-read-more"><a href="post.html" title="Read Story"><svg class="svgIcon-use" width="25" height="25" viewbox="0 0 25 25"><path d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z" fill-rule="evenodd"></path></svg></a></span>
						</div>
					</div>
				</div>
			</div>
  `,
  props: ['post'],
}

new Vue({
  el: '#app',
  data() {
    return {
      mockPosts,
      mockRecentPosts,
    }
  },
  methods: {
    // parent component add event listener
    addPostComponent(post) {
      let newPost = {};
      let lastPostObjectID =
        this.mockPosts[this.mockPosts.length - 1].id;

      // shallow copy tweet object
      newPost = Object.assign({}, post);

      // set tweet id to be one greater than last tweet
      newPost.id = lastPostObjectID + 1;
      this.mockPosts.push(newPost);
    }
  },
  components: {
    'medium-post-component': mediumPpostComponent,
    'recent-post-component': recentPostComponent
  }
});
