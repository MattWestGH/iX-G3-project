const contactPost = require("../models/contactForm")

exports.getPosts = (req, res, next) => {
    const postQuery = contactPost.find();
    let fetchedPosts;
    postQuery
      .then((documents) => {
        fetchedPosts = documents;
      })
      .then(() => {
        res.status(200).json({
          message: 'Posts fetched successfully!',
          posts: fetchedPosts,
        });
      })
      .catch((error) => {
        res.status(500).json({
          message: 'Fetching posts failed!',
        });
      });
  };
exports.createcontactPost = (req, res, next) => {
    const email = req.body.email;
    const name = req.body.name;
    const surname = req.body.surname;
    const number = req.body.number;
    const post = new contactPost({
      email: email,
      name: name,
      number: number,
      surname: surname
    });
    post
      .save()
      .then((result) => {
        console.log(result);
        res.status(201).json({
          message: 'Post created successfully!',
          post: result,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };