from flask import jsonify
from flask.views import MethodView

from le_new_blog import app
from le_new_blog.models import Post

class Posts(MethodView):
  def get(self):
    posts = Post.get()

    return jsonify(posts=[p.to_dict() for p in posts])

view = Posts.as_view('posts')
app.add_url_rule(
  '/api/posts',
  view_func=view,
  methods=['GET']
)
