from flask import abort, jsonify, request
from flask.views import MethodView
from google.appengine.api import users

from le_new_blog import app
from le_new_blog.models import Post

class UserInfo(MethodView):
  def get(self):
    user = users.get_current_user()
    admin = users.is_current_user_admin()
    if user:
      username = user.email()
      auth_url = users.create_logout_url(request.url_root)
    else:
      username = None
      auth_url = users.create_login_url(request.url_root)

    return jsonify(
      user=username,
      admin=admin,
      auth=auth_url
    )

info_view = UserInfo.as_view('info')
app.add_url_rule(
  '/api/user_info',
  view_func=info_view,
  methods=['GET']
)

class Posts(MethodView):
  def get(self):
    posts = Post.get()

    return jsonify(posts=[p.to_dict() for p in posts])

  def post(self):
    admin = users.is_current_user_admin()
    if not admin:
      return abort(401)

    payload = request.get_json(force=True, silent=True)
    if not payload:
      return abort(400)

    title = payload.get('title')
    body = payload.get('body')
    post = Post(title=title, body=body)
    post.put()

    return jsonify(post=post.to_dict())

posts_view = Posts.as_view('posts')
app.add_url_rule(
  '/api/posts',
  view_func=posts_view,
  methods=['GET', 'POST']
)
