import Post from './models/post';

export default function createFakeData() {
  // 0, 1, ... 39로 이루어진 배열을 생성한 후 포스트 데이터로 변환
  const posts = [...Array(40).keys()].map((i) => ({
    title: `포스트 #${i}`,
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat eget nisl ac tristique. Suspendisse facilisis vitae metus vel vehicula. Pellentesque eget hendrerit purus. Morbi tincidunt, ipsum at varius fermentum, turpis libero aliquam mi, pharetra placerat velit ligula sed lectus. Mauris at nulla fringilla, consequat nibh sit amet, faucibus mi. Phasellus id tortor id justo lobortis aliquam. Proin pretium tortor odio, quis commodo nisi tincidunt non. Mauris facilisis sit amet ligula sed auctor. Donec aliquam elit quis fermentum placerat. Maecenas scelerisque neque eu dui laoreet, nec hendrerit nisl laoreet. Integer tristique libero ut est malesuada hendrerit. Proin nec suscipit velit. Vestibulum orci dui, facilisis vitae nibh nec, luctus condimentum mauris.',
    tags: ['가짜', '데이터'],
  }));
  Post.insertMany(posts, (err, docs) => {
    console.log(docs);
  });
}
