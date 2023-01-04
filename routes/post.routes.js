const router =require('express').Router()
const postController =require('../controllers/post.controller.js')


router.get('/',postController.readPost)
router.post('/add',postController.createPost)
router.put('/:id',postController.updatePost)
router.delete('/:id',postController.deletePost)
router.patch('/like_post/:id',postController.likePost)
router.patch('/unlike_post/:id',postController.unlikePost)


//comments
router.patch('/comment_post/:id',postController.commentPost)
router.patch('/edit_comment_post/:id',postController.editComment)
router.patch('/delete_comment_post/:id',postController.deleteCommentPost)

module.exports =router