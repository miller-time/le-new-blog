from google.appengine.ext import ndb
from pytz import timezone, utc

post_key = ndb.Key('Post', 'post_key')

def local_timestamp(dt):
  if not dt:
    return ''
  if not dt.tzinfo:
    dt = dt.replace(tzinfo=utc)
  return dt.astimezone(timezone('PST8PDT')).isoformat()

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
      'created': local_timestamp(self.created),
      'updated': local_timestamp(self.updated)
    }

  @classmethod
  def get(cls):
    return cls.query(ancestor=post_key).order(-cls.created).fetch()

  @classmethod
  def find(cls, id):
    return cls.get_by_id(int(id), parent=post_key)
