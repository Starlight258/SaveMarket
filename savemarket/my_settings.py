#my_settings.py
DATABASES = {
    'default': {
        'ENGINE' : 'django.db.backends.mysql',
        'NAME':'savemarket',
        'USER':'admin',
        'PASSWORD':'admin1234',
        'HOST':'database-1.caffybuqajew.ap-northeast-2.rds.amazonaws.com',
        'PORT':'3306',
        'OPTIONS': {
            'init_command': 'SET sql_mode="STRICT_TRANS_TABLES"'
        }
    }
}
SECRET_KEY = 'django-insecure-xu^l8x&h99zvqed2t+%!%152@mw+oqo$r7b-8ey)npatz%-pjs'