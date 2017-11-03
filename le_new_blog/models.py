from google.appengine.ext import ndb

post_key = ndb.Key('Post', 'post_key')

class Post(ndb.Model):
  title = ndb.StringProperty()
  body = ndb.TextProperty()
  created = ndb.DateTimeProperty(auto_now_add=True)
  updated = ndb.DateTimeProperty(auto_now=True)

  def __init__(self, *args, **kwargs):
    super(Post, self).__init__(*args, parent=post_key, **kwargs)

  def to_dict(self):
    return {
      'id': self.key.id(),
      'title': self.title,
      'body': self.body,
      'created': self.created.isoformat(),
      'updated': self.updated.isoformat()
    }

  @classmethod
  def get(cls):
    return cls.query(ancestor=post_key).order(-cls.created).fetch()
