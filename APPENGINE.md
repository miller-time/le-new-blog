# Deployment

### Command line:

    appcfg.py --noauth_local_webserver update .

*Note: In the case of `This application does not exist (app_id=u'le-new-blog').`*

Need to re-authenticate.

Ensure signed in to Chrome as miller.time.baby@gmail.com and then `rm ~/.appcfg_oauth2_tokens`. On the next attempt, it will ask for a new token.


### Dev Server

    dev_appserver.py --skip_sdk_update_check=yes --port=8082 --admin_port=8092 app.yaml
